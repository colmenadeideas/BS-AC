<?php
	class apiController extends Controller {
		public function __construct() {
	
            parent::__construct();
            header('Access-Control-Allow-Origin: http://localhost:3000');
            header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
		}
		//ACCESS/ 
        //create //log in or out with time
        //read  //list
        //update //add comments
        //delete //delete entry

        public function employees($action, $table, $param='') {
            switch ($action) {
                case 'get':
                    $this->api->queries($action, $table);
                    break;

                case 'insert':
                    $post = json_decode(file_get_contents('php://input'), true); //asi es como se extraen los datos que vienen por post de react
                    if ($table === 'schedules') {
                        $days = json_encode($post['days']);
                        $post['days'] = $days;

                        $this->api->queries($action, $table, $post);
                        $resIdSche = $this->api->queries('getLastId', $table);

                        if ($param === 'all') {
                            $this->api->updateAll('employees', 'id_schedule', $resIdSche);
                        } else {
                            $data['id_schedule'] = $resIdSche;
                            $resIdEmp = $this->api->queries('getLastId', 'employees'); 
                            $this->api->queries('update', 'employees', $data, $resIdEmp);
                        }
                    } else {
                        $resExist = $this->api->queries('checkExist', $table, 'identificacion_pais', $post['identificacion_pais']);
                        if ($resExist === 1) {
                            $this->api->queries($action, $table, $post);
                        } else {
                            echo $resExist;
                        }
                    }
                    break;
                
                default:
                    echo 'default';
                    break;
            }
        }
		
		public function fixtime() {
			//This is to fix server diference time witth +4.5 GMT
			
			/*date_default_timezone_set('America/St_Johns');
			$fecha = new DateTime();
			$zh = $fecha->getTimezone();
			echo $zh->getName();
			echo date("h:i:s a"); */

			$timestamp = strtotime(escape_value(date("h:i:s a"))) + 30*60;
			$time = date('h:i:s a', $timestamp);
			
			$timeparts = explode(":", $time);
			$timepart2 = explode(" ", $timeparts[2]);

			$timeAll['fulltime']	= $time;
			$timeAll['h']	= $timeparts[0];
			$timeAll['i']	= $timeparts[1];
			$timeAll['s']	= $timepart2[0];
			$timeAll['a']	= $timepart2[1];

			return $timeAll;
        }

		public function hola(){
			echo "hola mundo";
        }

		public function users ($action, $param1="",  $param2="") {
			switch ($action) {
				case 'list':
					$users = $this->model->getUsers();					
				
					foreach ($users as $user) {
						//check if user is authorized for this APP
						$access = json_decode($user['beeapps_access'], JSON_UNESCAPED_UNICODE);
					
						if($access['inout'] != "1"){//Not allowed
							unset($user);								
						} else {
							unset($user['password']);	
							unset($user['status']);	
							$usernew[] = $user;
						}
					}
					
					$users = $usernew;
					
					if (empty($users)) {
						$response["tag"] = "users";
						$response["empty"] = 1;
						$response["response"] = 'No hay Registros';
					} else {
						
						$response["tag"] = "users";
						$response["empty"] = 0;
						$response["users"] = $users;

					}
					echo json_encode($response, JSON_UNESCAPED_UNICODE);
					
					break;
			}
		}
		
		
		public function access($action, $param1="",  $param2="") {
			
			$todayis = date("Y-m-d");
			$response["tag"] = "attendance";

			switch ($action) {
							
				/**********
				 * ********		CREATE
				 * ********
				 */	
				////------- CREATE
				case 'add': 
				
					$user = explode('=', escape_value($param1)); //user
					$is = explode('=', escape_value($param2)); //is ARRIVAL or DEPARTURE
					
					$userIs = $this->model->getUser($user[1]);
					
					$array_data['user'] = $userIs[0]['username'];
					$array_data['date'] = $todayis;
					$array_data['ipaddress'] = $this->helper->getIpAddress();

					
					
					//$array_data['comments'] = ;
					//$array_data['comments_by_user'] = ;
					
					$hasAlreadyLogged = $this->model->getThisAccess($todayis, $userIs[0]['username']);

					$timeme = $this->fixtime();

					//Log IN
					switch($is[1]) {								
								
						case 'arrival':
								
								if(empty($hasAlreadyLogged)) {
									
									
									$array_data[ $is[1] ] = $timeme['fulltime'];//date("h:i:s a"); //arrival or departure
									//CREATE
									$accessUser = $this->helper->insert('access_attendance', $array_data);
									$accessUser = 1;
									$response["response"] = "Hora de Llegada: "/*.$array_data[ $is[1] ]*/;
									$response["error"] = 0;
									$response["h"] = $timeme['h']; //date("h");
									$response["i"] = $timeme['i']; //date("i");
									$response["s"] = $timeme['s']; //date("s");
									$response["a"] = $timeme['a']; //date("a");
									
								} else {
										
									$previous = $hasAlreadyLogged[0]['arrival'];
									if (empty($previous)) {
										$array_data[ $is[1] ] = $timeme['fulltime']; //date("h:i:s a");
										//UPDATE
										$accessUser = $this->helper->update('access_attendance', $hasAlreadyLogged[0]['id'], $array_data);
									} else {
										$response["response"] = "Already checked in. ARRIVAL: ".$previous;
										$response["log"] = "Ya se registro";
									}
								}
								
								break;
								
								
						case 'departure':
								
								$array_data[ $is[1] ] = $timeme['fulltime']; //date("h:i:s a"); //arrival or departure
									
								if(empty($hasAlreadyLogged)) { // No ha hecho ningun registro de ENTRADA
									$response["response"] = "No ha indicado llegada el dia de hoy. Intente de nuevo";
									$response["log"] = "No hay registros";
									
								} else { 
									$hasArrival = $hasAlreadyLogged[0]['arrival']; 
									
									if (empty($hasArrival)) { //Hay registro de fecha pero no de ENTRADA
										// ALERT
										$response["response"] = "No ha indicado llegada el dia de hoy. Intente de nuevo";
										$response["log"] = "hay registro de fecha, pero arrival is NULL";
									} else {
										//Arrival was set first. it's ok -->
										$previous = $hasAlreadyLogged[0]['departure'];
									
										if (empty($previous)) {
											$array_data[ $is[1] ] = date("h:i:s a");
											$response["response"] = "Hora de Salida: ";
											$response["error"] = 0;
											$response["h"] = $timeme['h']; //date("h");
											$response["i"] = $timeme['i']; //date("i");
											$response["s"] = $timeme['s']; //date("s");
											$response["a"] = $timeme['a']; //date("a");
											//UPDATE
											$accessUser = $this->helper->update('access_attendance', $hasAlreadyLogged[0]['id'], $array_data);
										} else {
											$response["response"] = "Already checked in. DEPARTURE: ".$previous;
										}
									}
								}
								
								break;
					}

					/*//Log IN
					if(empty($hasAlreadyLogged)) {
					
						$array_data[ $is[1] ] = date("h:i:s a"); //arrival or departure
						//CREATE
						$accessUser = $this->helper->insert('access_attendance', $array_data);
						
					
					} else { //Already logged IN or OUT
						
						switch($is[1]) {
							case 'arrival':
								
								$previous = $hasAlreadyLogged[0]['arrival'];
								
								if (empty($previous)) {
									$array_data[ $is[1] ] = date("h:i:s a");
									//UPDATE
									$accessUser = $this->helper->update('access_attendance', $hasAlreadyLogged[0]['id'], $array_data);
								} else {
									$response["response"] = "Already checked in. ARRIVAL: ".$previous;
								}
								break;
								
							case 'departure':
								
								$hasArrival = $hasAlreadyLogged[0]['arrival'];
								if (empty($hasArrival)) {
									// ALERT
									$response["response"] = "No ha indicado llegada el dia de hoy. Intente de nuevo";
									
								} else {
									
									//Arrival was set first. it's ok -->
									$previous = $hasAlreadyLogged[0]['departure'];
								
									if (empty($previous)) {
										$array_data[ $is[1] ] = date("h:i:s a");
										//UPDATE
										$accessUser = $this->helper->update('access_attendance', $hasAlreadyLogged[0]['id'], $array_data);
									} else {
										$response["response"] = "Already checked in. DEPARTURE: ".$previous;
									}
									
									
								}
								
								
								break;
						}
						
					}*/
					if (empty($accessUser)) {						
						$response["error"] = 1;
						
					} else {
						$response["is"] = $is[1];
					}
					
					$response["attendance"] = $accessUser;
					
					echo json_encode($response, JSON_UNESCAPED_UNICODE);
					break;

				////------- READ	
				case 'get': 
				
					if($param1 === 'all') {
						$response = $this->model->getAccess();
					} else {
						$from 	= $param1;
						$until 	= $param2;

						$users = $this->model->getUsers();
						foreach ($users as $user) {
							$response['users'][$user['username']] = $this->model->getAccessperUserBetween($user['username'], $from, $until);
						}						
						
					}
					
					if (empty($response)) {
						$response["tag"] = "attendance";
						$response["empty"] = 1;
						$response["response"] = 'No hay Registros';
					} else {	
						
						$response["tag"] = "attendance";
						$response["response"] = $response;
					}	
					echo json_encode($response, JSON_UNESCAPED_UNICODE);
					
					break;
				
				default:
					exit;
					break;
			}
			
		}
		
	
	}
?>
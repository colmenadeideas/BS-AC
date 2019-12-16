<?php
class Api extends ApiQuery {

	public function __construct() {
        parent::__construct();
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    }
    
    public function queries($action, $table, $data='', $id='', $by='id') {
        switch ($action) {
            //basicos
            case 'get':
                $response = ApiQuery::get($table);
                echo json_encode($response);
            break;

            case 'insert':
                $response = Helper::insert($table, $data);
                echo $response;
                break;

            case 'update':
                $response = Helper::update($table, $id, $data, $by);
                echo $response;
            break;


            //especiales
            case 'getLastId':
                $response = ApiQuery::getLastId($table);
                return $response[0]['id'];
            break;

            case 'checkExist':
                $response = ApiQuery::get($table, $data, $id);
                if (is_array($response) && sizeof($response) <= 0) {
                    return 1;
                } else {
                    return -1;
                }
                break;
        }
    }

    public function updateAll($table, $param, $value) {
        $response = ApiQuery::updateAll($table, $param, $value);
        echo 1;
    }

	// AUTOCOMPLETE: This function is invoked when user is writing fields related to : Doctor's name, Clinics, Addresses and Doctor's Speciality
	public function autocomplete($print = "json", $what="all", $string) {

		//	$string = trim($_GET['term']);
		/*switch ($what) {
			case 'practices':
				$query = ApiQuery::autocomplete($what, $string);
				break;
			
			case "all":
				$query = ApiQuery::autocomplete($string);
				break;
		}*/
		$query = ApiQuery::autocomplete($what, $string);
		
		if ($print == 'json') {
			echo json_encode($query, JSON_UNESCAPED_UNICODE);
		} else {//modo "array"
			return $array_final;
		}

	}
	
	public function get($print = "json", $what, $param, $id, $data = "false") {
		//DB::debugMode(true);

		$what = escape_value($what);
		$id = escape_value($id);
		$param = escape_value($param);

		$array_entity = ApiQuery::get($what, $param, $id);
		$profileFields = DB::columnList($what);

		$i = 0;
		if ($data == "true") {
			//This would be used for jquery.DataTable to convert array to 'data'
			$what = "data"; 
		} 
		foreach ($array_entity as $Entity) {
			$array_final[$what][$i] = $Entity;
			$i++;
		}

		if ($print == 'json') {
			echo json_encode($array_final, JSON_UNESCAPED_UNICODE);
		} else {//modo "array"
			return $array_final;
		}
	}
	
}
?>
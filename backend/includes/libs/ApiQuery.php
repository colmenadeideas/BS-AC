<?php
	class ApiQuery {
		//Modelo
		
		public function __construct() {
			
	
		}
		
	
		//************ ENTIDADES ///		
		public function get($what, $param = "", $id = ""){
			$what = escape_value($what);
			$param = escape_value($param);
			$id = escape_value($id);
			$limit = "";

			if (!empty($param)){
				$limit = "LIMIT 1";
				$where = "WHERE $what.$param=$id";
			}
			//DB::debugMode(TRUE);
			/*/if ($what == 'egresos_comprobantes'){
				
				return DB::query("SELECT proveedor.razon_social, 
										 proveedor.id,
										 egresos_comprobantes.*
					FROM egresos_comprobantes 
					INNER JOIN proveedor ON proveedor.id= egresos_comprobantes.proveedor_id $where $limit");
				

			} else {*/

				if ($param == "") {				
					// Get ALL
					return DB::query("SELECT * FROM " . DB_PREFIX . "$what ");
				} else {
					// Get By A Parameter
					return DB::query("SELECT * FROM " . DB_PREFIX . "$what WHERE $param=%s $limit", $id);				
				}
			//}
        }
        
        public function getLastId($what) {
            return DB::query("SELECT MAX(id) AS id FROM " .$what);
        }

        public function updateAll($what, $param, $value) {
            return DB::query("UPDATE $what SET $param=$value");
        }

	}
?>
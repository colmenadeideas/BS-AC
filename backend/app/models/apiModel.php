<?php
	class apiModel extends Model {
	
		public function __construct() {
	
			parent::__construct();
		}
		
		public function getAccess(){	
			return DB::query("SELECT * FROM " . DB_PREFIX . "access_attendance");
		}
		
		public function getThisAccess($date, $user){	
			return DB::query("SELECT * FROM " . DB_PREFIX . "access_attendance WHERE date=%s AND user=%s ORDER BY id DESC", $date, $user);
		}
		
		public function getUsers(){	
			return DB::query("SELECT * FROM " . DB_PREFIX . "users WHERE status = 'active'");
		}

		public function getUser($code){	
			return DB::query("SELECT * FROM " . DB_PREFIX . "users WHERE code=%s LIMIT 1", $code);
		}
		public function getAccessBetween ($from, $until) {
			return DB::query("SELECT * FROM " . DB_PREFIX . "access_attendance WHERE date >= '".$from."' and date <= '".$until."'");
		}
		public function getAccessperUserBetween ($user, $from, $until) {
			return DB::query("SELECT * FROM " . DB_PREFIX . "access_attendance WHERE date >= '".$from."' and date <= '".$until."' AND user = '".$user."'");
		}
		
		
	}
?>
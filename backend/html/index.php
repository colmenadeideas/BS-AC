<?php
	
	//error_reporting(E_ALL);
	//ini_set("display_error",1);
	require_once ('../includes/config/local.php'); //if Production Site change to server.php
	require_once ('../includes/config/config.php');
	
    // path of the log file where errors need to be logged
    $log_file = "./errors.log";
    
    // setting error logging to be active
    ini_set("log_errors", TRUE);  
    
    // setting the logging file in php.ini
    ini_set('error_log', $log_file);
    

	function __autoload($class) {
			
		require ( LIBS . $class. '.php');
		
    }
    

	require ( LIBS . 'Functions.php');
	require ( LANG . DEFAULT_LANGUAGE .'.php');
	
	$app = new App();
	
	$app->init();	
	
?>
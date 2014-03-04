<?php 
//include_once("../app_class/class.jsmin.php");

ob_start("ob_gzhandler");
header('Content-type: text/css');

header("Expires: Sat, 20 Oct 2015 00:00:00 GMT");
header("Cache-Control: max-age=2692000, public");
header("Pragma: cache"); 
include_once("bizelaw.css");
include_once("bizelawie7.css");

?>
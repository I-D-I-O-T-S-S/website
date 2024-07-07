<?php
    // $location = "http://".$_SERVER['HTTP_HOST']."/IA3";
    require_once("createHeaders.php");

    if (http_response_code() == 404){
        header("location: ".$path."/error/404");
    }
    if (http_response_code() == 403){
        header("location: ".$path."/error/403");
    }
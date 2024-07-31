<!DOCTYPE html>
<?php
    require_once(__DIR__."/../scripts/createHeaders.php");
    createHeader("403", "404 forbidden");

    require_once(__DIR__."/../scripts/createNav.php");
    consoleLog("403 forbidden");
?>
<h1>403</h1>
<h2 style="font-weight: normal;">Forbidden</h2>
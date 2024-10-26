<!DOCTYPE html>
<?php
    require_once(__DIR__."/../scripts/createHeaders.php");
    createHeader("404", "404 page not found");

    require_once(__DIR__."/../scripts/createNav.php");
    consoleLog("404 Page not found");

    require_once(__DIR__."/../scripts/createFooter.php");
?>
<div class="content">
<?php createNav() ?>
<h1>404</h1>
<h2 style="font-weight: normal;">Page not found</h2>
</div>
<?php createFooter() ?>
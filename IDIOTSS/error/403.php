<!DOCTYPE html>
<?php
    require_once(__DIR__."/../scripts/createHeaders.php");
    createHeader("403", "404 forbidden");

    require_once(__DIR__."/../scripts/createNav.php");
    consoleLog("403 forbidden");

    require_once(__DIR__."/../scripts/createFooter.php");
?>
<div class="content">
<?php createNav() ?>
<h1>403</h1>
<h2 style="font-weight: normal;">Forbidden</h2>
</div>
<?php createFooter() ?>
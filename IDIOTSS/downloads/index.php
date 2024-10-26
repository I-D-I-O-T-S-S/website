<html>
    <?php
        require_once(__DIR__."/../scripts/createHeaders.php");
        require_once(__DIR__."/../scripts/createNav.php");
        createHeader("Downloads - IDIOTSS.com", "Mod downloads");
        require_once(__DIR__."/../scripts/createFooter.php");
    ?>
    <link rel="stylesheet" href="<?php echo $path?>/stylesheets/downloads.css">
    <body>
    <div class="content">
        <?php createNav() ?>
        <h1 class="Title">Downloads</h1>
        <!-- <p><a href="<?php echo $path?>/downloads/modList">Mod List</a></p> -->
        
        <p><a href="<?php echo $path?>/downloads/changelog">changelog</a></p>
        <h3>Old Server</h3>
        <p>This is the old server. It runs on <a href="https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html">forge 1.20.1<a>. Download the world and the mods for it to work.</p>
        <p><a href="<?php echo $path?>/downloads/mods-2.7.0.zip">mods-2.7.0.zip</a> (65mb)</p>
        <p><a href="<?php echo $path?>/downloads/world-2.7.0.zip">world-2.7.0.zip</a> (105mb)</p>
    </div>
    <?php createFooter() ?>
    </body>
</html>

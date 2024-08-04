<html>
    <?php
        require_once(__DIR__."/scripts/createHeaders.php");
        createHeader("IDIOTSS Website", "The best website ever");
        require_once(__DIR__."/scripts/createNav.php")
    ?>
    <body>
        <?php createNav() ?>
        <img src="<?php echo $path?>/images/egg.gif" style="display:inline-block" height=10%>
        <h1 style="display:inline-block; color:hotpink">Web design is my passion</h1>
        <img src="<?php echo $path?>/images/egg.gif" style="display:inline-block" height=10%>
        <p><a href="<?php echo $path?>/dynmap">Dynmap</a></p>
        <p><a href="<?php echo $path?>/train-map">Trains</a></p>
        <h3><a href="<?php echo $path?>/downloads/IDIOTSS Launcher-setup.exe">Download Launcher<a></h3>
        <p><a href="<?php echo $path?>/downloads">Downloads</a></p>
    </body>
</html>


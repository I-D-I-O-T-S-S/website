<html>
    <?php
        require_once(__DIR__."/scripts/createHeaders.php");
        createHeader("IDIOTSS Website", "The best website ever");
        require_once(__DIR__."/scripts/createNav.php")
    ?>
    <body id="body">
        <?php createNav() ?>
        <div class="content">
            <h1  class="title">Web design is my passion</h1>
            <p class="url"><a href="<?php echo $path?>/dynmap">DYNMAP</a></p>
            <p class="url"><a href="<?php echo $path?>/train-map">TRAINS</a></p>
            <h3 class="url download"><a href="<?php echo $path?>/downloads/IDIOTSS Launcher-setup.exe">DOWNLOAD LAUNCHER<a></h3>
            <!-- <p class="url"><a href="<?php echo $path?>/downloads/changelog">CHANGELOG</a></p> -->
        </div>
        <script type = "text/javascript" src = "scripts/slide.js"></script>
    </body>
</html>


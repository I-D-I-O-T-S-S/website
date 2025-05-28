<html>
    <?php
        require_once(__DIR__."/scripts/createHeaders.php");
        createHeader("IDIOTSS Website", "The best website ever");
        require_once(__DIR__."/scripts/createFooter.php");
        require_once(__DIR__."/scripts/createNav.php")
    ?>
    <body id="body">
        <div class="content">
        <link rel="stylesheet" href="<?php echo $path?>/stylesheets/index.css">
        <div id="background"></div>
        <?php createNav() ?>
        <h1  class="title">IDIOTSS MINECRAFT SERVER</h1>
        <div class="content-links">
            <a href="bluemap.idiotss.com">
                <div class="url">
                    <span></span>
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><p class="link-text">BLUEMAP</p></div>
                </div>
            </a>
            <a href="<?php echo $path?>/train-map">
                <div class="url">
                    <span></span>
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><p class="link-text">TRAINS</p></div>
                </div>
            </a>
            <a class="download-url" href="<?php echo $path?>/downloads/IDIOTSS Launcher-setup.exe">
                <div class="url download">
                    <span></span>
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><h3 class="link-text">DOWNLOAD LAUNCHER</h3><p class="link-subtext">(WINDOWS)</p></div>
                </div>
            </a>
        </div>
        <script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <!-- <script language="JavaScript" type="text/javascript" src="/js/jquery-ui-personalized-1.5.2.packed.js"></script>
        <script language="JavaScript" type="text/javascript" src="/js/sprinkle.js"></script> -->
        <script type = "text/javascript" src = "scripts/slide.js"></script>
    </div>
    </body>
    <?php createFooter() ?>
</html>


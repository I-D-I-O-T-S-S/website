<html>
    <?php
        require_once(__DIR__."/scripts/createHeaders.php");
        createHeader("IDIOTSS Website", "The best website ever");
        require_once(__DIR__."/scripts/createNav.php")
    ?>
    <body id="body">
        <link rel="stylesheet" href="<?php echo $path?>/stylesheets/index.css">
        <div id="background"></div>
        <?php createNav() ?>
        <h1  class="title">IDIOTSS MINECRAFT SERVER</h1>
        <div class="content-links">
            <div class="url">
                <a href="<?php echo $path?>/dynmap">
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><p class="link-text">DYNMAP</p></div>
                </a>
            </div>
            <div class="url">
                <a href="<?php echo $path?>/train-map">
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><p class="link-text">TRAINS</p></div>
                </a>
            </div>
            <div class="url download">
                <a href="<?php echo $path?>/downloads/IDIOTSS Launcher-setup.exe">
                    <div id="hover">
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                    </div>
                    <div class="a"><h3 class="link-text">DOWNLOAD LAUNCHER</h3><p class="link-subtext">(WINDOWS)</p></div>
                </a>
            </div>
        </div>
        <script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <!-- <script language="JavaScript" type="text/javascript" src="/js/jquery-ui-personalized-1.5.2.packed.js"></script>
        <script language="JavaScript" type="text/javascript" src="/js/sprinkle.js"></script> -->
        <script type = "text/javascript" src = "scripts/slide.js"></script>
    </body>
</html>


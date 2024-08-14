<?php
require_once(__DIR__."/createHeaders.php");
?>

<?php function CreateNav() {
    $path = "http://".$_SERVER['HTTP_HOST'];
?>
<!-- Imports the stylesheet -->
<link rel="stylesheet" href="<?php echo $path?>/stylesheets/nav.css">
<nav>
    <div class="links" style="height: 200px;">
        <!-- SOLAR SYSTEM from https://codepen.io/AlexWarnes/pen/jXYYKL -->
        <a href="<?php echo $path;?>" style="display: inline-block; top: 0; position: absolute; z-index: 1;">
            <div class="spinner-box">
                <div class="solar-system">
                    <div class="earth-orbit orbit">
                        <div class="planet earth"></div>
                        <div class="venus-orbit orbit">
                            <div class="planet venus"></div>
                            <div class="mercury-orbit orbit">
                                <div class="planet mercury"></div>
                                <div class="sun"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>

        <!-- https://codepen.io/sarazond/pen/LYGbwj -->
        <div id="space">
            <div class="blocker" id="blocker1"></div>
            <div class="blocker" id="blocker2"></div>
            <div class="blocker" id="blocker3"></div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
    </div>

</nav>

<!-- Sets the background -->
<div style="background-color:#389afc; height: 1vh;"></div>
<?php }?>
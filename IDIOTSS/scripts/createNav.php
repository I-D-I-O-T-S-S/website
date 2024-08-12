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
        <a href="<?php echo $path;?>">
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
    </div>

</nav>

<!-- Sets the background -->
<div style="background-color:#389afc; height: 1vh;"></div>
<?php }?>
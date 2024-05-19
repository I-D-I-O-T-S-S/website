<?php
require_once("createHeaders.php");
?>
<!-- Imports the stylesheet -->
<link rel="stylesheet" href="<?php echo $path?>/stylesheets/nav.css">
<nav>
    <!-- This is the links at the top of the page it is currently only the SCCC logo -->
    <div class="links">
        <?php
    $options = array(
        // -------------------------- REALLY REALLY BAD WORKAROUND -------------------------- //
        // Can't figure out how impliment text so just make a 1200 x 630 image with the text you want
        array('link' => $path,       'image' => $path.'/favicon.png'),
        array('link' => $path,       'image' => $path.'/favicon.png'),
        array('link' => $path,       'image' => $path.'/favicon.png'),
        array('link' => $path,       'image' => $path.'/favicon.png'),
    );
    ?>
    <!-- I put the links as an array because it make for easy itieration on the nav bar -->
    <?php foreach ($options as $option):?>
        <a href="<?php echo $option['link'];?>" style="text-decoration: none;">
            <img src="<?php echo $option['image'];?>" width="288px">
        </a>
    <?php endforeach;?>
</nav>

</div>
<!-- Sets the background -->
<div style="background-color:#389afc; height: 1vh;"></div>
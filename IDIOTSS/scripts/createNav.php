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
        <?php
    $options = array(
        // -------------------------- REALLY REALLY BAD WORKAROUND -------------------------- //
        // Can't figure out how impliment text so just make a 1200 x 630 image with the text you want
        array('link' => $path,       'image' => $path.'/favicon.png'),
        // array('link' => $path,       'image' => $path.'/favicon.png'),
        // array('link' => $path,       'image' => $path.'/favicon.png'),
        // array('link' => $path,       'image' => $path.'/favicon.png'),
    );
    ?>
    <!-- I put the links as an array because it make for easy itieration on the nav bar -->
    <?php foreach ($options as $option):?>
        <a href="<?php echo $option['link'];?>" style="display: inline-block; text-decoration: none; height: 200px;">
            <img src="<?php echo $option['image'];?>" width="200px">
        </a>
    <?php endforeach;?>
</nav>

</div>
<!-- Sets the background -->
<div style="background-color:#389afc; height: 1vh;"></div>
<?php }?>
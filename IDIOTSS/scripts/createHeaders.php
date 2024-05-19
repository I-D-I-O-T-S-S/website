<?php

$path = "http://".$_SERVER['HTTP_HOST'];

function createHeader($text, $description) {
    echo "<head>";
    echo "<title>" . $text . "</title>";
    echo "<link rel='icon' href='".$path."/favicon.png'>";
    echo "</head>";
    echo "<meta content='".$text."' property='og:title' />";
    echo "<meta content='".$description."' property='og:description' />";
    echo "<meta content='".$path."/images/egg.gif' property='og:image' />";
}
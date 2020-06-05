<?php
setcookie("name", $_POST["name"]);
setcookie('color', $_POST["color"]);


header('Location: toon.php');

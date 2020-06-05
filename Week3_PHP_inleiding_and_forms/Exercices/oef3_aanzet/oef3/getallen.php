<?php 
$getal1 = $_POST['getal1'];
echo $getal1;
if((int)$getal1>0){
    ?>
    <form action="statistiek.php" method="post">
    <?php
         for($i=0;$i<(int)$getal1;$i++){
             print("<input type='text' name='getallen[]'/><br/>");
         }
    ?>
    <input type="submit"/>
    </form>
    <?php
}
else {
    header("Location: ingave.html");
}

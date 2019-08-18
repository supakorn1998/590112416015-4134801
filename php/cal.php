<?php 
$A = @$_GET["numA"];
$B = @$_GET["numB"];
$code = @$_GET["e"];

echo $code==1 ? $A + $B : "Empty !!";
?>
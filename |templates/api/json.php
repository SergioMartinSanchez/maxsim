<?php # maxsim


ob_end_clean();

header('Content-type:application/json;charset=utf-8');

echo json_encode($echo, JSON_PRETTY_PRINT);
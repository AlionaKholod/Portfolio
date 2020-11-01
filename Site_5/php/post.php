<?php

$recepient = "kholod_dsn@mail.ru"; //Почта куда будут приходить письма
$subject = "Заявка с сайта Bulgaria"; //Сообщение
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "From: test.ru <test.ru>\r\n"; 

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$phone = trim($_POST["phone"]);
 //Поля

$message = "Имя: $name <br/> E-mail: $mail <br/> Телефон: $phone <br/>";

mail($recepient, $subject, $message, $headers);
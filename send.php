<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$emailaddres = $_POST['emailaddress'];

// Формирование самого письма
if(isset($_POST['emailaddress'])){
    // если есть что-то в $_POST['email']
    $body = 'User mail: ' . $_POST['emailaddress'];
} else {
$title = "Новое обращение Best Tour plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'IyrikPyshnov@yandex.ru'; // Логин на почте
    $mail->Password   = 'ffleqrvdhezsutxk'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('IyrikPyshnov@yandex.ru', 'Юрий Пышнов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('yurypyshnov@yandex.ru');
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// перенаправляет на страницу

header('location: thankyou.html');
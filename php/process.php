<?php

$errors = [];
$data = [];
$allData = [
    'name'=>$_POST['name'],
    'email'=>$_POST['email'],
    'alias'=>$_POST['alias'],
];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required';
}

if (empty($_POST['alias'])) {
    $errors['alias'] = 'Alias is required';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data[$errors] = $errors;
} else {
    $data['sucess'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);
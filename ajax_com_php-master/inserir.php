<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$comment = $_POST['comment'];
$email = $_POST['email'];

$pdo = new PDO('mysql:host=localhost; dbname=db-comments;', 'root', 'root');

$stmt = $pdo->prepare('INSERT INTO comments(name, comment, email) VALUES (:na, :co, :mail)');
// Bind values
$stmt->bindValue(':na', $name);
$stmt->bindValue(':co', $comment);
$stmt->bindValue(':mail', $email);

$stmt->execute();

// Vdrifying if the query was executed

if ( $stmt->rowCount() >= 1 ) {
    echo json_encode('Comentário salvo com sucesso!');
} else {
    echo json_encode('Falha ao salvar o comentário!');
}

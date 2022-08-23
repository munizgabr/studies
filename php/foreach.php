<?php

// $c1 =[
//     'titular' => 'Gabriel',
//     'saldo'   => 2000
// ];
// $c2 = [
//     'titular' => 'Walter',
//     'saldo'   => 100000
// ];

$cc = [
    123456 => [
        'titular' => 'Gabriel',
        'saldo'   => 2000
    ],
    789456 => [
        'titular' => 'Walter',
        'saldo'   => 100000
    ]
    ];



foreach($cc as $conta){
    echo $conta['titular'].PHP_EOL;
}

//add item em um array numérico basta que informemos à ele o valor a ser adicionado. ex $arr[] = 10;
//para adicionar valor à um array associativo é necessário passar a chave e o valor a ser adicionado, isso acontece pois a chave tem um significado e na maioria das vezes é do tipo string, se adicionarmos um valor sem chave em um array associativo a chave do mesmo deverá ser adicionada como zero.


?>
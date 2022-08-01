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

?>
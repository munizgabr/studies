<?php

// $array = [
//     1 => 'a',
//     '1' => 'b',
//     1.5 => 'c',
//     true => 'd'
// ];

// foreach($array as $item){
//     echo $item.PHP_EOL;
// }

$carro = [
    'LMS-1012'=>[
        'marca' => 'VW',
        'modelo' => 'Golf'
    ],
    'ABC-1234'=>[
        'marca' => 'TOYOTA',
        'modelo' => 'Corolla'
    ],
    'AFS-2235'=>[
        'marca' => 'CHEVROLET',
        'modelo' => 'Camaro'
    ],
    'FFS-9961'=>[
        'marca' => 'Mercedez',
        'modelo' => 'Class c'
    ]
    ];

    foreach($carro as $placa => $item){
        echo "placa: ".$placa." - "."Marca: ".$item['marca']." - "."Modelo: ".$item['modelo'].PHP_EOL;
    }
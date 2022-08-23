$cc = [
    123456 => [
        'titular' => 'Gabriel',
        'saldo'   => 2000
    ],
    789456 => [
        'titular' => 'Walter',
        'saldo'   => 100000
    ],
    789456 => [
        'titular' => 'Jubileu',
        'saldo'   => 1000
    ]
    ];



foreach($cc as $conta){
    echo $conta['titular'].PHP_EOL;
}
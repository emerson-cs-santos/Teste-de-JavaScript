<?php

$pagina = @$_GET['pagina'];

if (!isset($pagina))
{
    $pagina = '';
}

$resposta = 'ERRO';

switch ($pagina) 
{
    case '1':
        $resposta =  "CONTEUDO CARREGADO PARA TAB 1";
        break;

    case '2':
        $resposta = "CONTEUDO CARREGADO PARA TAB 2";
        break;

    case '3':
        $resposta = "CONTEUDO CARREGADO PARA TAB 3";
        break;
}

echo $resposta;
return;

?>


<?php

//$uf = @$_GET['uf'];
$uf = @$_POST['uf'];

if (!isset($uf))
{
    $uf = '';
}

switch ($uf) 
{
    case 'SP':
        $vetor_resposta = 
            [
                "Aruja"
                ,"São Paulo"
                ,"Princesa Isabel"
                ,"Cidade 4"
                ,"Cidade 5"
            ];  
        break;

        case 'RJ':
        $vetor_resposta = 
            [
                "Cabo Frio"
                ,"Rio de Janeiro"
                ,"Cidade 3"
                ,"Cidade 4"
                ,"Cidade 5"
            ];  
        break;
    
    default:
        $vetor_resposta = 
        [
            "Não encontrado 1"
            ,"Não encontrado 2"
            ,"Não encontrado 3"
            ,"Não encontrado 4"
            ,"Não encontrado 5"
        ];    

}

echo json_encode($vetor_resposta);
return;

?>


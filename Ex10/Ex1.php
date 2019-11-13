<?php

//$cep = @$_GET['cep'];
$cep = @$_POST['cep'];


if (!isset($cep))
{
    $cep = '';
}

switch ($cep) 
{
    case '04824-100':
        $vetor_resposta['end']      = 'Rua Archote';
        $vetor_resposta['bairro']   = 'Pq. das Arvores';
        break;

    case '05404-020':
        $vetor_resposta['end']      = 'Rua professor';
        $vetor_resposta['bairro']   = 'Pinheiros';
        break;
    
    default:
        $vetor_resposta['end']      = 'Rua senac';
        $vetor_resposta['bairro']   = 'centro';    

}

echo json_encode($vetor_resposta);
return;

?>


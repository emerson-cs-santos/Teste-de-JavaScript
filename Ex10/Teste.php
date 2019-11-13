<?php

$arquivo_ok = false;

// Verifica se um arquivo foi selecionado
if ( isset( $_FILES[ 'myFile' ][ 'name' ] ) && $_FILES[ 'myFile' ][ 'error' ] == 0 )
{
	$arquivo_ok = true;
}
echo $arquivo_ok;

return;

?>


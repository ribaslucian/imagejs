<?php

/**
 * Intercepta do envio e converte os valores Base64 das edições
 * para sua origem que são as imagens editadas; logo em seguida,
 * armazena-as na variável de ambiente $_FILES, que representa 
 * os arquivos enviados.
 * 
 * @return void
 */
function imageJsMiddleware() {
    foreach ($_POST['imagejs'] as $editionNumber => $editionBase64) {
        $editionBase64 = substr(explode(';', $editionBase64)[1], 7);
        $_FILES['imagejs'][$editionNumber] = base64_decode($editionBase64);
    }
}

// referenciamos o middleware do ImageJs.
imageJsMiddleware();

// percorremos as edições efetuadas com o ImageJS.
foreach ($_FILES['imagejs'] as $edition => $image) {
    // salvamos a edição em questão no diretório e com o nome desejado.
    file_put_contents("../assets/editions/imagejs_$edition.png", $image);
}

die('Edições salvas');

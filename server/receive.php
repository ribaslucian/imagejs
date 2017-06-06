<?php

/**
 * Intercepta do envio e converte os valores BASE64 das edições
 * para sua origem que são as imagens editadas; armazena-as na
 * variável de ambiente referentes a arquivos de formulários: $_FILES
 */
function imageJsMiddleware() {
    foreach ($_POST['imagejs'] as $editionNumber => $editionBase64) {
        $editionBase64 = substr(explode(';', $editionBase64)[1], 7);
        $_FILES['imagejs'][$editionNumber] = base64_decode($editionBase64);
    }
}

// referenciamos o middleware do ImageJs.
imageJsMiddleware();

// percorresmos as edições efetuadas com o ImageJS.
foreach ($_FILES['imagejs'] as $editionNumber => $image) {

    // salvamos a edição em questão no diretório com o nome desejado.
    file_put_contents("../assets/editions/imagejs_edition_$editionNumber.png", $image);
}

echo 'Edições salvas';

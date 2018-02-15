function l(data) {
    console.log(data);
}

/*
 * Codificação lógica do ImageJs disposta por função
 * construtora para melhor referênciação dos seus métodos.
 */
var ImageJs = function () {

    /**
     * Valores padrão das constantes de configuração.
     * 
     * IMAGEJS_ENVIROMENT, padrão 'production'
     * Responsável pela definição do ambiente da codificação atual.
     * 
     * @type String
     */
    if ("undefined" === typeof IMAGEJS_ENVIROMENT)
        IMAGEJS_ENVIROMENT = 'production';

    /**
     * Conteúdo HTML que incoporará todos  os 
     * elementos visuais estáticos do ImageJs.
     * 
     * — Minificado em http://www.willpeavy.com/minifier/
     * 
     * @type Object
     */
    this.html = {
        editions: '<editions> <edition name="new" onclick="imageJs.open()" title="Iniciar uma nova edição."> <img src="https://raw.githubusercontent.com/ribaslucian/imagejs/master/assets/images/logo.png"/> </edition> </editions>',
        edition: '<edition> <img /> <input name="imagejs[{count}]" type="hidden" /> </edition>',
        studio: '<studio> <input id="up-devise" type="file" hidden/> <tools-primary> <tools name="primary"> <tool name="crop" title="Ferramenta de recorte." onclick="imageJs.crop()"> <i class="material-icons">&#xE3BE;</i> </tool> <tool name="blur" title="Ferramenta de borragem circular." onclick="imageJs.blur()"> <i class="material-icons">&#xE3A2;</i> </tool> <tool name="brightness" title="Ferramenta de brilho." onclick="imageJs.brightness()"> <i class="material-icons">&#xE3AB;</i> </tool> <tool name="contrast" title="Ferramenta de contraste." onclick="imageJs.contrast()"> <i class="material-icons">&#xE3F1;</i> </tool> <tool name="rotate" title="Ferramenta de rotação para esquerda." onclick="alert(\'Rotando\');"> <i class="material-icons">&#xE86A;</i> </tool> <tool name="text" title="Ferramenta textual." onclick="alert(\'Em breve...\')"> <i class="material-icons">&#xE25E;</i> </tool> <tool name="filters" class="imagejs-color-orange" title="Aplicar filtros desenvolvidos pelo autor." onclick="imageJs.tools(\'filters\', true)"> <i class="material-icons">&#xE3AF;</i> </tool> <tool name="info" title="Créditos e informações." class="imagejs-color-blue" onclick="imageJs.message(\'info\')"> <i class="material-icons">&#xE88E;</i> </tool> </tools> <info name="upWeb"> <text> <input type="text" placeholder="Informe aqui o endereço Web da Imagem"/> </text> </info> <info name="start" class="imagejs-bg-blue"> <text>— Envie a imagem utilizando algum dos métodos abaixo.</text> </info> <info name="info" class="imagejs-bg-blue"> <text> Para mais informações acesse — <a href="https://github.com/ribaslucian/imagejs" target="blank"> https://github.com/ribaslucian/imagejs </a> </text> </info> <info name="success" class="imagejs-bg-green"> <text> ✓ &nbsp; Edição concluída com sucesso. </text> </info> </tools-primary> <tools-secondary> <tools name="start"> <tool title="Enviar imagem do dispositivo." onclick="imageJs.upDevise()"> <i class="material-icons">&#xE326;</i> </tool> <tool name="upWeb" title="Enviar imagem da internet." onclick="imageJs.message(\'upWeb\')"> <i class="material-icons">&#xE80B;</i> </tool> <tool title="Alternar modo de tela cheia." onclick="imageJs.fullScreen()"> <i class="material-icons">&#xE5D0;</i> </tool> <tool class="imagejs-color-red" title="Sair do estúdio." onclick="imageJs.close()"> <i class="material-icons">&#xE5CD;</i> </tool> </tools> <tools name="primary"> <tool title="Alternar modo de tela cheia." onclick="imageJs.fullScreen()"> <i class="material-icons">&#xE5D0;</i> </tool> <tool title="Retornar imagem ao estado inicial." onclick="imageJs.reset()"> <i class="material-icons">&#xE5D5;</i> </tool> <tool title="Baixar imagem editada." onclick="imageJs.download()"> <i class="material-icons">&#xE2C4;</i> </tool> <tool class="imagejs-color-red" title="Cancelar edição." onclick="imageJs.cancel()"> <i class="material-icons">&#xE5CD;</i> </tool> <tool class="imagejs-color-green" title="Concluir edição." onclick="imageJs.conclude()"> <i class="material-icons">&#xE5CA;</i> </tool> </tools> <tools name="crop"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> <tool name="conclude" title="Concluir recorte." class="imagejs-color-green"> <i class="material-icons">&#xE5CA;</i> </tool> </tools> <tools name="blur"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> <tool name="conclude" title="Concluir recorte." class="imagejs-color-green"> <i class="material-icons">&#xE5CA;</i> </tool> </tools> <tools name="brightness"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> <tool name="conclude" title="Concluir edição." class="imagejs-color-green"> <input type="range" value="50" max="100"/> </tool> </tools> <tools name="contrast"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> <tool name="conclude" title="Concluir edição." class="imagejs-color-green"> <input type="range" value="50" max="100"/> </tool> </tools> <tools name="filters"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> <tool title="Aplicar Filtro Vermelho." class="imagejs-color-red" onclick="imageJs.filters.red()"> <i class="material-icons">&#xE3AF;</i> </tool> <tool title="Aplicar Filtro Verde" class="imagejs-color-green" onclick="imageJs.filters.green()"> <i class="material-icons">&#xE3AF;</i> </tool> <tool title="Aplicar Filtro Azul." class="imagejs-color-blue" onclick="imageJs.filters.blue()"> <i class="material-icons">&#xE3AF;</i> </tool> <tool title="Aplicar Filtro Roxo (Personalizado)" class="imagejs-color-purple" onclick="imageJs.filters.custom()"> <i class="material-icons">&#xE3AF;</i> </tool> <tool title="Aplicar Filtro Cinza (Preto e Branco)." class="imagejs-color-grey" onclick="imageJs.filters.blackAndWhite()"> <i class="material-icons">&#xE3AF;</i> </tool> </tools> <tools name="info"> <tool name="back" title="Retornar ao menu principal."> <i class="material-icons">&#xE5C4;</i> </tool> </tools> <tools name="upWeb"> <tool title="Retornar ao menu principal." onclick="imageJs.message(\'start\')"> <i class="material-icons">&#xE5C4;</i> </tool> <tool class="imagejs-color-green" title="Confirmar endereço da imagem." onclick="imageJs.upWeb();"> <i class="imagejs-icon-green material-icons">&#xE5CA;</i> </tool> </tools> <tools name="success"> <tool title="Retornar ao menu principal." onclick="imageJs.message(\'start\')"> <i class="material-icons">&#xE5C4;</i> </tool> </tools> </tools-secondary> <editing> <container> <canvas width="5000" height="5000"></canvas> <selector></selector> </container> <img/> <info name="noimage"> <i class="material-icons">&#xE40B;</i> </info> </editing> </studio>'
    };

    /**
     * Conteúdo CSS que dará formas e estilos a 
     * todos os elementos visuais estáticos do ImageJs
     * 
     * — Minificado em http://www.cleancss.com/css-minify
     * 
     * @type String
     */
    this.css = '@import "https://fonts.googleapis.com/icon?family=Material+Icons";image-js{display:block;margin:10px}image-js,studio{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}studio{z-index:100000;background-color:#333;overflow:auto;position:fixed;top:0px;left:0px;width:100%;height:100%}studio info,studio info text,studio tools,studio container,studio selector{left:50%;top:50%;position:absolute;transform:translate(-50%, -50%)}studio tools-primary,studio tools-secondary,studio editing{position:relative;float:left;width:50%;height:100%}image-js edition input,studio,studio editing img,studio tools-primary tools,studio canvas,studio selector,studio tools-secondary tools,studio tools-primary info,studio [name="editing"]{display:none}studio info{font-family:"Arial" !important;font-size:12px;color:grey}studio tools-primary info{height:100%;width:100%;background-color:white;font-weight:bold;color:#333}studio a:link,studio a:visited{color:white;text-decoration:none}studio tools-primary{width:100% !important;height:8% !important;background-color:white;color:#333}studio tools-secondary{width:100% !important;height:calc(8% - 1px) !important;color:#f9f9f9;border-bottom:1px dashed #666}studio editing{width:100% !important;height:84% !important}studio container{width:90%;height:90%}studio editing .material-icons{font-size:900%}studio canvas{width:100%;height:100%;background-position:center !important;background-size:contain !important;background-repeat:no-repeat !important}studio editing img{object-fit:cover !important;max-width:90% !important;max-height:90% !important}studio tools{white-space:nowrap !important}studio tool{display:inline-block;cursor:pointer;padding:7px 10px}studio tools-primary tool:hover{background-color:#eee}studio tools-primary tool.active{background-color:#eee}studio tools-secondary tool:hover{background-color:#222}studio tool[name=filters]{margin:0 10px}studio selector{width:50%;height:50%;opacity:0.5;cursor:move;background-color:black}image-js edition{position:relative;height:60px;padding:4px;margin:5px;display:inline-block;background-color:#eee}image-js edition[name=new]{background:none;margin-left:10px;border-left:1px solid #eee;padding:15px;cursor:pointer}studio info input{padding:6px 15px;border-top:1px solid;width:280px !important}image-js editions{white-space:nowrap}image-js editions img{height:100%}studio info .material-icons{color:grey}.imagejs-color-blue{color:#1e88e5}.imagejs-color-orange{color:#f57c00}.imagejs-color-green{color:#66bb6a}.imagejs-color-purple{color:#ba68c8}.imagejs-color-grey{color:#bdbdbd}.imagejs-color-red{color:#ef5350}.imagejs-bg-blue{background-color:#1e88e5;color:white}.imagejs-bg-green{background-color:#41920f;color:white}';

    /**
     * Armazém das principais tags recipientes.
     * 
     * Chave: invoker
     * Tag base do estúdio <{invoker}></{Invoker}> — irá efetuar a 
     * indicação de utilização do ImageJs na corpo HTML do sistema Vinculante.
     * 
     * Chave: studio
     * Representa a tag <{studio}></{studio}> — recipiente dos 
     * componentes de utilitários e de manipulação da imagem em questão.
     * 
     * Chave: editions
     * Representa a tag <{editions}></{editions}> — recipiente dos
     * elementos que representaram as edições já concluídas no estúdio.
     * 
     * @type Object
     */
    this.tags = {
        invoker: 'image-js',
        studio: 'studio',
        editions: 'editions'
    };

    /**
     * Contador do total de edições nomeante dos <input> que 
     * receberão o valor base64 do resultado de cada edição concluída.
     * 
     * @type int
     */
    this.count = 0;

    /**
     * Repreenta a URL (Web ou local) que se obteu
     * a imagem que está sendo editada no momento.
     * 
     * @type String
     */
    this.origin;

    /**
     * Elementos e Componentes que possuem múltiplas 
     * referêcias durante as edições e interações com o estúdio.
     * 
     * Estes valores são definidos no método writeDOMComponents(), pois não há
     * como se obter a referência de um elemento do DOM antes de existir; e 
     * mesmo que se obtenha os valores em determinado evento, as propriedades de
     * edição da imagem que será enviada ainda não estarão preenchidas.
     * 
     * Variáveis prefixadas por $ (cifrão), representam a referência jQuery do
     * elemento HTML no DOM.
     */

    /**
     * Recipiente dos elementos que compõe 
     * as edições concluídas pelo usuário.
     * 
     * @type ObjectJQuery
     */
    this.$editions;

    /**
     * Recipiente dos elementos que compõe o
     * ambiente utilitários e edição da imagem.
     * 
     * @type ObjectJQuery
     */
    this.$studio;

    /**
     * Recipiente dos elementos de edição que compõe o
     * saguão (container) de manipulação da imagem.
     * 
     * @type ObjectJQuery
     */
    this.$container;

    /**
     * Elemento referente ao Canvas de edição.
     * 
     * @type ObjectJQuery
     */
    this.$canvas;

    /**
     * Elemento referente a imagem enviada para edição escrita em uma tag <img>.
     * Utilizado para se obter propriedades e proporção previamente a escrita da
     * imagem no quadro (canvas) de manipulação.
     * 
     * @type ObjectJQuery
     */
    this.$image;

    /**
     * A instância HTML, única do
     * elemento Canvas da ferramenta.
     * 
     * @type CanvasElement
     */
    this.canvas;

    /**
     * A instância única do contexto 2D
     * de manipulação do Canvas da ferramenta.
     * 
     * @type CanvasRenderingContext2D
     */
    this.context;

    /**
     * @util
     * 
     * Adiciona os estilos e elementos do ImageJs ao DOM.
     * 
     * Armazena-se os elementos básicos que possuem maiores
     * referenciações durante as edições e interações com o estúdio.
     */
    this.writeDOMComponents = function () {
        // verificamos se a tag invocadora foi escrita no DOM.
        if ($(this.tags.invoker).length == 0)
            return;

        // adicionarmos os elementos ao DOM
        if (IMAGEJS_ENVIROMENT == 'production') {
            $(this.tags.invoker).append('<style>' + this.css + '</style>');
            $(this.tags.invoker).append(this.html.editions);
            $('body').append(this.html.studio);
        }

        // armazenamos os elementos mais utilizados nas Interações
        this.$editions = $(this.tags.invoker);
        this.$studio = $(this.tags.studio);
        this.$editing = $('editing', this.$studio);
        this.$container = $('container', this.$studio);
        this.$canvas = $('canvas', this.$studio);
        this.$image = $('img', this.$studio);

        // armazenamos os elementos mais utilizados nas Edições
        this.canvas = this.$canvas.get(0);
        this.context = this.canvas.getContext('2d');
    };

    /**
     * @util
     * 
     * Escreve o source de uma imagem no canvas de
     * edição baseando-se na sua URL ou endereço local.
     * 
     * @param string url_or_local_path
     * — Caminho local da imagem ou seu endereço WEB.
     */
    this.edit = function (image_path) {
        // armazenamos a origem da imagem a ser editada
        this.origin = image_path;

        // escondemos ícone central que representa ausência de imagem
        $(this.tags.studio + ' info').hide();
        // apresentamos as ferrametnas primárias da edição
        this.tools('primary');

        // escrevemos a imagem em uma tag <img> para 
        // obtermos o tamanho ideal do canvas de manipulação
        this.$image.attr('src', this.origin);

        this.$image.on('load', function () {
            // obtemos as dimensoes da imagem
            var width = $(this).width();
            var height = $(this).height();

            // editamos o tamanho do container e do canvas respectivo a img oculta
            imageJs.$container.height(height).width(width);
            //imageJs.$canvas.attr('width', width).attr('height', height);

            // criamos o objeto da imagem a ser editada
            var image = new Image();
            image.src = imageJs.origin;

            // ao carregar a imagem, escrevemos elas no canvas do estúdio
            image.onload = function () {

                imageJs.context.drawImage(
                        image,
                        // coordenada X e Y do canvas que o
                        // resultado do recorte será posicionado
                        0, 0,
                        // largura e altura do imagem
                        // resultado do recorte dentro do canvas
                        image.width, image.height,
                        // coordenadas X e Y iniciais do 
                        // sub-retângulo de recorte da imagem
                        0, 0,
                        // largura e altura do sub-retângulo de recorte
                        imageJs.canvas.width, imageJs.canvas.height
                    );

                imageJs.$canvas.fadeIn();
            };
        });
    };

    /**
     * @util
     * 
     * Apresenta o estúdio em tela.
     */
    this.open = function () {
        this.message('start');
        $(this.tags.studio).fadeIn('fast');
    };

    /**
     * @util
     * Resizable plugin
     * resizable('.resizable')
     */
    this.resizable = function (resizable_id) {
        var resize = $(resizable_id);
        var sy = 0, sx = 0, clicked = 0, ws = 0, hs = 0;

        $('square', resize).mousedown(function () {
            clicked = true;
        });

        $(window).mouseup(function () {
            clicked = sy = sx = 0;
        });

        $(window).mousemove(function (event) {
            if (clicked) {
                if (sy == 0) {
                    sy = event.clientY;
                    sx = event.clientX;
                    ws = resize.outerWidth();
                    hs = resize.outerHeight();
                }

                resize.outerWidth(ws + event.clientX - sx).outerHeight(hs + event.clientY - sy);
            }
        });
    }
    ;

    /**
     * @util
     * Draggable plugin
     * draggable('.draggable')
     */
    this.draggable = function (draggable_id) {
        var offset, sy = 0, clicked = 0, sx = 0;

        $(draggable_id).mousedown(function (event) {
            if ($(event.toElement).is(draggable_id))
                clicked = true;
        });

        $(window).mouseup(function () {
            if (clicked)
                clicked = sy = sx = 0;
        });

        $(window).mousemove(function (event) {
            if (clicked) {
                if (sy == 0) {
                    sy = event.clientY;
                    sx = event.clientX;
                    offset = $(draggable_id).offset();
                }

                $(draggable_id).offset({
                    left: offset.left + event.clientX - sx,
                    top: offset.top + event.clientY - sy
                });
            }
        });
    }

    this.translucentReset = function () {
        $('studio translucent')
                .fadeOut({
                    done: function () {
                        $(this).css('width', '50%')
                                .css('height', '50%')
                                .css('top', '0')
                                .css('left', '0');
                    }
                })
    }

    /**
     * @util
     * 
     * Verifica se há alguma imagem sendo editada no momento.
     * 
     * @return boolean
     */
    this.hasEdition = function () {
        return !(this.$image.attr('src') == '' || this.$image.attr('src') == undefined);
    };

    /**
     * @util
     * 
     * Obtem-se uma Hash randômica.
     * 
     * @param int size default 8
     * @return string
     */
    this.rand = function (size) {
        var arr = new Uint8Array(((size ? size : 8) || 40) / 2);
        return [].map.call(window.crypto.getRandomValues(arr), function (byte) {
            return ('0' + byte.toString(16)).slice(-2);
        }).join('');
    };

    /**
     * @util
     * 
     * Exibe uma determinada mensagem no ambiente de edição da plataforma.
     */
    this.message = function (name) {
        $(this.tags.studio + ' tools-primary tools').hide();
        $(this.tags.studio + ' tools-primary info').hide();
        $(this.tags.studio + ' tools-secondary tools').hide();

        $(this.tags.studio + ' info[name=' + name + ']').show();
        $(this.tags.studio + ' tools-secondary tools[name=' + name + ']').show();
    };

    /**
     * @util
     * 
     * Exibe um determinado grupo de ferramentas no menu principal
     * e no menu secundário apresenta suas opções auxiliares.
     */
    this.tools = function (name, keep_primary_tools) {
        if (!keep_primary_tools)
            $(this.tags.studio + ' tools-primary tools').hide();

        $(this.tags.studio + ' tools-primary info').hide();
        $(this.tags.studio + ' tools-secondary tools').hide();

        // exibimos as <tools> do <tools-primary> e <tools-secondary>
        $(this.tags.studio + ' tools[name=' + name + ']').fadeIn();
    };

    /**
     * @util
     * 
     * Interações com os dados (ImageData) do 
     * Contexto de edição (Canvas) da plataforma.
     * 
     * @type Object
     */
    this.data = {
        /**
         * Obtém os dados do Contexto de edição.
         * 
         * @return ImageData
         */
        get: function () {
            return imageJs.context.getImageData(0, 0, imageJs.canvas.width, imageJs.canvas.height);
        },
        /**
         * Escreve os dados do Contexto de edição.
         * 
         * @param data ImageData
         */
        set: function (data) {
            imageJs.context.putImageData(data, 0, 0);
        }
    }

    /**
     * Método simplista para criar algotimos de manipulação do 
     * canvas referente a imagem vinculada no editor no momento.
     * 
     * MY_CUSTOM_VALUE é uma variável representativa do valor 
     * que se deseja inserir na cor do pixel em questão, altere isso.
     * 
     * @param {function} pixels: function(pixels)
     * @return void
     */
//            imageJS.write(function (pixels) {
//                // percorre-se todos os pixeis do Canvas
//                for (var i = 0; i < pixels.length; i += 4) {
//                    pixels[i] = MY_CUSTOM_VALUE;   // R| valor vermelho do pixel
//                    pixels[i+1] = MY_CUSTOM_VALUE; // G| valor verde do pixel
//                    pixels[i+2] = MY_CUSTOM_VALUE; // B| valor azul do pixel
//                }
//            });

    /**
     * @util
     * Método utilitário para se manipular os pixels
     * do Canvas da plataforma de maneira simples.
     * Basta passar no argumento _callable, uma função
     * com um único parametro, esses serão os pixels,
     * o corpo da função será seu algoritmo de manipulação.
     * 
     * @param function(pixels) _callable
     */
    this.write = function (_callable) {
        var image = imageJs.data.get();
        _callable(image.data);
        imageJs.data.set(image);
    }

    /**
     * @tool
     * 
     * Oculta o estúdio da tela.
     */
    this.close = function () {
        $(this.tags.studio).fadeOut('fast');
    };

    /**
     * @tool
     * 
     * Faz o downlaod de uma imagem baseando-se no conteúdo do canvas.
     */
    this.download = function () {
        $('<a download="imageJs-edition-' + this.rand() + '.png" href="' + this.canvas.toDataURL('image/png') + '">ImageJS Download</a>')[0].click();
    }

    /**
     * @tool
     * 
     * Cancela a edição da imagem atual,
     * obrigando que o usuário inicie uma nova edição.
     */
    this.cancel = function () {
        // retiramos a imagem do canvas
        this.$canvas.css('background-image', 'none');
        this.$canvas.hide();

        // limpamos o <input> utilizado para enviar a imagem
        $(this.tags.studio + ' input[type=file]').val(null);

        // retiramos o source da imagem oculta que dá a dimensão
        this.$image.attr('src', '');

        // mostramos ícone de informação que não há imagem;
        $(this.tags.studio + ' editing info').fadeIn();

        this.message('start');
    };

    /**
     * @tool
     * 
     * Conclui a edição da imagem atual; remove-a do canvas de edição e 
     * escreve seu resultado em $(<input>, <edition>)
     */
    this.conclude = function () {
        this.count++;

        // criamos o elemento lógico que representa uma edição concluída
        var edition = $(this.html.edition);
        var input = $('input', edition);

        // editamos o nome do input da edição corresponde ao contador de edições
        input.attr('name', input.attr('name').replace('{count}', this.count));

        // editamos a imagem da nova edição
        this.canvas.toBlob(function (blob) {
            $('#file').val(URL.createObjectURL(blob));
            log('ok');

            $('img', edition).attr('src', URL.createObjectURL(blob));

            // escrevemos o valor base64 da imagem no <input>
            input.val(imageJs.canvas.toDataURL());

            // inserimos o conteúdo HTML correspondente a nova edi;'ao
            edition.insertBefore('[name="new"]');

            // cancelamos a edição atual e saímos do editor
            imageJs.cancel();

            // exibimos a mensangem de sucesso da edição
            imageJs.message('success');
        });
    };
    
    

    /**
     * @tool
     * 
     * Método de manipulação lógica do canvas 
     * para compor a Ferramenta de Recorte.
     */
    this.crop = function () {

        var translucent = $('studio translucent');

        var translucent_offset = translucent.offset();
        var canvas_offset = this.$canvas.offset();
        
        l(this.$canvas.width());
        l(this.$canvas.height());

//        l(canvas_offset);
//        l(translucent_offset);

//        var offset = {
//            left: translucent_offset.left - (canvas_offset.left + 1),
//            top: translucent_offset.top - canvas_offset.top
//        };
        
//        var imageData = this.context.getImageData(
//            offset.left,
//            offset.top,
//            translucent.width(), translucent.height()
//        );
//
//        this.data.set(imageData);
//
//        l('ok');
    };

    /**
     * @tool
     * 
     * Permite que o usuário selecione uma imagem
     * que deseja editar a partir do seu dispositivo.
     */
    this.upDevise = function () {
        $(this.tags.studio + ' input[type=file]').trigger('click');
        $(this.tags.studio + ' input[type=file]').change(function (event) {

            // por questões de segurança, devemos armazenar o arquivo
            // no navegar para então podermos trabalhar com seu conteúdo.
            var local_temp_path = URL.createObjectURL(event.target.files[0]);

            // escrevemos a imagem no editor
            imageJs.edit(local_temp_path);
        });
    };

    /**
     * @tool
     * 
     * Permite que o usuário envi uma imagem que
     * deseja editar a partir do seu endereço web.
     */
    this.upWeb = function () {
        // https://www.walldevil.com/wallpapers/a15/wallpapers-blue-sea-computer-wallpaper-surface-original-sinego-morya-gdefon-smooth.jpg
        // por questões de segurança, devemos armazenar o arquivo
        // no navegar para então podermos trabalhar com seu conteúdo.
        // var local_temp_path = URL.createObjectURL(event.target.files[0]);

        // escrevemos a imagem no editor
        imageJs.edit($('input[type=text]', this.tags.studio).val());
    };

    /**
     * @tool
     * 
     * Mantemos o canvas dimensionado em função do 
     * tamanho da janela a cada redimensionamento,
     * baseando-se na imagem oculta dentro de <editing>.
     */
    this.responsive = function () {
        $(window).resize(function () {
            // obtemos as dimensoes da imagem
            var width = imageJs.$image.width();
            var height = imageJs.$image.height();
            // editamos o tamanho do canvas e definimos o background
            imageJs.$canvas.hide();
            imageJs.$container.height(height).width(width);
            imageJs.$canvas.height(height).width(width);
            imageJs.$canvas.fadeIn();
        });
    };

    /**
     * @tool
     * 
     * Método de manipulação lógica do canvas 
     * para compor a Ferramenta de Brilho.
     */
    this.brightness = function () {
        var image = this.data.get();

        for (var i = 0; i < image.data.length; i += 4) {
            image.data[i] += 25; // red
            image.data[i + 1] += 25; // green
            image.data[i + 2] += 25; // blue
        }

        this.data.set(image);
    };

    /**
     * @tool
     * 
     * Método de manipulação lógica do canvas 
     * para compor a Ferramenta de Brilho.
     */
    this.contrast = function () {
        var contrast = 10;
        var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

        var image = this.data.get();
        var data = image.data;

        for (var i = 0; i < image.data.length; i += 4) {
            data[i] = factor * (data[i] - 128) + 128;
            data[i + 1] = factor * (data[i + 1] - 128) + 128;
            data[i + 2] = factor * (data[i + 2] - 128) + 128;
        }

        this.data.set(image);
    };

    /**
     * @tool
     * 
     * Alterna o modo de tela cheia.
     * solução por: http://stackoverflow.com/questions/36672561/how-to-exit-fullscreen-onclick-using-javascript
     */
    this.fullScreen = function () {
        var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null);

        var docElm = document.documentElement;

        if (!isInFullScreen) {
            if (docElm.requestFullscreen)
                docElm.requestFullscreen();
            else if (docElm.mozRequestFullScreen)
                docElm.mozRequestFullScreen();
            else if (docElm.webkitRequestFullScreen)
                docElm.webkitRequestFullScreen();
            else if (docElm.msRequestFullscreen)
                docElm.msRequestFullscreen();
        } else {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.msExitFullscreen)
                document.msExitFullscreen();
        }
    };

    /**
     * @tool
     * 
     * Reseta a imagem que está sendo editada ao seu estado inicial.
     */
    this.reset = function () {
        this.edit(this.origin);
    }

    /**
     * @tool
     * 
     * Aplica o efeito (ou filtro) de borragem no canvas.
     */
    this.blur = function () {
        var c = imageJs.canvas;
        var ctx = imageJs.context;

        ctx.globalAlpha = 0.3;
        var offset = 25;

        for (var i = 1; i <= 8; i += 1) {
            ctx.drawImage(c, offset, 0, c.width - offset, c.height, 0, 0, c.width - offset, c.height);
            ctx.drawImage(c, 0, offset, c.width, c.height - offset, 0, 0, c.width, c.height - offset);
        }
    }

    /**
     * @tools
     * 
     * Aplicação de filtros personalizados.
     */
    this.filters = {
        red: function () {
            imageJs.write(function (pixels) {
                for (var i = 0; i < pixels.length; i += 4)
                    pixels[i] += 25;
            });
        },
        green: function () {
            imageJs.write(function (pixels) {
                for (var i = 0; i < pixels.length; i += 4)
                    pixels[i + 1] += 25;
            });
        },
        blue: function () {
            imageJs.write(function (pixels) {
                for (var i = 0; i < pixels.length; i += 4)
                    pixels[i + 2] += 25;
            });
        },
        custom: function () {
            imageJs.write(function (pixels) {
                for (var i = 0; i < pixels.length; i += 4) {
                    pixels[i] += 10;
                    pixels[i + 1] += -20;
                    pixels[i + 2] += 10;
                }
            });
        },
        blackAndWhite: function () {
            imageJs.write(function (pixels) {
                for (var i = 0; i < pixels.length; i += 4) {
                    // basta obter a médica (valor cinza) RGB dos pixels
                    // reescrever o mesmo valor no três índices novamente
                    var grey = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);

                    pixels[i] = grey;
                    pixels[i + 1] = grey;
                    pixels[i + 2] = grey;
                }
            });
        },
    }

    /**
     * @initializers
     * 
     * Ouvintes básicos para interação do usuário 
     * com as edições e a interface do estúdio.
     */
    $(document).ready(function () {
        // start basic features
        imageJs.writeDOMComponents();

        imageJs.edit('../assets/images/example 2.jpg');
//        imageJs.edit('http://www.themes-ilgelo.com/mani/demo-travel/wp-content/uploads/2015/03/bridge-900x480.jpg');
//        imageJs.edit('http://orig04.deviantart.net/3b54/f/2015/193/4/0/banner_twitch_kuroneko_by_aizendesign-d911zg0.png');

        // behavior: select tool on click
        $('body').on('click', imageJs.tags.studio + ' tools-primary tool', function () {
            $(imageJs.tags.studio + ' tool').removeClass('active');
            $(this).addClass('active');
        });

        // behavior: click back button
        $('body').on('click', imageJs.tags.studio + ' tool[name=back]', function () {
            // check if onclick is not defined
//            if (!$(this).attr('onclick'))
            imageJs.tools('primary');
        });

        imageJs.responsive();
        imageJs.draggable('studio translucent');
        imageJs.resizable('studio translucent');

        // user onload function 
        imageJs.onload();
    });

    this.onload = function () {};

};

// instanciação manual do ImageJs para informar que desejamos trabalhar com 
// seus recursos; estes por sua vez são controlados automaticamente pelo 
// conteúdo instanciado do objeto.
var imageJs = new ImageJs();







///* Adding the script tag to the head as suggested before */
//var head = document.getElementsByTagName('head')[0];
//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = "http://code.jquery.com/jquery-2.2.1.min.js";
//
//// Then bind the event to the callback function.
//// There are several events for cross browser compatibility.
//script.onreadystatechange = handler;
//script.onload = handler;
//
//// Fire the loading
//head.appendChild(script);
//
//function handler(){
//   console.log('jquery added :)');
//}
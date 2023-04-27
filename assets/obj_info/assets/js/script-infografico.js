function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    console.log(proporcao, proporcaoAltura, proporcaoLargura)
    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyInfografico() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".infografico").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

$(document).ready(function () {
    resizeBodyInfografico()
    $(window).resize(function () {
        resizeBodyInfografico()
    })

});

function tocarAudio(botaoId, audioId) {
    const botao = $(botaoId);
    const audio = $(audioId).get(0);
    const playBtn1 = $('.play1 img');
    const playBtn2 = $('.play2 img');
    const playBtn3 = $('.play3 img');
    const playBtn4 = $('.play4 img');
    const playBtn5 = $('.play5 img');
    const playBtn6 = $('.play6 img');
    const playBtn7 = $('.play7 img');
    const playBtn8 = $('.play8 img');
    const playBtn9 = $('.play9 img');

    function controleAudio() {
        if (audio.paused) {
            $("audio").each(function () {
                if (!this.paused && this !== audio) {
                    this.pause();
                }
            });

            audio.play();
        } else {
            audio.pause();
        }

        function trocaImagem() {
            if (audioId === '#audioTitulo' && !audio.paused) {
                playBtn1.attr('src', 'assets/img/pause.png');
            } else {
                playBtn1.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioUnipessoal' && !audio.paused) {
                playBtn2.attr('src', 'assets/img/pause.png');
            } else {
                playBtn2.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioEstendida' && !audio.paused) {
                playBtn3.attr('src', 'assets/img/pause.png');
            } else {
                playBtn3.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioComposta' && !audio.paused) {
                playBtn4.attr('src', 'assets/img/pause.png');
            } else {
                playBtn4.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioNuclear' && !audio.paused) {
                playBtn5.attr('src', 'assets/img/pause.png');
            } else {
                playBtn5.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioHomosexual' && !audio.paused) {
                playBtn6.attr('src', 'assets/img/pause.png');
            } else {
                playBtn6.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioDinks' && !audio.paused) {
                playBtn7.attr('src', 'assets/img/pause.png');
            } else {
                playBtn7.attr('src', 'assets/img/play.png');
            }

            if (audioId === '#audioResponsavel' && !audio.paused) {
                playBtn8.attr('src', 'assets/img/pause.png');
            } else {
                playBtn8.attr('src', 'assets/img/play.png');
            }
        }

        trocaImagem();
    }
    botao.on("click", controleAudio);
}

$(document).ready(function () {
    tocarAudio(".titulo", "#audioTitulo");
    tocarAudio(".linha1", "#audioUnipessoal");
    tocarAudio(".linha2", "#audioEstendida");
    tocarAudio(".linha3", "#audioComposta");
    tocarAudio(".linha4", "#audioNuclear");
    tocarAudio(".gay", "#audioHomosexual");
    tocarAudio(".botaoResponsavel", "#audioResponsavel");
    tocarAudio(".rodape", "#audioDinks");
});

tocarAudio();
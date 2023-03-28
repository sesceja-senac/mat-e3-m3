// caixas expansiveis
$('.caixa-container button').click(function(){
    let caixa = $(this).prev()
    if(caixa.hasClass('aberta')){
        caixa.removeClass('aberta')
        $(this).css('background-image', 'url("../assets/design/pg3/ico_saibamais_abre.png")')
    } else {
        caixa.addClass('aberta')
        $(this).css('background-image', 'url("../assets/design/pg3/ico_saibamais_fecha.png")')
    }
})
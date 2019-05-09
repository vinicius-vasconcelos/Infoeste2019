$(document).ready(() => {

    $('a').click(function() {
        $('#conteudo').html('');
    
        $.ajax({
            url: `${this.id}.html`,
            method:'get',
            success: respText => $('#conteudo').append(respText),
            error: errText => $('#conteudo').text('Page not found'),
        });
    });
});
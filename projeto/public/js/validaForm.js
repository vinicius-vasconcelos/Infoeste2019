$(document).ready(() =>{

    $('#codigo').blur(function() {
        console.log(`nice ${this}`);
    });
});

function validar() {
    let codigo = $('#codigo').val();
    if(codigo == '' || codigo <= 0){
        $('#codigo').addClass('erro');
        return;
    } else
        $('#codigo').removeClass('erro');

    let nome = $('#nome').val();
    if(nome.trim() == '' || nome.length > 10 ){
        $('#nome').addClass('erro');
        return;
    } else
        $('#nome').removeClass('erro');

    if($('#cursos').val() == ''){
        $('#cursos').addClass('erro');
        return;
    } else
        $('#cursos').removeClass('erro');


    addTable(codigo, nome);
}

function addTable(c, n) {
    $('tbody').append(`
        <tr onclick="removeTable(this)">
            <td>${c}</td>
            <td>${n}</td>
            <td><a href="#">X</a></td>
        </tr>
    `)
}

function removeTable(tr) {
    $(tr).remove();
}
$(document).ready(() =>{

    $('#codigo').blur(function() {
        console.log(`nice ${this}`);
    });
});

function limpaCampos() {
    $('#codigo').val('');
    $('#nome').val('');
    $('#email').val('');
    $('#cursos').val('');
}

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

    let curso = $('#cursos').val();
    if($('#cursos').val() == ''){
        $('#cursos').addClass('erro');
        return;
    } else
        $('#cursos').removeClass('erro');


    addTable(codigo, nome, curso);
    limpaCampos();
}

function addTable(c, n, cu) {
    $('tbody').append(`
        <tr id="${c}#${n}#${cu}">
            <td>${c}</td>
            <td>${n}</td>
            <td onclick="removeTable(this)"><a href="#">X</a></td>
            <td onclick="alt(this)"><a href="#">alt</a></td>
        </tr>
    `)
}

function removeTable(tr) {
    $(tr.closest('tr')).remove();
}

function alt(tr) {
    let data = tr.closest('tr').id.split('#');
    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
}
//Máscara CEP
$(document).ready(() => $('#cep').mask('00000-000'));

//pesquisando cep
$(document).ready(function() {

    // Limpa valores do formulário de cep.
    function limpa_formulário_cep() { 
        $('#rua').val('');
        $('#bairro').val('');
        $('#cidade').val('');
        $('#uf').val('');
        $('#numero').val('');
        $('#complemento').val('');
    }
    
    //Quando o campo cep perde o foco.
    $('#cep').blur(function() {

        //Nova variável "cep" somente com dígitos.
        let cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if(cep != "") {

            //Expressão regular para validar o CEP.
            let validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $('#rua').val('...');
                $('#bairro').val('...');
                $('#cidade').val('...');
                $('#uf').val('...');
                $('#numero').val('...');
                $('#complemento').val('...');
               

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if(!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $('#rua').val(dados.logradouro);
                        $('#bairro').val(dados.bairro);
                        $('#cidade').val(dados.localidade);
                        $('#uf').val(dados.uf);
                        $('#numero').val('');
                        $('#complemento').val('');
                    } else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

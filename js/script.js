//Confirmar escolha do tipo de seguro
function escolha(tipoSeguro) {
    let mensagemElement = document.getElementById("escolha");
    if (tipoSeguro == '1'){
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas que pedalam na rua";
    } else if (tipoSeguro == '2') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas de maratona";
    } else if (tipoSeguro == '3') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas que pedalam em montanhas";
    } else if (tipoSeguro == '4') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas que pedalam em pedras e rochas";
    } else if (tipoSeguro == '5') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas que pedalam em terra e mato";
    } else if (tipoSeguro == '6') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas por hobbie";
    } else if (tipoSeguro == '7') {
        mensagemElement.innerHTML = "▶ Seguro selecionado para ciclistas que viajam com a bike";
    }
}

function status(statusVistoria) {
    let mensagemElement = document.getElementById("status");
    mensagemElement.innerHTML = "▶ Aqui será mostrado o atual status da vistoria do cliente com base nas análises da IA.";
}

function emissao(apolice) {
    let mensagemElement = document.getElementById("emissao");
    mensagemElement.innerHTML = "▶ Sua apólice foi enviada para o e-mail cadastrado no processo de vistoria. Acesse e confira. Nela constará seus dados pessoais, os dados de sua bike, o tipo de seguro escolhido por você e que você foi aprovado no processo de vistoria. Caso concorde com o que está sendo dito, assine sua apólice e envie de volta pelo mesmo e-mail que enviou a apólice para você";
}
//Confirmar escolha do tipo de seguro
function mensagem(tipoSeguro) {
    let mensagemElement = document.getElementById("mensagem");
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
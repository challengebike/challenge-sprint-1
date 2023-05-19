//Para recuperar os elementos inputs do form
const inputModelo = document.querySelector("#idModelo");
const inputNumSerie= document.querySelector("#idNumSerie");
const inputCor = document.querySelector("#idCor");
const inputNota = document.querySelector("#idNota");
const inputValorBike = document.querySelector("#idValorBike");
const inputValorAces = document.querySelector("#idValorAces");

const inputNome = document.querySelector("#idNome");
const inputIdent = document.querySelector("#idIdent");
const inputCpf = document.querySelector("#idCpf");
const inputEmail = document.querySelector("#idEmail");
const inputTelefone = document.querySelector("#idTelefone");

const inputCep = document.querySelector("#idCep");
const inputRua = document.querySelector("#idRua");
const inputNumCasa = document.querySelector("#idNumCasa");
const inputComplem = document.querySelector("#idComplem");
const inputBairro = document.querySelector("#idBairro");
const inputCidade = document.querySelector("#idCidade");
const inputEstado = document.querySelector("#idEstado");
const inputPais = document.querySelector("#idPais");

//Capturar todos os elementos
addEventListener("click",(evt)=>{

    //Criar um objeto para armazenar os dados do form
    let dadosCliente = {
        modeloDadosCliente : inputModelo.value,
        numSerieDadosCliente : inputNumSerie.value,
        corDadosCliente : inputCor.value,
        notaDadosCliente : inputNota.value,
        valorBikeDadosCliente : inputValorBike.value,
        valorAcesDadosCliente : inputValorAces.value,

        nomeDadosCliente : inputNome.value,
        identDadosCliente : inputIdent.value,
        cpfDadosCliente : inputCpf.value,
        emailDadosCliente : inputEmail.value,
        telefoneDadosCliente : inputTelefone.value,

        cepDadosCliente : inputCep.value,
        ruaDadosCliente : inputRua.value,
        numCasaDadosCliente : inputNumCasa.value,
        complemDadosCliente : inputComplem.value,
        bairroDadosCliente : inputBairro.value,
        cidadeDadosCliente : inputCidade.value,
        estadoDadosCliente : inputEstado.value,
        paisDadosCliente : inputPais.value,
    }

    console.log(dadosCliente);
});


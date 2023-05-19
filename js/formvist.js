//Para recuperar os elementos inputs do form
const inputFoto1 = document.querySelector("#idFoto1");
const inputFoto2 = document.querySelector("#idFoto2");
const inputFoto3 = document.querySelector("#idFoto3");
const inputFoto4 = document.querySelector("#idFoto4");
const inputFoto5 = document.querySelector("#idFoto5");
const inputFoto6 = document.querySelector("#idFoto6");
const inputFoto7 = document.querySelector("#idFoto7");
const inputFoto8 = document.querySelector("#idFoto8");
const inputFoto9 = document.querySelector("#idFoto9");

const inputVideo1 = document.querySelector("#idVideo1");
const inputVideo2 = document.querySelector("#idVideo2");


//Capturar todos os elementos
addEventListener("click",(evt)=>{

    //Criar um objeto para armazenar os dados do form
    let arquivosVistoria = {
        foto1ArquivosVistoria : getFileData(inputFoto1),
        foto2ArquivosVistoria : getFileData(inputFoto2),
        foto3ArquivosVistoria : getFileData(inputFoto3),
        foto4ArquivosVistoria : getFileData(inputFoto4),
        foto5ArquivosVistoria : getFileData(inputFoto5),
        foto6ArquivosVistoria : getFileData(inputFoto6),
        foto7ArquivosVistoria : getFileData(inputFoto7),
        foto8ArquivosVistoria : getFileData(inputFoto8),
        foto9ArquivosVistoria : getFileData(inputFoto9),

        video1ArquivosVistoria : getFileData(inputVideo1),
        Video2ArquivosVistoria : getFileData(inputVideo2),
    }

    console.log(arquivosVistoria);
});

//Para saber informações do arquivo enviado
function getFileData(input) {
    let file = input.files[0];
    if (file) {
        return {
            nome: file.name,
            tipo: file.type,
        };
    }
    return null;
}
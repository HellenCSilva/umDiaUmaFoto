let newRequestButton = document.querySelector("#busca");
let request = new XMLHttpRequest();

request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW");

request.addEventListener("load",function(){

    if (request.status == 200){
        let apiObject = JSON.parse(request.responseText)
        let imgReceived = document.querySelector("#foto");
        let ApiExplicacao = document.querySelector("#ApiExplicacao");
        let data = document.querySelector("#data");
        let tituloImg = document.querySelector("#tituloImg");
        let credito = document.querySelector("#credito");
        let imgReceivedAlt = document.querySelector("#imagem");

        ApiExplicacao.textContent += apiObject.explanation;
        ApiExplicacao.classList.add("imgTexto");
        data.textContent = apiObject.date;
        data.classList.add("imgData");
        credito.textContent += apiObject.copyright;
        credito.classList.add("copyright");
        tituloImg.textContent = apiObject.title;
        tituloImg.classList.add("nomeImg");

        if (apiObject.media_type == "image"){
            imgReceivedAlt.src = apiObject.url;
            imgReceived.classList.add("invisivel");
        } else{
            imgReceived.src = apiObject.url;
            imgReceivedAlt.classList.add("invisivel");
        }

        imgReceivedAlt.classList.add("image");
        imgReceived.classList.add("video");
    } else{
        window.location.href = "error.html";
    }
})

newRequestButton.addEventListener("click", function(){
    let customizedRequest = new XMLHttpRequest();
    let form = document.querySelector("#procurar");
    let newApiUrl = "https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW&date=" + form.value;

    customizedRequest.open("GET",newApiUrl);

    
    customizedRequest.addEventListener("load",function(event){

        if (customizedRequest.status == 200){
            let newApiObject = JSON.parse(customizedRequest.responseText);
            let imgReceived = document.querySelector("#foto");
            let ApiExplicacao = document.querySelector("#ApiExplicacao");
            let data = document.querySelector("#data");
            let tituloImg = document.querySelector("#tituloImg");
            let credito = document.querySelector("#credito");
            let imgReceivedAlt = document.querySelector("#imagem");

            ApiExplicacao.textContent += newApiObject.explanation;
            ApiExplicacao.classList.add("imgTexto");
            data.textContent = newApiObject.date;
            data.classList.add("imgData");
            credito.textContent += newApiObject.copyright;
            credito.classList.add("copyright");
            tituloImg.textContent = newApiObject.title;
            tituloImg.classList.add("nomeImg");

            if (newApiObject.media_type == "image"){
                imgReceivedAlt.src = newApiObject.url;
                imgReceived.classList.add("invisivel");
                imgReceivedAlt.classList.remove("invisivel");
            } else{
                imgReceived.src = newApiObject.url;
                imgReceivedAlt.classList.add("invisivel");
                imgReceived.classList.remove("invisivel");
            }

            imgReceivedAlt.classList.add("image");
            imgReceived.classList.add("video");

            event.preventDefault();
        } else{
            window.location.href = "error.html";
        }
        
    })
    customizedRequest.send();
});


request.send();
var textarea = document.querySelector("div.entrada textarea");
var button = document.querySelector("div.entrada button");

// Evia texto para o servidor
function enviarMensagem (msg) {

}

// 
textarea.addEventListener("keydown", function(event) {
    if (event.keyCode == 13 && !event.shiftKey) {
    	event.preventDefault();
        button.dispatchEvent(new Event("click"));
	}
});

// Altera botão para envio de texto
textarea.addEventListener("keyup", function () {
	if (this.value != "") {
		button.classList.add("typing");
	} else {
		button.classList.remove("typing");
	}
});

// Anima botão
button.addEventListener("click", function () {
	if ( this.classList.contains("typing") ) {
		this.classList.add("animateTextSend");
	}
});

// 
button.addEventListener("animationend", function() {
	this.classList.remove("animateTextSend");	
});

// Envia texto
button.addEventListener("click", function (evt) {
	enviarMensagem(textarea.value);
	textarea.value = "";
	this.classList.remove("typing");
});
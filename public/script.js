const botaoEnviar = document.getElementById("enviar");
const caixaMensagem = document.getElementById("texto");
const chat = document.getElementById("mensagens")
 
const socket = io();

botaoEnviar.addEventListener("click", ()=> {
    if(caixaMensagem.value !== ""){
        socket.emit("Nova mensagem", caixaMensagem.value); // ao invés de ouvir, ele emite
        caixaMensagem.value = "";
    }
})

socket.addEventListener("Nova mensagem", (mensagem)=> {
    const novaMensagem = document.createElement("li"); // <li />
    novaMensagem.classList.add("mensagem");
    novaMensagem.textContent = mensagem; // <li> mensagem </li>]
    chat.appendChild(novaMensagem);
});


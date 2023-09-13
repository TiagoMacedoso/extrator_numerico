const inputEntrada = document.querySelector("#inputEntrada");
const spanResultado = document.querySelector("#spanResultado");
const btnColar = document.querySelector("#btnColar");
const btnCopiar = document.querySelector("#btnCopiar");
const btnRemover = document.querySelector("#btnRemover");

btnRemover.addEventListener("click", ()=>{
    removerCaracteres();

    cliqueNosBotoes(btnRemover, "Remover", "Removido");
});

btnColar.addEventListener("click", async () => {
    try {
        const texto = await navigator.clipboard.readText();

        inputEntrada.value = texto;

        cliqueNosBotoes(btnColar, "Colar", "Colado");

        setTimeout(() => {
            removerCaracteres();
        }, 500);
    } catch (error) {
        alert("Essa função está disponível somente no Google Chrome! \nUtilize o botão direito para colar ou o atalho 'ctrl + v'");
    }
});

btnCopiar.addEventListener("click", () => {
    cliqueNosBotoes(btnCopiar, "Copiar", "Copiado");

    navigator.clipboard.writeText(spanResultado.textContent);

    spanResultado.textContent = '';
});

function removerCaracteres(){
    textoInput = inputEntrada.value;

    spanResultado.textContent = textoInput.replace(/[^0-9]/g, "");

    inputEntrada.value = '';
}

function cliqueNosBotoes(botao, textoAntigo, novoTexto) {
    botao.innerText = novoTexto;
    botao.classList.add('realizado');

    setTimeout(() => {
        botao.innerText = textoAntigo;
        botao.classList.remove('realizado');
    }, 1000);
}
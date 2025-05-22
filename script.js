function fecharModalInicio() {
    const inputNomeElement = document.getElementById('input-nome');
    let inputNome = inputNomeElement.value.trim();

    const caracteresNome = inputNome.length;
    if (caracteresNome < 3) {
        event.preventDefault();
    } else {
        event.preventDefault();

        const modalOverlay = document.getElementById('inicio-modal-overlay');
        modalOverlay.classList.add('modal-overlay-hidden');

        let nomeFormatado = inputNome.toLowerCase();
        nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1);

        abrirModalEmergente(nomeFormatado);
    }
}

function abrirModalEmergente(nomeFormatado) {
    const overlayModalEmergente = document.getElementById('emergente-modal-overlay');
    const textoWelcome = document.getElementById('welcome');

    console.log(nomeFormatado);
    textoWelcome.textContent = "Seja bem-vindo(a), " + nomeFormatado + "! 👋";
    overlayModalEmergente.style.display = 'flex';
    overlayModalEmergente.classList.add('modal-overlay');
}

// Pega o overlay e o conteúdo do modal
const overlayEmergente = document.getElementById('emergente-modal-overlay');
const modalEmergente = document.getElementById('modal-emergente');

// Fecha ao clicar fora do conteúdo
overlayEmergente.addEventListener('click', function (event) {
    if (!modalEmergente.contains(event.target)) {
        overlayEmergente.style.display = 'none';
    }
});

function dadosDeContato() {
    event.preventDefault();
    let nome = document.getElementById('nome-contato')
    let email = document.getElementById('email-contato')
    let mensagem = document.getElementById('mensagem-contato')
    let nomeTransformado = nome.value
    let emailTransformado = email.value
    let mensagemTransformado = mensagem.value

    if (!nomeTransformado || !emailTransformado || !mensagemTransformado) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; // Interrompe a função se faltar algum campo
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(emailTransformado)) {
        alert('⚠️ Por favor, insira um e-mail válido.');
        return;
    }
    // Se todos os campos estiverem preenchidos, mostra o alerta
    alert(
        `📬 Mensagem enviada com sucesso!\n\n` +
        `👤 Nome: ${nomeTransformado}\n` +
        `📧 Email: ${emailTransformado}\n` +
        `💬 Mensagem:\n"${mensagemTransformado}"\n\n` +
        `🚀 Obrigado pelo contato! Em breve estarei retornando.`
    );
    document.getElementById('contact-form').reset();

   
}
const botaoModoEscuro = document.getElementById('dark-mode-toggle');

botaoModoEscuro.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    

    // Troca o ícone e texto do botão
    if (document.body.classList.contains('dark-mode')) {
        botaoModoEscuro.textContent = '☀️ Modo Claro';
    } else {
        botaoModoEscuro.textContent = '🌙 Modo Escuro';
    }
});
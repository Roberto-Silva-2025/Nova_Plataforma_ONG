import { validateCadastroForm } from '../forms/validate.js';

export function cadastroTemplate() {
    // Retorna o HTML do template cadastro
    return `
        <h1>Cadastro</h1>
        <form id="cadastroForm">
            <label for="nome">Nome:</label>
            <input id="nome" type="text" name="nome" required>

            <label for="email">Email:</label>
            <input id="email" type="email" name="email" required>

            <button type="submit">Cadastrar</button>
        </form>
        <div id="msg"></div>
    `;
}

// Função para configurar os eventos do formulário
export function setupCadastroForm() {
    const form = document.getElementById('cadastroForm');
    const msgDiv = document.getElementById('msg');

    form.onsubmit = (e) => {
        e.preventDefault(); // prevenir envio padrão
        msgDiv.textContent = '';

        // Valida o formulário
        if (validateCadastroForm()) {
            // Simular cadastro com localStorage ou outra lógica
            const nome = form.nome.value.trim();
            const email = form.email.value.trim();
            const cadastro = { nome, email };
            localStorage.setItem('cadastro', JSON.stringify(cadastro));

            msgDiv.textContent = 'Cadastro realizado com sucesso!';
            form.reset();
        } else {
            msgDiv.textContent = 'Por favor, corrija os erros no formulário.';
        }
    };
}

export function navigate(route) {
    window.history.pushState({}, '', route);
    renderPage(route);
}

export function renderPage(route) {
    const app = document.getElementById('app');
    switch(route) {
        case '/':
        case '/index.html':
            import('../templates/home.js').then(mod => app.innerHTML = mod.homeTemplate());
            break;
        case '/projeto.html':
            import('../templates/projetos.js').then(mod => app.innerHTML = mod.projetosTemplate());
            break;
        case '/cadastro.html':
            import('../templates/cadastro.js').then(mod => app.innerHTML = mod.cadastroTemplate());
            break;
        default:
            app.innerHTML = '<h3>Página não encontrada</h3>';
    }
}

window.onpopstate = () => renderPage(window.location.pathname);

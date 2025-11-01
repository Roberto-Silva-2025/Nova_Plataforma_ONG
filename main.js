import { navigate, renderPage } from './core/router.js';

document.addEventListener('DOMContentLoaded', () => {
    renderPage(window.location.pathname);

    document.querySelectorAll('a[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(link.getAttribute('href'));
        });
    });
});

// Vänta tills dokumentet är laddat
document.addEventListener('DOMContentLoaded', function() {
    // Hämta menyknappen och skapa mobilmenyn
    const menuButton = document.querySelector('.menu-button');
    const header = document.querySelector('.header');
    
    // Skapa mobilmenyn om den inte redan finns
    if (!document.querySelector('.mobile-nav')) {
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Lägg till samma länkar som i desktop-menyn
        const links = [
            { text: 'Hem', href: 'index.html' },
            { text: 'Om oss', href: 'om-oss.html' },
            { text: 'Tjänster', href: 'tjanster.html' },
            { text: 'Kontakt', href: 'kontakt.html' }
        ];
        
        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.className = 'mobile-nav-link';
            a.textContent = link.text;
            mobileNav.appendChild(a);
        });
        
        // Lägg till mobilmenyn efter headern
        header.parentNode.insertBefore(mobileNav, header.nextSibling);
    }
    
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Lägg till klickhändelse på menyknappen
    menuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});
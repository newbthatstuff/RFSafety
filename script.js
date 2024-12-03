document.addEventListener('DOMContentLoaded', () => {
    centerFooterText();
    modifyFooterText();
});

const centerFooterText = () => {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.textAlign = 'center';
    }
};

const modifyFooterText = () => {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            © 2024 Safety In RF Services. All rights reserved.
            <br>
            Contact: sc6@safetyinrf.com | Phone: (647) 248-8489
        `;
    }
};
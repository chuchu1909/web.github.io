document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GENERADOR DE PALETAS DE COLOR ALEATORIAS
    const generateBtn = document.getElementById('generate-btn');
    const colorBlocks = document.querySelectorAll('.color-block');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if(generateBtn) {
        generateBtn.addEventListener('click', () => {
            colorBlocks.forEach(block => {
                const newColor = getRandomColor();
                block.style.backgroundColor = newColor;
                
                // Actualizar texto
                const hexText = block.querySelector('.hex-code');
                const nameText = block.querySelector('.color-name');
                
                if(hexText) hexText.textContent = newColor;
                if(nameText) nameText.textContent = "Generado"; // En una app real usaría una API para nombres
            });
        });
    }

    // 2. NAV ACTIVA AL HACER SCROLL
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                // Aquí podrías agregar una clase 'active' en CSS para destacar el link
                a.style.color = '#8e44ad';
            } else {
                a.style.color = '#2c3e50';
            }
        });
    });

    // 3. SMOOTH SCROLL PARA ENLACES INTERNOS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
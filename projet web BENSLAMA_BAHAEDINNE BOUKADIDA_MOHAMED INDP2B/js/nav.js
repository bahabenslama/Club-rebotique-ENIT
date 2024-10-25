window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Vous pouvez ajuster cette valeur en fonction de votre design
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.getElementById('typed-text');

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        h1.innerHTML = text.substring(0, i + 1);
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
        }, 150); // Contrôlez la vitesse de frappe en ajustant le délai ici
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 1000); // Attend 1 seconde après la frappe du texte
    }
}

function startTyping() {
    // Texte que vous souhaitez afficher en tant que typewriter effect
    var text = "WELCOME TO THE FAMILY!";
    
    if (typeof text === 'undefined') return;
    
    typeWriter(text, 0, function() {
        // Fonction de rappel (callback) - Ajoutez d'autres actions si nécessaire
    });
}

// Démarrez la fonction pour le typewriter effect lorsque la page est chargée
window.addEventListener('load', startTyping);
});


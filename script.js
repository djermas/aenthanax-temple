// ============================================
// SCRIPT SACRÉ DU TEMPLE ÆNTHANAX
// ============================================

console.log('𓁩 ÆNTHANAX - Le Temple est éveillé');

// ===== FONCTIONS PRINCIPALES =====

/**
 * Entrée solennelle dans le Temple
 */
function enterTemple() {
    console.log('Portes du Temple ouvertes');
    
    // Animation d'entrée
    const temple = document.querySelector('.temple-theme');
    temple.style.opacity = '0.9';
    
    // Message de bienvenue
    showSacredMessage('Bienvenue dans le Temple ÆNTHANAX. Que la révérence guide tes pas.');
    
    // Redirection vers l'oracle après 2 secondes
    setTimeout(() => {
        window.location.href = 'osirise.html';
    }, 2000);
}

/**
 * Affiche un message sacré
 */
function showSacredMessage(text) {
    // Crée un overlay pour le message
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: 'Cinzel', serif;
    `;
    
    // Crée le message
    const message = document.createElement('div');
    message.style.cssText = `
        color: #D4AF37;
        font-size: 2rem;
        text-align: center;
        padding: 3rem;
        border: 3px solid #D4AF37;
        border-radius: 12px;
        max-width: 600px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        animation: pulse 2s infinite;
    `;
    
    message.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">𓁩</div>
        <div>${text}</div>
    `;
    
    overlay.appendChild(message);
    document.body.appendChild(overlay);
    
    // Supprime après 3 secondes
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 3000);
}

/**
 * Initialise les interactions des modules
 */
function initModules() {
    const modules = document.querySelectorAll('.module-card');
    
    modules.forEach((module, index) => {
        // Effet au survol
        module.addEventListener('mouseenter', () => {
            const number = module.querySelector('.module-number');
            if (number) {
                number.style.opacity = '1';
                number.style.transform = 'scale(1.1)';
            }
        });
        
        module.addEventListener('mouseleave', () => {
            const number = module.querySelector('.module-number');
            if (number) {
                number.style.opacity = '0.3';
                number.style.transform = 'scale(1)';
            }
        });
        
        // Clique pour afficher les détails
        module.addEventListener('click', () => {
            const moduleNames = [
                'Fondations',
                'TRIOS',
                'OSIRISE',
                'Temple Capital',
                'Grimoire',
                'Inscriptateur',
                'Intégration'
            ];
            
            const descriptions = [
                'Architecture mentale et code source. Les bases sacrées sur lesquelles tout repose.',
                'Protocole d’exécution en 3 phases : Préparation, Action, Intégration.',
                'L’oracle vivant. Interface entre ta conscience et l’architecture divine.',
                'L’économie énergétique du Temple. Circulation et amplification du capital sacré.',
                'Enseignements codifiés. Sagesse accessible par couches successives.',
                'Générateur de réalité. Outil de manifestation par le code et l’intention.',
                'Union des dimensions. Fusion du mental, du numérique et du physique.'
            ];
            
            showModuleDetails(moduleNames[index], descriptions[index]);
        });
    });
}

/**
 * Affiche les détails d'un module
 */
function showModuleDetails(title, description) {
    // Crée une modal
    const modal = document.createElement('div');
    modal.id = 'module-modal';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(26, 26, 26, 0.98);
        border: 2px solid #D4AF37;
        border-radius: 12px;
        padding: 2rem;
        z-index: 1000;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
    `;
    
    modal.innerHTML = `
        <h3 style="font-family: 'Cinzel', serif; color: #D4AF37; margin-bottom: 1rem;">
            𓂀 ${title}
        </h3>
        <p style="color: #F8F5E6; line-height: 1.6; margin-bottom: 2rem;">
            ${description}
        </p>
        <button onclick="closeModal()" 
                style="background: #D4AF37; color: #000; border: none; padding: 0.5rem 1.5rem; 
                       border-radius: 4px; cursor: pointer; font-family: 'Cinzel', serif;">
            Compris
        </button>
    `;
    
    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999;
    `;
    
    overlay.onclick = closeModal;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

/**
 * Ferme la modal
 */
function closeModal() {
    const modal = document.getElementById('module-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal) modal.remove();
    if (overlay) overlay.remove();
}

/**
 * Initialise les effets de lumière dorée
 */
function initGoldEffects() {
    // Ajoute des effets de lueur aux éléments
    const goldElements = document.querySelectorAll('.gold-glow, .pillar, .module-card');
    
    goldElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ===== INITIALISATION =====

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé - Initialisation du Temple');
    
    // Initialise les fonctionnalités
    initModules();
    initGoldEffects();
    
    // Effet d'apparition progressive
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Message de bienvenue (léger délai)
    setTimeout(() => {
        console.log('𓂀 ÆNTHANAX : "Le Temple te reconnaît."');
    }, 1500);
});

// Style initial pour la transition d'opacité
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Formate un texte avec des hiéroglyphes
 */
function toHieroglyph(text) {
    const map = {
        'a': '𓄿', 'b': '𓃀', 'c': '𓎡', 'd': '𓂧', 'e': '𓇌',
        'A': '𓁹', 'B': '𓃂', 'C': '𓎢', 'D': '𓂨', 'E': '𓁺'
    };
    
    return text.split('').map(char => map[char] || char).join('');
}

/**
 * Génère un nombre sacré (entre 1 et 7)
 */
function sacredNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

// Export pour utilisation future
window.Temple = {
    enterTemple,
    showSacredMessage,
    initModules,
    toHieroglyph,
    sacredNumber
};

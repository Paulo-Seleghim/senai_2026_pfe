// ==========================================
// SMOOTH SCROLLING & NAVIGATION
// ==========================================

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ==========================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ==========================================

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async function() {
        const textToCopy = this.getAttribute('data-copy');
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Visual feedback
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            this.classList.add('copied');
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            console.error('Erro ao copiar:', err);
            alert('Erro ao copiar o código. Por favor, copie manualmente.');
        }
    });
});

// ==========================================
// FAQ ACCORDION FUNCTIONALITY
// ==========================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Open first FAQ by default
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) {
    firstFaq.classList.add('active');
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const backToTopButton = document.getElementById('backToTop');

function toggleBackToTopButton() {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleBackToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// ANIMATE ON SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .prerequisite-card, .step-card, .command-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// HIGHLIGHT CODE SYNTAX (Simple)
// ==========================================

function highlightCode() {
    document.querySelectorAll('pre code').forEach(block => {
        // This is a simple syntax highlighting
        // For production, consider using Prism.js or highlight.js
        let html = block.innerHTML;
        
        // Highlight comments
        html = html.replace(/(#[^\n]*)/g, '<span class="code-comment">$1</span>');
        
        // Highlight strings
        html = html.replace(/(['"][^'"]*['"])/g, '<span class="code-string">$1</span>');
        
        block.innerHTML = html;
    });
}

// Run on page load
window.addEventListener('DOMContentLoaded', highlightCode);

// ==========================================
// PROGRESS BAR ON SCROLL
// ==========================================

function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #646cff, #61dafb);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createProgressBar();

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close active FAQ
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ==========================================
// DYNAMIC STATS COUNTER
// ==========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const text = stat.textContent;
                const match = text.match(/\d+/);
                if (match) {
                    const number = parseInt(match[0]);
                    stat.textContent = '0' + text.replace(/\d+/, '');
                    setTimeout(() => {
                        animateCounter(stat, number);
                    }, 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==========================================
// PREVENT ANIMATION ON PAGE LOAD
// ==========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==========================================
// EASTER EGG - Konami Code
// ==========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Fun confetti effect
    const colors = ['#646cff', '#61dafb', '#ffd93d', '#10b981'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }
    
    // Show message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: bounce 0.5s ease;
    `;
    message.innerHTML = '🎉 Você encontrou o Easter Egg! 🚀<br><small style="font-size: 0.8rem; font-weight: normal;">Código Konami ativado!</small>';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: 1;
        transform: rotate(${Math.random() * 360}deg);
        animation: fall ${2 + Math.random() * 2}s linear forwards;
        z-index: 9999;
        pointer-events: none;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// TOOLTIP FUNCTIONALITY
// ==========================================

function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #1a1a1a;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(tooltip);
    
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// Add tooltips to relevant elements
document.querySelectorAll('.version-badge').forEach(badge => {
    createTooltip(badge, 'Versão recomendada');
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.fetchStart;
            
            console.log(`%c⚡ Página carregada em ${Math.round(loadTime)}ms`, 
                'color: #646cff; font-size: 14px; font-weight: bold;');
            
            // Log performance metrics
            if (loadTime < 1000) {
                console.log('%c🚀 Performance excelente!', 'color: #10b981; font-size: 12px;');
            } else if (loadTime < 3000) {
                console.log('%c✅ Performance boa', 'color: #f59e0b; font-size: 12px;');
            } else {
                console.log('%c⚠️ Considere otimizar o carregamento', 'color: #ef4444; font-size: 12px;');
            }
        }, 0);
    });
}

// ==========================================
// CONSOLE EASTER EGG
// ==========================================

console.log('%c🎓 Tutorial React + Vite', 'color: #646cff; font-size: 24px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️ para estudantes', 'color: #61dafb; font-size: 14px;');
console.log('%cDica: Tente o código Konami! ↑↑↓↓←→←→BA', 'color: #ffd93d; font-size: 12px; font-style: italic;');
console.log('%c\nAproveite o tutorial e bons estudos! 🚀', 'color: #10b981; font-size: 14px;');

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#steps';
skipLink.textContent = 'Pular para o conteúdo principal';
skipLink.style.cssText = `
    position: fixed;
    top: -100px;
    left: 20px;
    background: #646cff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    z-index: 10000;
    transition: top 0.3s ease;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '20px';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-100px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation style
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #646cff !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);

// ==========================================
// INITIALIZATION
// ==========================================

console.log('%c✅ JavaScript carregado com sucesso!', 'color: #10b981; font-weight: bold;');
// Script para el manejo del formulario de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = usernameInput.value.trim();
            
            // Verificar que se haya ingresado un nombre
            if (!username) {
                showError('Por favor, ingresa tu nombre.');
                return;
            }
            
            // Convertir el nombre a minúsculas para hacer la comparación case-insensitive
            const lowerUsername = username.toLowerCase();
            
            // Redireccionar según el nombre del usuario
            if (lowerUsername === 'leslie') {
                // Mensaje de bienvenida y redirección para Leslie
                showSuccess('¡Hola mi princesa! Hay algo que debo decirte hoy...');
                setTimeout(() => {
                    window.location.href = 'leslie.html';
                }, 1500);
            } else if (lowerUsername === 'ciri') {
                // Mensaje de bienvenida y redirección para Ciri
                showSuccess('¿Como le hizo para iniciar sesion?...');
                setTimeout(() => {
                    window.location.href = 'ciri.html';
                }, 1500);
            } else {
                // Mensaje para usuarios no reconocidos
                showError(`Lo siento ${username}, no tienes acceso.`);
            }
        });
    }
    
    // Función para mostrar mensajes de error
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.style.background = '#fadbd8';
        errorMessage.style.color = '#e74c3c';
        errorMessage.style.borderLeft = '4px solid #e74c3c';
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    
    // Función para mostrar mensajes de éxito
    function showSuccess(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.style.background = '#d5f4e6';
        errorMessage.style.color = '#27ae60';
        errorMessage.style.borderLeft = '4px solid #27ae60';
    }
    
    // Agregar efecto visual al input cuando se escribe
    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            // Ocultar mensaje de error cuando el usuario empieza a escribir
            if (errorMessage.style.display === 'block') {
                errorMessage.style.display = 'none';
            }
        });
        
        // Permitir envío del formulario con Enter
        usernameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });
    }
});

// Función para agregar efectos visuales adicionales
function addVisualEffects() {
    // Efecto de particles en el fondo (opcional)
    const container = document.querySelector('.container');
    if (container) {
        container.addEventListener('mousemove', function(e) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255, 255, 255, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'particle-fade 1s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        });
    }
}

// CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-fade {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Inicializar efectos visuales
addVisualEffects();

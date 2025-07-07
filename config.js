/*******************************************************************************
** Archivo: config.js
** Descripción: Configuración del Chatbot OIA.
** Versión: 2.5
*******************************************************************************/

const OPENAI_CONFIG = {
    apiKey: 'Tu-API-Key-aquí', // Reemplaza con tu clave de API de OpenAI
    model: 'gpt-4o-mini',
};

function showCompletionMessage() {
    const notification = document.createElement('div');
    notification.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 2rem; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); z-index: 10000; text-align: center; font-family: system-ui, -apple-system, sans-serif; max-width: 400px;`;
    notification.innerHTML = `<div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div><h2 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 600;">¡Felicitaciones!</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Has completado el 100% del glosario de IA</p><div style="font-size: 2rem;">✅</div>`;
    document.body.appendChild(notification);
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

# Glosario de IA con chatbot OIA - paquete SCORM

## 📋 Descripción

Herramienta académica interactiva que combina un glosario especializado de términos de inteligencia artificial con capacidades conversacionales avanzadas mediante chatbot OIA (basado en GPT-4o-mini). Optimizada para múltiples sistemas LMS con seguimiento pedagógico.

## 🎯 Características principales

### **Glosario interactivo**
- 26 términos especializados en IA organizados por categorías
- Seguimiento automático de progreso estudiantil
- Búsqueda inteligente y filtrado por categorías
- Diseño responsive para múltiples dispositivos

### **Chatbot OIA integrado**
- Asistente especializado en terminología de IA
- Respuestas en español académico chileno
- Referencias cruzadas automáticas con el glosario
- **API key preconfigurada** - sin configuración para estudiantes

### **Seguimiento SCORM y analytics**
- Compatible con SCORM 1.2/2004 y múltiples LMS
- Calificación automática basada en términos consultados
- Persistencia de progreso entre sesiones
- Reportes de actividad para el profesor
- **Google Analytics integrado** para métricas detalladas de uso

## 📦 Contenido del Paquete

```
glosario-ia-chatbot-oia-scorm.zip
├── index.html              # Aplicación principal
├── APIWrapper.js           # Interfaz SCORM
├── config.js               # Configuración del Chatbot OIA
├── imsmanifest.xml         # Manifiesto SCORM
├── LICENSE                 # Licencias del proyecto
└── README-Implementacion.md # Este archivo
```

## 🚀 Instalación en LMS

### **Paso 1: subir el paquete**
1. En su curso, active la **edición**
2. Agregue una nueva **actividad**
3. Seleccione **"Paquete SCORM"** o **"Contenido SCORM"**
4. Suba el archivo `glosario-ia-chatbot-oia-scorm.zip`

### **Paso 2: configurar opciones**
```
Nombre: Glosario de IA con chatbot OIA
Descripción: Herramienta académica interactiva
Calificación máxima: 100 puntos
Intentos permitidos: Ilimitados
Modo de calificación: Puntuación más alta
Mostrar paquete: En nueva ventana
```

### **Paso 3: configuraciones avanzadas**
```
Forzar nuevo intento: No
Bloquear después del último intento: No
Mostrar botones de navegación: Sí
Auto-continuar: Sí
Auto-commit: Sí
```

## 🔧 Compatibilidad LMS

**Sistemas compatibles probados:**
- ✅ **Moodle** 3.9+ (todas las versiones)
- ✅ **OpenEdX** (funcionamiento independiente garantizado)
- ✅ **Blackboard** Learn 9.1+
- ✅ **Canvas** by Instructure
- ✅ **Brightspace** D2L
- ✅ **Schoology** Enterprise
- ✅ **Google Classroom** (mediante SCORM Cloud)
- ✅ **Chamilo** LMS
- ✅ **ILIAS** LMS

**Características de compatibilidad:**
- ✅ **Detección automática** de SCORM 1.2 y 2004
- ✅ **Funcionamiento independiente** si SCORM no está disponible
- ✅ **Fallback robusto** a localStorage en todos los casos
- ✅ **Inicialización no bloqueante** que evita cuelgues del navegador
- ✅ **Manifiesto simplificado** para máxima compatibilidad
- ✅ **Manejo de errores** que no interrumpe la funcionalidad

**Solución de problemas comunes:**
- **OpenEdX**: Funciona en modo independiente automáticamente
- **Moodle**: Detecta y usa SCORM cuando está disponible
- **Recursos no visibles**: Manifiesto simplificado resuelve problemas de visualización

## 📊 Google Analytics integrado

### **Métricas automáticas**
El glosario incluye seguimiento detallado de uso mediante Google Analytics:

**Eventos rastreados:**
- ✅ **Términos consultados** - qué conceptos estudian más los estudiantes
- ✅ **Uso del chatbot OIA** - frecuencia y tipo de consultas realizadas
- ✅ **Búsquedas realizadas** - términos más buscados en el glosario
- ✅ **Filtros de categoría** - áreas temáticas de mayor interés
- ✅ **Progreso de estudio** - avance individual y grupal
- ✅ **Configuraciones** - adopción del chatbot OIA

### **Configuración de analytics**
**ID de Google Analytics:** `G-xxx`

Para personalizar el tracking, editar en `config.js`:
```javascript
analytics: {
    enabled: true,
    trackingId: 'TU_ID_DE_ANALYTICS',
    trackEvents: {
        termConsulted: true,
        chatbotUsed: true,
        searchPerformed: true,
        categoryFiltered: true,
        progressUpdated: true
    }
}
```

### **Reportes disponibles**
- **Términos más consultados** por categoría
- **Patrones de uso** del chatbot OIA
- **Búsquedas frecuentes** y tendencias
- **Progreso académico** por estudiante/grupo
- **Tiempo de sesión** y engagement
- **Adopción tecnológica** (configuración de API)

### **Privacidad**
- Datos anonimizados conforme a GDPR
- No se almacena información personal identificable
- Solo métricas de uso académico y rendimiento

## 🔑 Configuración del Chatbot OIA

### **Para Estudiantes**

Los estudiantes deben configurar su propia API key de OpenAI:

1. **Obtener API Key:**
   - Visitar [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
   - Crear cuenta OpenAI (gratuita)
   - Generar nueva API key
   - Copiar la clave (comienza con `sk-`)

2. **Configurar en el Glosario:**
   - Hacer clic en "Chatbot OIA"
   - Presionar "⚙️ Configurar API"
   - Pegar la API key
   - Hacer clic en "Guardar"

### **Configuración Institucional (Opcional)**

Para configuración centralizada, editar el archivo `config.js`:

```javascript
const OPENAI_CONFIG = {
    apiKey: 'sk-tu-api-key-aqui', // API key institucional
    model: 'gpt-4o-mini',
    temperature: 0.7,
    maxTokens: 1000
    // ... más configuraciones
};
```

### **Costos Estimados**
- **GPT-4o-mini**: $0.15 por 1000 tokens
- **Uso típico estudiantil**: $2-5 USD mensuales
- **Consulta promedio**: $0.03-$0.08 por pregunta

### **Políticas Recomendadas**
- Informar a estudiantes sobre costos asociados
- Proporcionar alternativas para estudiantes sin recursos
- Establecer límites de uso responsable
- Monitorear actividad académica vs. uso de IA

## 📊 Sistema de Calificación

### **Criterios de Evaluación**
- **0-79%**: Incompleto - Progreso insuficiente
- **80-100%**: Completado - Dominio satisfactorio

### **Métricas de Seguimiento**
- Términos consultados en el glosario
- Tiempo de sesión activa
- Interacciones con ChatGPT (opcional)
- Progreso por categorías temáticas

### **Reportes Disponibles**
- Progreso individual por estudiante
- Estadísticas de uso de la herramienta
- Términos más consultados
- Actividad temporal

## 🛠️ Soporte Técnico

### **Problemas Comunes**

**P: El paquete no se carga en Moodle**
R: Verificar que el archivo ZIP contenga todos los archivos requeridos y que el imsmanifest.xml sea válido.

**P: Chatbot OIA no responde**
R: El chatbot viene preconfigurado. Si no responde, verificar conexión a internet y revisar la consola del navegador (F12) para mensajes de error.

**P: No se guarda el progreso**
R: Verificar configuraciones SCORM en Moodle y que JavaScript esté habilitado.

**P: Error de API key inválida**
R: La API key debe comenzar con "sk-" y tener fondos disponibles en la cuenta OpenAI.

### **Compatibilidad**
- **Moodle**: Versiones 3.9+
- **Navegadores**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **SCORM**: Compatible con 1.2 y 2004
- **Dispositivos**: Desktop, tablet, móvil

### **Contacto de Soporte**
- **Contenido Académico**: Francisco Sereño
- **Soporte Técnico**: Administrador Moodle institucional
- **Documentación**: Este archivo README

## 📝 Notas Pedagógicas

### **Objetivos de Aprendizaje**
1. Familiarización con terminología especializada de IA
2. Comprensión de conceptos fundamentales y limitaciones
3. Desarrollo de habilidades de consulta e investigación
4. Integración de tecnologías de IA en el aprendizaje

### **Estrategias de Uso**
- **Previo a clases**: Exploración autónoma de conceptos
- **Durante clases**: Referencia rápida de terminología
- **Post-clase**: Profundización y consultas específicas
- **Evaluaciones**: Verificación de comprensión conceptual

### **Evaluación Recomendada**
- **Formativa**: Progreso continuo en el glosario
- **Sumativa**: Demostración de comprensión conceptual
- **Reflexiva**: Análisis crítico del uso de IA en educación

## 🔄 Créditos y Versión

### **Desarrollo digital:**
**Claude Sonnet 4 (Anthropic)** · Jul 2025 · **CC-BY-NC 4.0 | GNU GPLv3** - Diseño y programación del sistema interactivo, arquitectura de la interfaz de usuario, integración de APIs de inteligencia artificial, desarrollo de funcionalidades SCORM, y optimización para entornos educativos LMS.

### **Contenido académico:**
Basado en los contenidos desarrollados en el módulo 1, elaborados por **Francisco Sereño | Damaris Reinoso** (practicante).

### **Versión:**
**2.0** - Julio 2025

### **Funcionalidades:**
Glosario interactivo con 26 términos especializados, chatbot conversacional con IA generativa preconfigurada, seguimiento de progreso estudiantil, sistema de búsqueda avanzada, categorización temática, compatibilidad SCORM para LMS, diseño responsive multiplataforma, persistencia de datos entre sesiones, **sistema de felicitaciones al 100%**, y **Google Analytics integrado** para métricas detalladas de uso académico.

### **Tecnologías:**
**HTML5, CSS3, JavaScript** - Desarrollo web estándar con interfaces dinámicas, integración de APIs RESTful de OpenAI, manipulación del DOM para interactividad, almacenamiento local de datos, comunicación SCORM con LMS, diseño responsive con CSS Grid y Flexbox, y **Google Analytics** para métricas detalladas de uso académico.

*Este artefacto constituye una herramienta de apoyo académico.*

## 📄 Licencias

Este proyecto se distribuye bajo **doble licencia**:

### **Creative Commons BY-NC 4.0**
- ✅ **Compartir** - copiar y redistribuir el material
- ✅ **Adaptar** - remezclar, transformar y construir sobre el material
- ⚠️ **Atribución** - debe dar crédito apropiado
- ⚠️ **No Comercial** - no puede usar el material para propósitos comerciales

### **GNU General Public License v3.0**
- ✅ **Libertad de uso** - ejecutar el programa para cualquier propósito
- ✅ **Libertad de estudio** - estudiar cómo funciona y modificarlo
- ✅ **Libertad de distribución** - redistribuir copias
- ✅ **Libertad de mejora** - distribuir versiones modificadas
- ⚠️ **Copyleft** - obras derivadas deben usar la misma licencia

**Uso recomendado:** Para proyectos académicos y educativos no comerciales.

---

**© 2025 Francisco Sereño | Damaris Reinoso (practicante)- Universidad de Chile**  
*Herramienta académica desarrollada para la enseñanza de Inteligencia Artificial*
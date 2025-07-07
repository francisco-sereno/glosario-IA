/*******************************************************************************
** Archivo: APIWrapper.js
** Descripción: Wrapper SCORM 1.2 robusto para comunicación con el LMS.
** Versión: 2.5
*******************************************************************************/

var scormAPI = null;
var scormInitialized = false;
var scormAvailable = false;

function findAPI(win) {
    let findAPITries = 0;
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 10) {
            console.warn("SCORM Wrapper: Límite de búsqueda de API alcanzado.");
            return null;
        }
        win = win.parent;
    }
    return win.API;
}

function getAPI() {
    let api = findAPI(window);
    if ((api == null) && (window.opener != null)) {
        api = findAPI(window.opener);
    }
    return api;
}

function initializeSCORM() {
    if (scormInitialized) return true;
    scormAPI = getAPI();
    if (!scormAPI) {
        console.error("SCORM Error: API no encontrada. Funcionando en modo offline.");
        scormAvailable = false;
        return false;
    }
    try {
        const result = scormAPI.LMSInitialize("");
        if (result.toString() === "true") {
            scormInitialized = true;
            scormAvailable = true;
            console.log("SCORM: Conexión con LMS establecida.");
            return true;
        }
    } catch (e) {
        console.error("SCORM Error: Excepción en LMSInitialize.", e);
    }
    scormAvailable = false;
    return false;
}

function commitSCORM() {
    if (!scormAvailable || !scormAPI) return false;
    try {
        return scormAPI.LMSCommit("") === "true";
    } catch (e) {
        return false;
    }
}

function setSCORMValue(element, value) {
    if (!scormAvailable || !scormAPI) return false;
    let success = false;
    try {
        if (scormAPI.LMSSetValue(element, value) === "true") {
            success = true;
        }
    } catch (e) { /* Silently fail */ }
    if (success) {
        commitSCORM();
    }
    return success;
}

function getSCORMValue(element) {
    if (!scormAvailable || !scormAPI) return "";
    try {
        return scormAPI.LMSGetValue(element);
    } catch (e) {
        return "";
    }
}

function finishSCORM() {
    if (!scormAvailable || !scormInitialized) return false;
    try {
        setSCORMValue('cmi.core.exit', 'suspend');
        commitSCORM();
        scormAPI.LMSFinish("");
        scormInitialized = false;
        scormAvailable = false;
    } catch (e) { /* Silently fail */ }
}

function saveProgress(progressData) {
    setSCORMValue('cmi.core.lesson_location', progressData);
}

function loadProgress() {
    let progressData = getSCORMValue('cmi.core.lesson_location');
    if (!progressData) {
        progressData = localStorage.getItem('glosario_progress') || '';
    }
    return progressData;
}

function setScore(score) {
    setSCORMValue('cmi.core.score.raw', score.toString());
    setSCORMValue('cmi.core.score.min', '0');
    setSCORMValue('cmi.core.score.max', '100');
}

function setCompletionStatus(status) {
    const lessonStatus = status === 'completed' ? 'passed' : status;
    setSCORMValue('cmi.core.lesson_status', lessonStatus);
}

window.addEventListener('load', initializeSCORM);
window.addEventListener('beforeunload', finishSCORM);
window.addEventListener('unload', finishSCORM);

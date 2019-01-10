'use strict'

// Instanciando los objetos app y BrowserWindow
const { app, BrowserWindow } = require('electron');

// --- ↓↓ Propiedades del objeto ↓↓ --------------
// console.dir(app);

// -------------------------------------------------
// --- ↓↓ Eventos de App ↓↓ ------------------------
// -------------------------------------------------

// Imprimiendo mensaje en la consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo...');
});

// Ejecutando ordenes cuando la aplicación este lista
app.on('ready', () => {
    // creando una ventana basica
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Hola Mundo!',
        center: true,
        show: false
    });

    // ejecuta el "ready-to-show" UNA sola vez
    win.once('ready-to-show', () => {
        win.show();
    })

    // Evento de Mover
    win.on('move', () => {
        const position = win.getPosition();
        // console.log(`la posición es ${position}`);
    });

    // Detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () => {
        win = null; //Borrar memoria del objeto que visualiza la ventana

        // "Cierre" de la aplicación
        app.quit();
    });

    // Asigando una URL inicial a la ventana
    win.loadURL(`file://${__dirname}/renderer/index.html`); // dirname → Helper directorio actual
    // win.loadURL('http://devdocs.io/'); // Url Remota
})
const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 650,
        autoHideMenuBar: true,
        title: "Gush",
        frame: true,
        icon: __dirname + '/assets/icons/favicon.ico',
        backgroundColor: '#262626',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true,
            nodeIntegration: false,
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));/*
    // Register a shortcut listener for Ctrl + Shift + I
    globalShortcut.register('Control+Shift+I', () => {
        // When the user presses Ctrl + Shift + I, this function will get called
        // You can modify this function to do other things, but if you just want
        // to disable the shortcut, you can just return false
        return false;
    });
    require('v8-compile-cache');*/
});
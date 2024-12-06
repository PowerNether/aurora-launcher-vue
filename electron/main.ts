import path from 'node:path'
import { app, BrowserWindow } from 'electron'

import { DIRNAME, RENDERER_DIST, VITE_DEV_SERVER_URL, VITE_PUBLIC } from './config/path'

import StorageService from './services/StorageService'
import IPCService from './services/IPCService'

function init() {
	StorageService.checkDirectoriesAndCreateMissing()
	IPCService.registerIPCHandlers()

	const window: BrowserWindow = new BrowserWindow({
		icon: path.join(VITE_PUBLIC, 'electron-vite.svg'),
		frame: false,
		width: 1280,
		height: 720,
		webPreferences: {
			preload: path.join(DIRNAME, '/preload.mjs'),
		},
	})

	window.webContents.on('did-finish-load', () => {
		window.webContents.send('main-process-message', new Date().toLocaleString())
	})

	if (VITE_DEV_SERVER_URL) {
		window.loadURL(VITE_DEV_SERVER_URL)
	} else {
		window.loadFile(path.join(RENDERER_DIST, 'index.html'))
	}
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		init()
	}
})
app.on('ready', init)

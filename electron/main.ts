import { app, BrowserWindow } from 'electron'
import { createWindow } from './windows'
import { IPCManager } from './ipc'

IPCManager.init()

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

app.whenReady().then(createWindow)

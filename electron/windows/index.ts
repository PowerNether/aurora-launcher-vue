import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BrowserWindow } from 'electron'
import { VITE_DEV_SERVER_URL, VITE_PUBLIC, RENDERER_DIST } from '../config/paths'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let win: BrowserWindow | null = null

export function createWindow() {
	win = new BrowserWindow({
		icon: path.join(VITE_PUBLIC, 'electron-vite.svg'),
		width: 1280,
		height: 720,
		frame: false,
		webPreferences: {
			preload: path.join(__dirname, '/preload.mjs'),
		},
	})

	win.webContents.on('did-finish-load', () => {
		win?.webContents.send('main-process-message', new Date().toLocaleString())
	})

	if (VITE_DEV_SERVER_URL) {
		win.loadURL(VITE_DEV_SERVER_URL)
	} else {
		win.loadFile(path.join(RENDERER_DIST, 'index.html'))
	}

	return win
}

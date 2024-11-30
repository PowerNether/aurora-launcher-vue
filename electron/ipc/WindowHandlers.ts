import { BrowserWindow } from 'electron'

export class WindowHandlers {
	static collapseWindow() {
		const window = BrowserWindow.getFocusedWindow()
		if (window) window.minimize()
	}

	static closeWindow() {
		const window = BrowserWindow.getFocusedWindow()
		if (window) window.close()
	}
}

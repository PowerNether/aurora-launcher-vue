import { BrowserWindow } from 'electron'

class AppHandlers {
	public collapseWindow() {
		const window = BrowserWindow.getFocusedWindow()
		if (window) window.minimize()
	}
	public closeWindow() {
		const window = BrowserWindow.getFocusedWindow()
		if (window) window.close()
	}
}

export default new AppHandlers()

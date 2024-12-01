import { ipcMain } from 'electron'

import { WindowHandlers } from './WindowHandlers'
import { AuthHandlers } from './AuthHandlers'
import { ServersHandlers } from './ServersHandlers'

export class IPCManager {
	static init() {
		ipcMain.handle('app:close', WindowHandlers.closeWindow)
		ipcMain.handle('app:collapse', WindowHandlers.collapseWindow)
		ipcMain.handle('app:servers', (event) => ServersHandlers.getServers(event))

		ipcMain.handle('app:auth', (event, data) => AuthHandlers.auth(event, data))
	}
}

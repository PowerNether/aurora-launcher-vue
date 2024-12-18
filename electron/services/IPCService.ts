import { ipcMain } from 'electron'

import AppHandlers from '../handlers/AppHandlers'
import AuroraService from '../api/AuroraService'

class IPCService {
	public registerIPCHandlers() {
		ipcMain.handle('app:close', AppHandlers.closeWindow)
		ipcMain.handle('app:collapse', AppHandlers.collapseWindow)
		ipcMain.handle('api:auth', (_, data) => AuroraService.authorization(data))
		ipcMain.handle('api:servers', () => AuroraService.servers())
	}
}

export default new IPCService()

import { Platform } from '../config/constants'

class PlatformHelper {
	public isMac: boolean
	public isLinux: boolean
	public isUnix: boolean
	public isWindows: boolean

	constructor() {
		this.isMac = process.platform == Platform.MACOS
		this.isLinux = process.platform == Platform.LINUX
		this.isUnix = this.isMac || this.isLinux
		this.isWindows = process.platform == Platform.WINDOWS
	}
}

export default new PlatformHelper()

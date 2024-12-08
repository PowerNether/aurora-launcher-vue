import { homedir } from 'os'
import path from 'path'
import fs from 'fs'

import { app } from 'electron'

import PlatformHelper from '../utils/PlatformHelper'
import { config } from '../config/config'

class StorageService {
	public rootDir: string
	public assetsDir: string
	public clientsDir: string
	public librariesDir: string
	public javaDir: string

	constructor() {
		this.rootDir = this.platformDirectory
		this.assetsDir = path.resolve(this.rootDir, 'assets')
		this.clientsDir = path.resolve(this.rootDir, 'clients')
		this.librariesDir = path.resolve(this.rootDir, 'libraries')
		this.javaDir = path.resolve(this.rootDir, 'java')
	}

	private get platformDirectory() {
		if (PlatformHelper.isMac) {
			return path.resolve(app.getPath('userData'), '../', config.path)
		}
		return path.resolve(homedir(), '.' + config.path)
	}

	public checkDirectoriesAndCreateMissing() {
		;[this.rootDir, this.assetsDir, this.clientsDir, this.librariesDir, this.javaDir].forEach((directory) => {
			const isExists = fs.existsSync(directory)
			if (!isExists) fs.mkdirSync(directory)
		})
	}
}

export default new StorageService()

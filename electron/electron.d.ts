export {}

declare global {
	interface Window {
		ipcRenderer: {
			collapse: () => void
			close: () => void
		}
	}
}

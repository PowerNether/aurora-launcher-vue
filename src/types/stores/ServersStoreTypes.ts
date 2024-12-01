export type Server = {
	ip: string
	port: number
	profileUUID: string
	title: string
}

type ApiResponse<T> = {
	status: boolean
	data: T
}

export type ServersApiResponse = ApiResponse<{
	id: string
	result: Array<Server>
}>

export type ServersGetFunction = () => Promise<void>

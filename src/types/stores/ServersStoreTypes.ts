export type Server = {
	profileUUID: string
	title: string
	description?: string
	image?: string
	ip: string
	port: number
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

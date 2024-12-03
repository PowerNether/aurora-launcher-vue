export type User = {
	accessToken: string
	userUUID: string
	username: string
}

type ApiResponse<T> = {
	success: boolean
	data: T
}

export type UserApiResponse = ApiResponse<{
	id: string
	result: User
}>

export type UserAuthenticationFunction = (login: string) => Promise<boolean>

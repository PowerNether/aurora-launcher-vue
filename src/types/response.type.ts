type ResponseBase = {
	id: string
}
type ResponseSuccess<T> = ResponseBase & {
	result: T
	error: never
}
type ResponseError = ResponseBase & {
	result: never
	error: string
}

export type Response<T> = ResponseSuccess<T> | ResponseError

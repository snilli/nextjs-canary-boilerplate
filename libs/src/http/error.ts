import {HttpsRequestPayload} from './http-client'

export class HttpsClientException extends Error {
    constructor(
        message: string,
        public readonly req: HttpsRequestPayload,
    ) {
        super(message)
    }
}

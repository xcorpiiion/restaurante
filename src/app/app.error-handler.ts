import { Observable } from "rxjs/Observable"
import { Response } from '@angular/http'

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string
        console.log(errorMessage)
        if (error instanceof Response) {
            errorMessage = `Erro ${error.status} ao obter a url ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = "error"
        }
        return Observable.throw(errorMessage);
    }
}
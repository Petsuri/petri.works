import axios from "axios";
import { ApiResourceBase } from "./resources/ApiResourceBase";

export const logImportantMessage = async (log: (message: any) => void): Promise<void> => {
    await axios.get<string>('https://api.petri.works/v1/hello')
        .then(result => log(result.data))
        .catch(error => log(error));
}


export class PetriWorksClient {

    private _apiUrl: string;

    public constructor(apiUrl: string) {
        this._apiUrl = apiUrl;
    }

    public async send(resource: ApiResourceBase): Promise<string> {
        const result = await axios.get<string>(this._apiUrl + resource.route);
        return result.data;
    }
}
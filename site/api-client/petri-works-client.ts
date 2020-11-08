import axios from "axios";

export const logImportantMessage = async (log: (message: any) => void): Promise<void> => {
    await axios.get<string>('https://api.petri.works/v1/hello')
        .then(result => log(result.data))
        .catch(error => log(error));
}

import axios from "axios";

export const logImportantMessage = async (log: (message: any) => void): Promise<void> => {
    await axios.get<string>('http://localhost:4000/v1/hello')
        .then(result => log(result.data))
        .catch(error => log(error));
}

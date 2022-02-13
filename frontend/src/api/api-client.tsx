//TODO update when API is implemented
import axios, { Axios, AxiosResponse } from 'axios';

export class ApiClient<T extends {}> {
    private readonly url: string;
    private client: Axios;

    constructor(url: any) {
        this.url = url;
        this.client = axios.create({
            baseURL: `${url}/api/`
        });
    }

    public async getData(path: string): Promise<T[]> {
        try {
            const res: AxiosResponse<T[]> = await this.client.get(`${path}`);
            return res.data;
        } catch (e: any) {
            return [];
        }
    }

    public saveItem(item: T) {}
}

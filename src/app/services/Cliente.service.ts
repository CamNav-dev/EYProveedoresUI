import axios from 'axios';

export class ClienteService {
    private static readonly url = process.env.NEXT_PUBLIC_API_URL + '/Cliente';

    public static async getAll(): Promise<Cliente[]> {
        const response = await axios.get<Cliente[]>(this.url);
        return response.data;
    }

    public static async getById(id: number): Promise<Cliente> {
        const response = await axios.get<Cliente>(`${this.url}/${id}`);
        return response.data;
    }

    public static async create(Cliente: Cliente): Promise<Cliente> {
        const response = await axios.post<Cliente>(this.url, Cliente);
        return response.data;
    }

    public static async update(id: number, Cliente: Cliente): Promise<void> {
        await axios.put<Cliente>(`${this.url}/${id}`, Cliente);
    }

    public static async delete(id: number): Promise<void> {
        await axios.delete(`${this.url}/${id}`);
    }
}
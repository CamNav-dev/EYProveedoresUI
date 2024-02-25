import axios from 'axios';

export class ProveedorService {
    private static readonly url = process.env.NEXT_PUBLIC_API_URL + '/Proveedor';

    public static async getAll(): Promise<Proveedor[]> {
        const response = await axios.get<Proveedor[]>(this.url);
        return response.data;
    }

    public static async getById(id: number): Promise<Proveedor> {
        const response = await axios.get<Proveedor>(`${this.url}/${id}`);
        return response.data;
    }

    public static async create(Proveedor: Proveedor): Promise<Proveedor> {
        const response = await axios.post<Proveedor>(this.url, Proveedor);
        return response.data;
    }

    public static async update(id: number, Proveedor: Proveedor): Promise<void> {
        await axios.put<Proveedor>(`${this.url}/${id}`, Proveedor);
    }

    public static async delete(id: number): Promise<void> {
        await axios.delete(`${this.url}/${id}`);
    }
}
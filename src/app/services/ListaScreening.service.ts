import axios from 'axios';

export class ScreeningService {
    private static readonly url = process.env.NEXT_PUBLIC_API_URL + '/ListaScreening';

    public static async getAll(): Promise<ListaScreening[]> {
        const response = await axios.get<ListaScreening[]>(this.url);
        return response.data;
    }

    public static async getById(id: number): Promise<ListaScreening> {
        const response = await axios.get<ListaScreening>(`${this.url}/${id}`);
        return response.data;
    }

    public static async create(Screening: ListaScreening): Promise<ListaScreening> {
        const response = await axios.post<ListaScreening>(this.url, Screening);
        return response.data;
    }

    public static async update(id: number, Screening: ListaScreening): Promise<void> {
        await axios.put<ListaScreening>(`${this.url}/${id}`, Screening);
    }

    public static async delete(id: number): Promise<void> {
        await axios.delete(`${this.url}/${id}`);
    }
}
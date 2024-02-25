import axios from 'axios';

export class UsersService {
    private static readonly url = process.env.NEXT_PUBLIC_API_URL + '/Users';

    public static async getAll(): Promise<Users[]> {
        const response = await axios.get<Users[]>(this.url);
        return response.data;
    }

    public static async getById(id: number): Promise<Users> {
        const response = await axios.get<Users>(`${this.url}/${id}`);
        return response.data;
    }

    public static async create(Users: Users): Promise<Users> {
        const response = await axios.post<Users>(this.url, Users);
        return response.data;
    }

    public static async update(id: number, Users: Users): Promise<void> {
        await axios.put<Users>(`${this.url}/${id}`, Users);
    }

    public static async delete(id: number): Promise<void> {
        await axios.delete(`${this.url}/${id}`);
    }
}
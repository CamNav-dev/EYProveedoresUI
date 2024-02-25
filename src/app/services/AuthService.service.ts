// services/authService.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface SignUpData {
    Username: string;
    Password: string;
}

interface LoginData {
    Username: string;
    Password: string;
}

export const signUp = async (data: SignUpData) => {
  const response = await axios.post(`${API_URL}/signup`, data);
  return response.data;
};

export const login = async (data: LoginData) => {
  const response = await axios.post(`${API_URL}/login`, data);
  if (response.data.accessToken) {
    // Almacenar el token de acceso, por ejemplo, en localStorage
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

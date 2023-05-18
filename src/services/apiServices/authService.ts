import { Meme } from "@/models/meme";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }
}
export const authService = AuthService.getInstance();

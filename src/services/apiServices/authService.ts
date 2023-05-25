import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }
  async signUp(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => user.user)
      .catch((err) => {
        throw new Error(err);
      });
  }

  async signIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password)
      .then((user) => user.user)
      .catch((err) => {
        throw new Error(err);
      });
  }
}
export const authService = AuthService.getInstance();

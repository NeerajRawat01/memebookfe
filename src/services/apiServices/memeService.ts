import { Meme } from "@/models/meme";
import axios from "axios";

class MemeService {
  static getInstance(): MemeService {
    return new MemeService();
  }

  async fetchMemes(): Promise<Meme[]> {
    return axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => res.data);
  }
}

export const memeService = MemeService.getInstance();

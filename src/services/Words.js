import { HttpClient } from "./HttpClient";

class WordService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getRandomWord() {
    return this.get("words");
  }
}

export const wordService = new WordService();

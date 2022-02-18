import { wordService } from "./services/Words";

export const getRandomWords = async (setState) => {
  try {
    const { data } = await wordService.getRandomWord();
    const randomIdx = Math.floor(Math.random() * (data.length - 1));
    setState(data[randomIdx]);
  } catch (err) {
    return err.message;
  }
};

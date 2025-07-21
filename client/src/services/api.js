import axios from "axios";

export const Translate = async (params) => {
  return await axios.post("https://language-translator-api.vercel.app/translate", params);
  // return await axios.post("/api/translate", params);
};

import axios from "axios";

export const Translate = async (params) => {
  return await axios.post("/api/translate", params);
};

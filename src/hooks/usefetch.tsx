import { HandleSubmit } from "@/components/public/auth/interface";
import { BASE_URL } from "@/constants";
import axios, { AxiosResponse } from "axios";

export const handleSubmit: HandleSubmit["handleSubmit"] = async (
  formData,
  endpoint
) => {
  try {
    console.log("button submitted");
    const response = await axios.post<AxiosResponse>(
      `${BASE_URL}/${endpoint}/`,
      formData
    );
    console.log("response", response);

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("Axios error:", err.response?.data);
    } else {
      console.log(err);
    }
  }
};

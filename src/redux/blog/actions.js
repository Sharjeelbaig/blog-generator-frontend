import { GENERATE_RESPONSE } from "../constants";
import axios from "axios";
import qs from "qs";

export const generateResponse = (prompt) => {
  return async (dispatch) => {
    const data = qs.stringify({
      tag: prompt
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://blogify.azurewebsites.net/generate",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      const result = response.data;
      console.log(result);
      dispatch({
        type: GENERATE_RESPONSE,
        data: result
      });
    } catch (error) {
      console.error("An error has occurred", error);
      // handle error appropriately
    }
  };
};

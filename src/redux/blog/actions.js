import { GENERATE_RESPONSE } from "../constants";
import axios from "axios";
import qs from "qs";

export const generateResponse = (prompt) => {
  return async (dispatch) => {
    const data = qs.stringify({
      tag: prompt
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://blogify.azurewebsites.net/generate',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'ARRAffinity=c015407f2340ab83319171108305fa1072c8452284bc5ef903dfd906b4fd7902; ARRAffinitySameSite=c015407f2340ab83319171108305fa1072c8452284bc5ef903dfd906b4fd7902'
      },
      data : data
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

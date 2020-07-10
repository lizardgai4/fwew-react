import axios from "axios";

export default async function GetData(endpoint) {
  let response;
  try {
    response = await axios.get(endpoint);
  } catch (e) {
    return [];
  }
  return response.data;
}

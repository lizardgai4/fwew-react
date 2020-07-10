import axios from "axios";

async function GetData(endpoint) {
  let response;
  try {
    response = await axios.get(endpoint);
  } catch (e) {
    return [];
  }
  return response.data;
}

export default GetData;

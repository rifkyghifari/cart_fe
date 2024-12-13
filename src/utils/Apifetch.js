import axios from "axios";

const Apifetch = async (method, endpoint, data = null) => {
  const baseUrl = "http://localhost:3000/api";
  const config = {
    method,
    url: `${baseUrl}${endpoint}`,
    data, //untuk post dan put
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default Apifetch;

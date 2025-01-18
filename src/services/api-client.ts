import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04d616e5462943cdb6888fd8cef8b287",
  },
});

import axios from "axios";

class imageApi{
  constructor(){
    this.api = axios.create({
      baseURL: "https://iron-todo-lab.herokuapp.com/user",
    })
    this.api.interceptors.request.use((config) => {
      const token = window.sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  handleUpload = async (id, theFile) => {
    try {
      console.log('entrei no try')
      const { data } = await this.api.post(`/${id}/uploadImage`, theFile)
      return data
    } catch (error) {
      throw error
    }
  }
};

export default new imageApi();
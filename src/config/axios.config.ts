import axios from "axios"

axios.defaults.baseURL = "https://quill-server-fksr.onrender.com/api"
axios.defaults.withCredentials = true

export default axios

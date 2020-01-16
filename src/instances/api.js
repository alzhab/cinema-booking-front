import Axios from "axios";

const apiInstance = Axios.create({
  baseURL: 'https://cinema-booking-71a36.firebaseio.com/'
})

export default apiInstance
import axiosInstance from "@/utils/request";

export const loginServe = (payload) => {
   return axiosInstance.get('/login', {
      params: payload
   })
}
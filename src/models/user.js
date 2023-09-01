import { removeItem } from "@/utils/storage";

export default {
  namespace: 'user',
  state: {
    theme: 'user'
  },
  effects:{
      *logout(payload,{put,call}){
        removeItem("Token");
      }
  },
  reducers: {
      updateState(state, action) {
          return { ...state, ...action.payload };
      },
  },
  subscriptions:{
    setup({history,dispatch}){

    }
  }
}  
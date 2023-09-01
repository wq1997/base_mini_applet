export default {
    namespace: 'global',
    state: {
      theme: 'default'
    },
    effects:{
        *changeTheme({payload},{put,call}){
           yield put({
             type: 'updateState',
             payload
           })
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
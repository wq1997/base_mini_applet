import { loginServe } from "@/services"
import { Button } from "@taroify/core"
import {Page} from "@/components";

const Test = (props) =>{
  const { dispatch } = props;
  return (
    <Page {...props}>
       <Button 
          color="primary" 
          size="large"
          onClick={()=>{
            dispatch({
              type: 'global/changeTheme',
              payload:{
                theme: "dark"
              }
            })
          }}
        >
          切换深色主题
      </Button>
      <Button 
          color="primary" 
          size="large"
          onClick={()=>{
            dispatch({
              type: 'global/changeTheme',
              payload:{
                theme: "default"
              }
            })
          }}
        >
          切换浅色主题
      </Button>
      <Button 
          color="primary" 
          size="large"
          onClick={async()=>{
            const res = await loginServe({name: 'wangqing', password: '123456'});
            console.log("res", res);
          }}
        >
          请求调试
      </Button>
    </Page>
  )
}

export default Test;
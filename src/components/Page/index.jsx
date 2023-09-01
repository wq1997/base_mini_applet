import { View } from '@tarojs/components';
import { ConfigProvider as TaroifyConfigProvider } from "@taroify/core";

/**
 * 
 * @param {*} props 
 * token require                         token
 * page style not require                style
 */
const Page = (props) =>{
  const { token = {}, style={} } = props;
  return (
    <TaroifyConfigProvider
      theme={{
       ...token
      }}
    >
      <View
        style={{
          width: '100%',
          minHeight: '100vh',
          color: token.color,
          backgroundColor: token.backgroundColor,
          ...style
        }}
      >
        {props?.children}
      </View>
    </TaroifyConfigProvider>
  )
}

export default Page;
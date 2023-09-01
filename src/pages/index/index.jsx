import { View, Text } from '@tarojs/components'
import { Button } from "@taroify/core"
import './index.scss'

export default function Index() {

  return (
    <View className='index'>
      <Button color="primary" size="large">大号按钮</Button>
      <Text>Hello world!</Text>
    </View>
  )
}

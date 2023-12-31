import { View } from "@tarojs/components";
import {connect} from "react-redux";
import themeConstants from './theme.constants';
import React from "react";

const ThemeProvider = (props) =>{
  const { global } = props;
  const theme = global.theme; 
  return (
    <View>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    token: themeConstants[theme],
                    ...window.store
                })
            })
        }
    </View>
  )
}

export default connect(({global})=>({global}))(ThemeProvider);
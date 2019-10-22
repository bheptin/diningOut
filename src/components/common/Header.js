import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const date = new Date();
    const dateFormat = date.toDateString();
    return (
           <View style={viewStyle}>
             <Text style={textStyle}>{props.headerText}{props.userName}</Text>
             <Text>{dateFormat}</Text>
           </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 15,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },

  textStyle: {
    fontSize: 20
  }
};

export { Header };

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux'

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
}
    render() {
      console.log("child", this.props.value);
        return (
            <View>
                <Text style = {styles.text} >{this.props.value}</Text>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});
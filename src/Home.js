import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
class Home extends Component{
  render() {
    return (
      <View styled={{
        flex :1,
        backgroundColor :'black',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text styled={{fontWeight:'bold', fontSize:22,color :'white'}}>
          {this.props.counter.count}
        </Text>
      </View>
    )
    
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});
export default connect(mapStateToProps, null)(Home);
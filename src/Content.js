import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ButtonComp from './components/Button';
class Content extends Component{
  render() {
    const {navigate} = this.props.navigation;
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
        <View style={styles.view}>
            <ButtonComp style={styles.button} title ='Profile' onPress={() => navigate('Profile')}></ButtonComp>
            <ButtonComp style={styles.button} title ='Setting' onPress={() => navigate('Setting')}></ButtonComp>
            <ButtonComp style={styles.button} title ='Logout' onPress={() => navigate('Logout')}></ButtonComp>
        </View>
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
  view:{
    display : 'flex',
    flexDirection :'row',
    marginTop:0,
    alignItems:'center',
  
  },
  button:{
  width: 80,
  height : 40,
  backgroundColor: 'blue',
  
  },
  })
const mapStateToProps = state => ({
  counter: state.counter
});
export default connect(mapStateToProps, null)(Content);
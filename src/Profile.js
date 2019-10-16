import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ButtonComp from './components/Button';
class Profile extends Component{
  render() {
    const {navigation} = this.props;
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
          <ButtonComp style={styles.button} title ='ProfileContent' onPress={() => navigation.navigate('ProfileContent')}></ButtonComp>
          <ButtonComp style={styles.button} title ='ProfileUser' onPress={() => navigation.navigate('ProfileUser')}></ButtonComp>
        </View>
        <Text>Profile</Text>
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
  width: 100,
  height : 40,
  backgroundColor: 'blue',

},
});

const mapStateToProps = state => ({
  counter: state.counter
});
export default connect(mapStateToProps, null)(Profile);
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ButtonComp from './components/Button';
class Home extends Component{
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
            <ButtonComp style={styles.button} title ='Home1' onPress={() => navigation.navigate('Home1')}></ButtonComp>
            <ButtonComp style={styles.button} title ='Home2' onPress={() => navigation.navigate('Home2')}></ButtonComp>
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
export default connect(mapStateToProps, null)(Home);
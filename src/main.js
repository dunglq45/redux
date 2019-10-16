import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Child from './components/child';
import ButtonComp from './components/Button';
import {connect} from 'react-redux';
import * as actions from './actions';
class Main extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center'
      }}
      >
        <View style={{
          flex: 1,
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Child value = {this.props.counter.count}/>
        </View>
        <View style = {{flex:1}}>
          <ButtonComp
            title="Increase"
            textColor="#fff"
            bgColor="#397af8"
            onPress={() =>{this.handleIncrease()}}/>
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={() =>{this.handleDecrease()}}/>
        </View>
        <View style={styles.view}>
          <ButtonComp style={styles.button} title ='opress1' onPress={() => navigation.navigate('Main1')}></ButtonComp>
          <ButtonComp style={styles.button} title ='opress2' onPress={() => navigation.navigate('Main2')}></ButtonComp>
        </View>
          
      </View>
    )
  }
  }
const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, actions)(Main);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
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
    
});
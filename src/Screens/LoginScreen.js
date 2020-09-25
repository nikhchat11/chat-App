// import React, { Component } from 'react';
// import { View, Text ,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

// export default class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         name:''
//     };
//   }

//   continue = () => {
//     this.props.navigation.navigate('Chat',{name:this.state.name})
//   }

//   render() {
//     return (
//       <View >
//         <View style={styles.headingView} >
//         <Text style={styles.heading} > LoginScreen </Text>

//         </View>
//         <TextInput placeholder='Enter Username' onChangeText={name => this.setState({name})} value={this.state.name}/>

//         <TouchableOpacity style={styles.button} onPress={this.continue}>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     headingView:{
//         // backgroundColor:'',
//         justifyContent:'center',
//         alignItems:'center'
//     },
    
//     heading:{
//          color:'blue',
//          fontWeight:'bold',
//          fontSize:25
//     },
//     button:{
//         backgroundColor:'blue',
//         height:50,
//         width:70,
//     }
// })

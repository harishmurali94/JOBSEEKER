import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
      // flex:1,
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginBottom:23
  } ,
  borderShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    flex:1,
    height:2
  },
  text:{
      color:'#0F0A40',
      fontSize:19,
      fontWeight:'bold',
      opacity:0.3,
      marginBottom:13
  } ,
  active:{
      opacity:1
  },
  activeStrip:{
      backgroundColor:'#FFC400',
      width:50,
      height:4,
      borderTopRightRadius:5,
      borderTopLeftRadius:5
  },
  tabBtContent:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  secondary:{
      color:'#C8D1D3',
      fontSize:15,
      fontWeight:'bold',
      marginBottom:4,
  },
  secondaryMargin:{
    marginRight:23
  },
  secondaryActive:{
    color:"#0f0a40"
  },
  secondaryActiveStrip:{
      height:1,
      backgroundColor:'#ffc400',
      width:28,
      alignSelf:'center'
  }
})
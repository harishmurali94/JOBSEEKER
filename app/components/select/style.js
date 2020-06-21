import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
      //  flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      // marginBottom:40,
       
      // paddingBottom:200
  } ,
  item:{
      minWidth:72,
      height:53,
      alignSelf:'flex-start',
      borderWidth:1,
      borderColor:'#00000029',
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:11,
      marginLeft:15,
      marginTop:15
  },
  selected:{
      backgroundColor:'#69E4A6',
    //   fontWeight:'bold'
  }
})
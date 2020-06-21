import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor:'white',
        // height:100
        
         flex:1
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
      paddingHorizontal:23,
      marginTop:30
      // position:'relative',

    },
    tabContent:{
       margin:20
    },
    container:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:23
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
      backgroundColor:'#69E4A6'
  }
  });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground, Image } from 'react-native';
import bgImage from "./assets/background.jpg"
import img from "./assets/img.png"


export default function App() {
  return (
    
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.container}>
        <View style={styles.main}>
          
          <View style={styles.hb}>
            <Text style={styles.title}>Happy<br/>Birthday</Text>
          </View>
          <View style={styles.bottom}>
            <Image
              style={styles.img}
              source={img}/>
            <View style={styles.message}>

              <Text style={styles.dear}>To: Kamario</Text>
              <Text style={styles.message}>
                A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be 
                fulfilled on your birthday and always. Happy birthday!
              </Text>
              <View style={styles.from}>
                <Text style={styles.end}>from: Hammy</Text>
              </View>
              
            </View>
            
          </View>
          
          
        </View>
      </ImageBackground>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  main:{
    backgroundColor:'#fcf9e6',
    height:'95vh',
    width:'80vw',
    borderTopLeftRadius:"50%",
    borderTopRightRadius:"50%",
    paddingTop:"15%",
    // paddingLeft:"10px"
  },
  img:{
    width:"90%",
    height:"60vw",

   

  },
  bottom:{
    padding:'10%',
   
  },
  hb:{
    textAlign:'center',
   
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom:'20px',
    color:'#bd8334'
  },
  dear: {
    fontSize: 15,
    fontWeight: "bold",
    // paddingBottom:'5px',
    // paddingTop:'5px'
  },
  end: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom:'15px',
    paddingTop:'5%',
    
  },
  from:{
    textAlign:'right'
  },
  message:{
    letterSpacing:'.8px',
    paddingTop: '10%'
  }
});

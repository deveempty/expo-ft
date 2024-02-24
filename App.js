import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const background = require("./assets/images/background-image.png")

// Components
import ImageView from './src/components/ImageView/ImagenView';
import Button from './src/components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageView img={background}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme={"primary"} label={"Upload picture"}/>
        <Button label={"Use this picture"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer : {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

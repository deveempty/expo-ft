import { StyleSheet, Image } from "react-native";

export default function ImageView({img}){
    return (
        <Image source={img} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
      }
})
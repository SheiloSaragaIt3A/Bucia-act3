import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';
//Flashlight
const Flashlight = ({ onBackPress }) => {
  const [isOn, setIsOn] = useState(true); // State to track flashlight status

  const toggleFlashlight = () => {
    setIsOn(!isOn); // Toggle the flashlight status
  };
  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button title="FLASHLIGHT" disabled={main} onPress={toflight} />
        <Button title="COUNTER" disabled={main} onPress={tocounter} />
      </View>
      <View style={styles.body}>
        {flight && <Flight />}

        {counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={tomain} color="Red" />}
      </View>
    </View>
  );
};

const Flight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
    } else {
      setText('ON');
    }
  };

  return (
    <View>
      {image &&  <Image
            source={require("./assets/src/flash-off.jpg")}
            style={{ width: 200, height: 300, resizeMode: "stretch" , marginVertical: 20}}
          />
          }
        {!image &&  <Image
            source={require("./assets/src/flash-on.jpg")}
            style={{ width: 200, height: 300, resizeMode: "stretch" ,  marginVertical: 20}}
          />
          }
     <Button title= {text} onPress={toImage} color="green" />
    </View>
  );
};
const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1" color="green"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1" color="green"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 100,
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  btnmain: {
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20
  },
});
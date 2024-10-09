import { Text, StyleSheet, View, Image, TextInput, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState} from 'react';
import axios from 'axios';

const url = 'https://6458c7608badff578efa8dec.mockapi.io/asd/APIExample';

const handleAddJob = async (valueInput, navigation) => {
  try {
    const response = await axios.post(url, {
      NameJob: valueInput 
    });
    console.log("Job added successfully:", response.data);  
    navigation.navigate("HomeScreen");
  } catch (error) {
    console.log("Error adding job:", error);
  }
}

function AddJob({ navigation }) {
  const [valueInput, setValueInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View style={styles.infor}>
          <Image style={{ height: 50, width: 50, borderRadius: '50%' }} source={require("../assets/shiba.jpg")} />
          <View>
            <Text>Hi Huy</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
      </View>

      <View style={styles.formInput}>
        <FontAwesome5 style={{ position: "absolute", left: 23 }} name="newspaper" size={24} color="black" />
        <TextInput 
          style={styles.textInput} 
          placeholder="Input your job" 
          value={valueInput} 
          onChangeText={text => setValueInput(text)} 
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Pressable 
          style={styles.btnFinish} 
          onPress={() => handleAddJob(valueInput, navigation)} 
        >
          <Text style={{ color: 'white' }}>Finish</Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </Pressable>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image style={{ height: 300, width: 300 }} source={require("../assets/notebook.jpg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textInput: {
    paddingLeft: 40,
    height: 35,
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  },
  formInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    alignItems: 'center'
  },
  btnFinish: {
    width: "40%",
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#00BDD6"
  }
})

export default AddJob;

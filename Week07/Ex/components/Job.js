import React from 'react';
import { Text,StyleSheet, View, Pressable,Modal, TextInput} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState} from 'react';
import axios from 'axios';
const Job = ({ data }) => {
const handleDelete = (id)=>{
   axios.delete(`https://6458c7608badff578efa8dec.mockapi.io/asd/APIExample/${id}`)
      .then(response => {
        console.log("Job deleted successfully");
      })
      .catch(error => {
        console.error("Error deleting job:", error);
       });
  };
  const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.jobInfo}>
                <Fontisto name="checkbox-active" size={24} color="black" />
                <Text style={styles.jobText}>{data.NameJob}</Text>
                 <PopupEdit 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          jobId={data.id}
          initialName={data.NameJob}
        />
            </View>
            <View style={{flexDirection:'row',gap:10}}>
            <FontAwesome onPress={()=>setModalVisible(true)} style={styles.button} name="pencil" size={24} color="black" />
            <FontAwesome onPress={()=>handleDelete(data.id)} style={styles.button} name="trash-o" size={24} color="black" />
            </View> 
        </View>
    );
};

const PopupEdit = ({ modalVisible, setModalVisible, jobId, initialName }) => {
  const [valueInput, setValueInput] = useState(initialName); 

  const handleEdit = () => {
    axios.put(`https://6458c7608badff578efa8dec.mockapi.io/asd/APIExample/${jobId}`, {
      NameJob: valueInput
    })
    .then(() => {
      setModalVisible(false); 
    })
    .catch(error => {
      console.error("Error updating job:", error);
    });
  };

  return (
    <View style={PopupStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={PopupStyles.centeredView}>
          <View style={PopupStyles.modalView}>
            <Text style={PopupStyles.modalText}>Edit Popup</Text>
            <TextInput 
              value={valueInput} 
              onChangeText={setValueInput} 
              style={PopupStyles.editField} 
              placeholder="Edit your job..." 
            />
            <View style={{flexDirection:'row',gap:20,alignItems:'center'}}>
            <Pressable
              style={[PopupStyles.button, PopupStyles.buttonClose]}
              onPress={handleEdit} 
            >
              <Text style={PopupStyles.textStyle}>Submit</Text>
            </Pressable>
            <Pressable style={{justifyContent:'center',alignItems:'center',height:30,width:30,backgroundColor:'red',borderRadius:5}} onPress={()=>setModalVisible(false)}>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>x</Text> 
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#DEE1E62B',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5, 
        shadowRadius: 4,
        elevation: 3, 
    },
    jobInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    jobText: {
        marginLeft: 10, 
        fontSize: 16,  
    },
    button:{
      cursor:'pointer'
    }
});

const PopupStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop:10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  editField:{
width:'100%',
height:30,
backgroundColor:'white',
textAlign:'center'
  }
});
export default Job;

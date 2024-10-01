import React from "react";
import { useState } from "react";
import { Text, View, Image, Pressable, Button, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
const HomePage = ({navigation,route}) => {
  const pathImage = route.params?.pathImage || require('./assets/mobilePhone/vs_blue.png');
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.banner} source={pathImage} />
            </View>
            <View style={styles.session2}>
                <View><Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text></View>
                <View style={[styles.dlexRow, { gap: 20 }, styles.paddingVer5]}>
                    <View style={styles.dlexRow}>
                        <TouchableOpacity><Image source={require('./assets/mobilePhone/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity><Image source={require('./assets/mobilePhone/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity><Image source={require('./assets/mobilePhone/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity><Image source={require('./assets/mobilePhone/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity><Image source={require('./assets/mobilePhone/star.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
                <View style={[styles.dlexRow, { gap: 60, alignItems: 'center' }, styles.paddingVer5]}>
                    <Text style={[styles.price, styles.bold]}>1.790.000 đ</Text>
                    <Text style={[styles.textStrikethrough, styles.bold]}>1.790.000 đ</Text>
                </View>
                <View style={[styles.dlexRow, { gap: 20, alignItems: 'center' }, styles.paddingVer10]}>
                    <Text style={[styles.bold, { color: 'red', paddingBottom: 10 }]}>Ở đâu bán rẻ hơn hoàn tiền</Text>
                    <AntDesign name="questioncircleo" size={20} color="black" />
                </View>
                <TouchableOpacity style={[styles.pickColor, styles.dlexRow, { paddingLeft: 80, justifyContent: 'space-between' }]} onPress={() => navigation.navigate('PickColor', { name: 'pick color' })} >
                    <Text style={styles.bold}>4 MÀU-CHỌN MÀU</Text>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.session3}>
                <TouchableOpacity style={styles.buttonBuy}>
                    <Button title="CHỌN MUA" color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PickColorPage = ({ navigation }) => {
    const [color, setColor] = useState("Xanh"); 
    const [supplier, setSupplier] = useState("Tiki Trading"); 
    const [price, setPrice] = useState(1790000); 

 const images = {
        blue: require('./assets/mobilePhone/vs_blue.png'),
        red: require('./assets/mobilePhone/vs_red.png'),
        black: require('./assets/mobilePhone/vs_black.png'),
        silver: require('./assets/mobilePhone/vs_silver.png')
    };

    const [pathImage, setPathImage] = useState(images.blue);

const pickSliver = () => {
        setPathImage(images.silver);
        setColor("Bạc");
    };

    const pickRed = () => {
        setPathImage(images.red);
        setColor("Đỏ");
    };

    const pickBlack = () => {
        setPathImage(images.black);
        setColor("Đen");
    };

    const pickBlue = () => {
        setPathImage(images.blue);
        setColor("Xanh");
    };

    const handleComplete = () => {
        navigation.navigate('Home', { pathImage: pathImage });
    };

    return (
        <View style={styles1.container}>
            <View style={styles1.session1}>
                <View style={styles1.detailSession}>
                    <Image style={styles1.productImage} source={pathImage} /> 
                    <View style={{ gap: 10 }}>
                        <Text>Điện Thoại Vsmart Joy 3 Hàng Chính Hãng</Text>
                        <Text>Màu: {color}</Text>
                        <Text>Cung cấp bởi: {supplier}</Text>
                        <Text>Giá: {price.toLocaleString()} đ</Text>
                    </View>
                </View>

                <Text>Chọn 1 màu bên dưới:</Text>
                <View style={styles1.colorOptions}>
                    <TouchableOpacity
                        style={[styles1.componentPickColor, { backgroundColor: '#F1F1F1' }]}
                        onPress={() => pickSliver()} 
                    />
                    <TouchableOpacity
                        style={[styles1.componentPickColor, { backgroundColor: 'red' }]}
                        onPress={() => pickRed()} 
                    />
                    <TouchableOpacity
                        style={[styles1.componentPickColor, { backgroundColor: 'black' }]}
                        onPress={() => pickBlack()} 
                    />
                    <TouchableOpacity
                        style={[styles1.componentPickColor, { backgroundColor: '#234896' }]}
                        onPress={() => pickBlue()} 
                    />
                </View>

                <TouchableOpacity style={styles1.buttonComplete}>
                    <Button
                        title="Xong"
                        color="#1952E294"
                        onPress={handleComplete}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const Stack = createNativeStackNavigator();
const Screen1 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Home" component={HomePage} />
                <Stack.Screen options={{headerShown:false}} name="PickColor" component={PickColorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    banner: {
        height: 301,
        width: 320,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        gap: 10,
        backgroundColor: 'white',
    },
    pickColor: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonBuy: {
        color: "red",
    },
    dlexRow: { flexDirection: 'row' },
    bold: {
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
    },
    textStrikethrough: {
        textDecorationLine: 'line-through',
        color: 'gray'
    },
    session3: {
        paddingVertical: 20
    },
    paddingVer5: {
        paddingVertical: 5
    }
})

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: "#C4C4C4",
        flex: 1,
    },
    session1: {
        flex: 1,
    },
    colorOptions: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems:'center',
        gap: 10
    },
    componentPickColor: {
        padding: 15,
        borderRadius: 5,
        width:85,
        height:85,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonComplete:{
      borderRadius:5,
      marginTop:10,
      marginHorizontal:10
    },
    detailSession:{
      flexDirection:'row',
      gap:15,
      padding:5,
      backgroundColor:'white'
    },
    productImage:{
      width:112,
      height:140
    }
});
export default Screen1;
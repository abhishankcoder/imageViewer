import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert, TextInput, ActivityIndicator, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import Button from '../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';

const Addimg = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    // const [newarr,setNewarr] = useState([]);
    const Picker = () => {
        const Imgpicker = [];
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            // cropping: true,
            multiple: true,
            maxFiles: 10,

        }).then(response => {
            console.log(response);
            console.log(images.mime)
            response.map(images => {
                Imgpicker.push({
                    filename: images.mime,
                    path: images.path,
                })
            })
            console.log("data", Imgpicker)
            setImages(Imgpicker)
            console.log("photo", images)

        }).catch(e => console.log('Error', e));

    };
    // renderGalleryImage = ({ item }) => {
    //     const setImage = () => setSelectedItem(item.path);
    //     return (
    //         // <View>
    //         //     <Image source={item.path} />;;

    //         //     </View>
    //         <View>{selectedItem && <Image source={{ uri: selectedItem }} />}</View>
    //     );
    // };

    const cool = () => {
        alert(images.path);
        // return (
        //     <View>
        //         <Image style={{ width: 400, height: 400, borderRadius: 20, margin: 10, marginTop: 40 }}
        //             source={{ path }}
        //         />
        //     </View>
        // )
    }


    console.log("aayi photo", selectedItem)

    const onDelete =()=>{
        let arr = selectedItem
        console.log("kya hai",a)


    }
    const EmpList = () => {
        const _renderItem = ({ item, index }) => {
            return (
                <View >

                    <TouchableOpacity onPress={() => setSelectedItem(item.path)}>

                        <Image style={{ width: 100, height: 100, borderRadius: 20, margin: 10, marginTop: 40 }}
                            source={{ uri: item.path }}
                        />
                        {/* </TouchableWithoutFeedBack> */}

                    </TouchableOpacity>
                    
{/* 
                    // <Image style={{ width: 200, height: 200, borderRadius: 20, margin: 10, marginTop: 40 }}
                    //         source={ selectedItem }
                    //     /> */}
                </View>
            );
        };
        return (
            <FlatList
                data={images}

                keyExtractor={(item, index) => index}
                renderItem={_renderItem}
                horizontal={true}
            />
        );
    };

    return (
        <ScrollView>
        <View>

            <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>
                <Button
                    btnText={"Add image"}
                    onPress={Picker}
                />
                {EmpList()}

                <View>

                </View>
              
<Image style={{ width: 300, height: 300, borderRadius: 30, margin: 10,backgroundColor:'red' }}
                    source={{uri:selectedItem}}
                />

<View style={{borderRadius:12,borderColor:'black',borderWidth:1,alignItems:'center',width:'30%',top:-300,left:180,backgroundColor:'white'}}>
                <Text style={{fontSize:16,color:'black',fontWeight:'600',textAlign:'center'}} >Delete</Text>

</View>

            </View>
        </View>
        </ScrollView>
    )
}

export default Addimg;
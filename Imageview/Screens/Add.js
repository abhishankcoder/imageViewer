import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert, TextInput, ActivityIndicator, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import Button from '../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';

const Add = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [selectedItem, setSelectedItem] = useState([{
        isClicked: false
    }]);
    const [photo, setPhoto] = useState(null);

    // const handleChoosePhoto = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //                 height: 400,
    //                 // cropping: true,
    //                 multiple: true,
    //                 maxFiles: 10,
    //     })
    //       .then((images) => {
    //         setPhoto(null);
    //         setImages(
    //           images.map((i) => {
    //             console.log('recieved image', i);
    //             return {
    //               uri: i.path,
    //               // width: i.width,
    //               // height: i.height,
    //             //   width: 185,
    //             //   height: 128,
    //               mime: i.mime,
    //             };
    //           }),
    //         );
    //       })
    //       .catch((e) => alert(e));
    //   };
    // const [newarr,setNewarr] = useState([]);
    const Picker = () => {
        const Imgpicker = [];
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            // cropping: true,
            multiple: true,
            maxFiles: 10,
        })
            .then(response => {
                console.log(response);
                console.log(images.mime)
                response.map(images => {
                    Imgpicker.push({
                        filename: images.mime,
                        path: images.path,
                    })
                })
                console.log("data", Imgpicker)
                // images.push(Imgpicker)
                setImages(Imgpicker)

                console.log("photo", images)

            })



    };

    const onDelete = (path) => {
        let arr = images.filter(item => item.path != path);
        setImages(arr)
        console.log("delete hui", arr)


        setImages(arr)
        //    console.log("data",data)


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
                     <Image style={{ width: 200, height: 200, borderRadius: 20, margin: 10, marginTop: 40 }}
                             source={ selectedItem }
                         />  */}
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
                    <Image style={{ width: 300, height: 300, borderRadius: 30, margin: 10, backgroundColor: 'red' }}
                        source={{ uri: selectedItem }}
                    />  
                    <TouchableOpacity onPress={onDelete}>
                        <View style={{ borderRadius: 12, borderColor: 'black', borderWidth: 1, alignItems: 'center', width: '30%', top: -300, left: 180, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', textAlign: 'center' }} >Delete</Text>

                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

export default Add;
import { View, Button, Pressable, TextInput, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Feather';

function ProductSlider() {

    return (
        <View className="bg-white shadow-lg overflow-auto shadow-black h-32 w-full flex-row space-x-5  pt-4 pl-4 ">
            <View className="mt-auto mb-auto pl-2 text-center pt-auto pb-auto">

                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/879/879859.png' }} className="h-12 w-12 " />
                <Text className="mx-auto mt-5 font-bold">Offers</Text>

            </View>
            <View className="h-56 pl-2 text-center">
                <Image source={require('../assets/man.png')} className="h-32 w-20 " />
                <Text className="mx-auto">Men</Text>
                

            </View>
            <View className="mt-auto mb-auto  text-center">

                <Image source={require('../assets/woman.png')} className="h-32 w-20  " />
            </View>

            <View className="mt-auto mb-auto pl-2 text-center">

                <Image source={require('../assets/kids.png')} className="h-32 w-20  " />
            </View>
            <View className="mt-auto mb-auto pl-2 text-center">

                <Image source={require('../assets/menformal.png')} className="h-32 w-20  " />
            </View>
            <View>

                <Image source={require('../assets/womenformal.png')} className="h-32 w-20 " />
            </View>

        </View>)
}
const Navbar = () => {
    return (
        <View >
            <View className="fixed shadow-xl shadow-black top-0 bg-[#e74c3c] pt-12 pl-6 pb-6 pr-10 w-full flex-row">

                <Pressable className="mt-1" onPress={() => { console.log("Pressable Clicked!!!!rr") }}>
                    <Icon name="stream" size={25} color="white" />

                </Pressable>
                <TextInput className="w-[95%] mx-auto h-[40px] bg-white rounded shadow-lg pl-2 pr-[70px] ml-3 " placeholder="Search for products" />
                <Icon3 name="microphone-outline" size={27} color="black" style={styles.mic} />
                <Icon4 name="search" size={22} color="black" style={styles.search} />

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <ProductSlider />


            </ScrollView>

        </View>

    )
}
const styles = {
    search: {
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 10,

    },
    mic: {
        marginTop: 'auto',
        marginBottom: 'auto',

    }
}
export default Navbar
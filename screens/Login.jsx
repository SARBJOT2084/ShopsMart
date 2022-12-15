import { View, Text, TextInput, Pressable, Image, CheckBox } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Login = () => {
    return (
        <View className="mt-24">
            <Text className="text-2xl mx-auto">Sign up!!!</Text>
            <Text className="ml-7 mb-6">Email</Text>
            <TextInput placeholder="johndoe@gmail.com" className="w-5/6 bg-[#CCD1D1] mx-auto rounded h-10 text-white" />
            <Text className="ml-7 mb-6">Password</Text>
            <TextInput secureTextEntry={true} className="w-5/6 bg-[#CCD1D1] mx-auto rounded h-10 text-white" />
            <Pressable className="bg-black w-2/4 mx-auto mt-7 h-12 rounded-xl"><Text className="mx-auto my-auto text-white ">Login</Text></Pressable>
            <Text className="text-blue-400 text-sm mt-2 ml-5 underline">Forgot Password?</Text>
            <Text className="text-blue-500 mt-2 ml-6 underline">New Customer  Register Here</Text>
            <View className="bg-gray-500 w-full h-[1px] mt-20"></View>
            <Text className="z-50 bottom-4 mx-auto bg-white text-gray-500">Or</Text>
            <View className="mx-auto w-3/4">
                <Pressable className="bg-[#F0F0F0] rounded-lg mb-6 h-9 flex flex-row space-x-3 ">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png' }} className="h-6 w-6 my-auto mx-auto" />
                    <Text className="mx-auto my-auto font-semibold">Sign up with Google</Text>
                </Pressable>

                <Pressable className="bg-[#F0F0F0] rounded-lg mb-6 h-9 flex flex-row space-x-3 ">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' }} className="h-6 w-6 my-auto mx-auto" />
                    <Text className="mx-auto my-auto font-semibold">Sign up with Microsoft</Text>
                </Pressable>
                <Pressable className="bg-[#F0F0F0] rounded-lg mb-6 h-9 flex flex-row space-x-3 ">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }} className="h-6 w-6 my-auto mx-auto" />
                    <Text className="mx-auto my-auto font-bold">Sign up with Apple</Text>

                </Pressable>
            </View>
        </View>
    )
}

export default Login
import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const SectionSlider = () => {
    return (
        <View className="mt-5">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="ml-2 mr-2 space-x-2">
                <View className="h-28 w-28 rounded-md bg-gray-500">
                </View>
                <View className="h-28 w-28 rounded-md bg-gray-500"></View>
                <View className="h-28 w-28 rounded-md bg-gray-500"></View>
                <View className="h-28 w-28 rounded-md bg-gray-500"></View>
                <View className="h-28 w-28 rounded-md bg-gray-500"></View>  
            </ScrollView>
        </View>
    )
}

export default SectionSlider
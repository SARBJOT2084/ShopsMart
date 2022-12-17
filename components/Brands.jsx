import { View, Text } from 'react-native'
import React from 'react'
import SectionSlider from './SectionSlider'

const Brands = () => {
    return (
        <View>
            <Text className="ml-5 text-xl mb-5">Top Brands</Text>
            <SectionSlider />
        </View>
    )
}

export default Brands
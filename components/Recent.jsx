import { View, Text } from 'react-native'
import React from 'react'
import Box from './Box'

const Recent = () => {
    return (
        <View>
            <Text className="mt-9 ml-2 ">Recently Viewed</Text>
            <Box />
            <Box />
        </View>
    )
}

export default Recent
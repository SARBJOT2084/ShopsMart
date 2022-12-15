import { View, Text } from 'react-native'
import React from 'react';
import Navbar from '../components/Navbar';
import Recent from '../components/Recent';
import BottomTabs from '../components/BottomTabs';
const Home = () => {
    return (
        <View>
            {/**Navbar  and Product Slider */}
            <Navbar />
            {/* */}

            <Recent />

            {/*Image Carosuel */}
            {/** Categories List */}
            {/* */}
            <BottomTabs />


        </View>

    )
}

export default Home
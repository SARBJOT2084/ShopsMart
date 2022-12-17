import { View, Text } from 'react-native'
import React from 'react';
import Navbar from '../components/Navbar';
import Recent from '../components/Recent';
import BottomTabs from '../components/BottomTabs';
import SectionSlider from '../components/SectionSlider';
import Deals from '../components/Deals';
import Brands from '../components/Brands';
import { ScrollView } from 'react-native';

const Home = () => {
    return (
        <View>
            {/**Navbar  and Product Slider */}
            <Navbar />
            {/* */}
            <ScrollView>
                <Recent />
                <SectionSlider />
                <Deals />
                <Brands />
                {/*Image Carosuel */}
                {/** Categories List */}
                {/* */}
                <BottomTabs />
            </ScrollView>



        </View>

    )
}

export default Home
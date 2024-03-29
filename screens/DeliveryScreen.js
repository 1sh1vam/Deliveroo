import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../store/reducers/restaurant';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const StyledPressable = styled(Pressable);

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className="flex-1 bg-[#00CCBB]">
            <SafeAreaView className="z-50 pt-5">
                <View className="flex-row items-center justify-between p-5">
                    <StyledPressable onPress={() => navigation.navigate('Home')} className="active:opacity-50">
                        <XMarkIcon color="white" size={30} />
                    </StyledPressable>
                    <Text className="text-white font-light text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={require('../assets/rider.webp')}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar size={30} color="#00CCBB" indeterminate />
                    <Text className="text-gray-500 mt-3">Your order at {restaurant.title} is being prepared</Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className="bg-gray-300 w-12 h-12 rounded-full p-4 ml-5" />
                <View className="flex-1">
                    <Text className="text-lg">Satya Puro</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="font-bold text-[#00CCBB] text-lg mr-5">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen;
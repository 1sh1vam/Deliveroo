import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';

const StyledPressable = styled(Pressable);

const DeliveryScreen = () => {
  return (
    <View className="flex-1 bg-[#00CCBB]">
        <SafeAreaView className="z-50">
            <View className="flex-row items-center justify-between p-5">
                <StyledPressable className="active:opacity-50">
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
                <Text>Your order at </Text>
            </View>
        </SafeAreaView>
      <Text>DeliveryScreen</Text>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})
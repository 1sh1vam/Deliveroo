import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { XMarkIcon } from 'react-native-heroicons/solid';

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
        </SafeAreaView>
      <Text>DeliveryScreen</Text>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})
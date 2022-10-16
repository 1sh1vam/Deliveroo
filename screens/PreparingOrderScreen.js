import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
        <Animatable.Image
            source={require('../assets/orderLoading.gif')}
            animation="slideInUp"
            iterationCount={1}
            className="h-96 w-96"
        />

        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-lg px-4 my-10 text-white font-bold text-center"
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen

const styles = StyleSheet.create({})
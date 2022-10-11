import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500">Deliveroo App</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
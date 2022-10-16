import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { urlFor } from '../sanity';

const StyledPressable = styled(Pressable);

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <StyledPressable className="p-4 bg-white border-b border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">₹{price}</Text>
        </View>
        <View>
          <Image
            className="w-20 h-20 bg-gray-300 p-4 border border-[#F3F3F4]"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </View>
    </StyledPressable>
  );
};

export default DishRow;

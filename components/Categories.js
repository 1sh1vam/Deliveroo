import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing 1" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing 2" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing 4" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing 5" />
    </ScrollView>
  )
}

export default Categories;
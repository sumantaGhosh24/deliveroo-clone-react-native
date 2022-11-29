import React from "react";
import {Text, ScrollView} from "react-native";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing component"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing component"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing component"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing component"
      />
    </ScrollView>
  );
};

export default Categories;

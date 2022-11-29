import React from "react";
import {View, Text, ScrollView} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({title, description, id}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00cc8b" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="chicken"
          rating={4.3}
          genre="indian"
          address="a/b 23 road, abc"
          short_description="this is dummy short description"
          dishes={[]}
          long={23.5}
          lat={50.7}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="chicken"
          rating={4.3}
          genre="indian"
          address="a/b 23 road, abc"
          short_description="this is dummy short description"
          dishes={[]}
          long={23.5}
          lat={50.7}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="chicken"
          rating={4.3}
          genre="indian"
          address="a/b 23 road, abc"
          short_description="this is dummy short description"
          dishes={[]}
          long={23.5}
          lat={50.7}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="chicken"
          rating={4.3}
          genre="indian"
          address="a/b 23 road, abc"
          short_description="this is dummy short description"
          dishes={[]}
          long={23.5}
          lat={50.7}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

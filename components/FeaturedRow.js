import React, {useEffect, useState} from "react";
import {View, Text, ScrollView} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";

import sanityClient from "../sanity";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({title, description, id}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      _id,
      name,
      short_description,
      restaurants[]->{
        _id,
        name,
        short_description,
        image,
        lat,
        long,
        address,
        rating,
        type->{
          _id,
          name,
          image
        },
        dishes[]->{
          _id,
          name,
          short_description,
          price,
          image
        }
      }
    }[0]
    `,
        {id}
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

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
        {restaurants?.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

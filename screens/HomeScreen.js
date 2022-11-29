import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect} from "react";
import {Image, ScrollView, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{uri: "https://links.papareact.com/wru"}}
          className="h7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-400  text-xs font-bold">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00cc8b" />{" "}
          </Text>
        </View>
        <UserIcon size={35} color="#00cc8b" />
      </View>

      <View className="flex-row items-center space-x-w pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Search for restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={20} color="#00cc8b" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 100}}
      >
        <Categories />

        <FeaturedRow
          title="Featured"
          description="simply dummy text of the printing and typesetting industry"
          id="1"
        />
        <FeaturedRow
          title="Featured"
          description="simply dummy text of the printing and typesetting industry"
          id="2"
        />
        <FeaturedRow
          title="Featured"
          description="simply dummy text of the printing and typesetting industry"
          id="3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

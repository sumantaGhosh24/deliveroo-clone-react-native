import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect} from "react";
import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-900">This is Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

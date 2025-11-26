import icons from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Transfers = () => {
  return (
    <SafeAreaView className="px-8">
      <View className="flex flex-row items-center justify-between mt-5">
        <Text className="text-3xl font-bold">Transfers</Text>
        <Link
          href="/(tabs)/payments"
          className="p-4 rounded-full bg-white shadow-xs"
        >
          <Image source={icons.logout} className="size-6" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Transfers;

import icons from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payments = () => {
  return (
    <SafeAreaView className="px-8 pt-8 pb-2">
      <View className="flex flex-row items-center justify-between gap-3">
        <View className="flex flex-col gap-2">
          <Text className="text-black font-bold text-3xl">Payments</Text>
        </View>
        <Image
          source={icons.filter}
          resizeMode="contain"
          className="w-[24px] h-[24px]"
          tintColor="#2F7995"
        />
      </View>
    </SafeAreaView>
  );
};

export default Payments;

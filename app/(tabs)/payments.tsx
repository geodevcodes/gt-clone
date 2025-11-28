import { paymentData } from "@/lib/data/paymentData";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payments = () => {
  const onPressHandler = async () => {};
  return (
    <SafeAreaView className="px-5 pt-6 pb-8">
      <View className="flex flex-row items-center justify-between gap-3">
        <View className="flex flex-col gap-2">
          <Text className="text-black font-bold text-3xl pb-3">Payments</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="flex flex-col mt-4">
          {paymentData.map((item, index) => (
            <TouchableOpacity
              onPress={onPressHandler}
              key={index}
              className="flex flex-row items-center justify-between py-3"
            >
              <View className="flex flex-row items-center gap-3">
                <View
                  style={{
                    backgroundColor: item.bg,
                    borderColor: item.borderColor,
                    borderWidth: 1,
                  }}
                  className="p-3 rounded-full"
                >
                  {item.icon}
                </View>
                <Text className="text-base font-rubik-medium text-gray-600">
                  {item.name}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payments;

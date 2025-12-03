import { fundingData } from "@/lib/data/fundingData";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const FundingSource = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="px-8 pt-4 pb-2">
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        className="max-w-[50px] flex items-start justify-start mb-4"
      >
        <View className="flex flex-row items-center justify-between gap-3">
          <FontAwesome6 name="arrow-left-long" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View className="flex gap-3 pb-3">
        <Text className="text-black font-bold text-2xl">Funding source</Text>
        <Text className="text-gray-500 text-sm">
          Select one of the funding sources and proceed.
        </Text>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Beneficiaries */}
        <View className="mt-4 mb-2 gap-3">
          <Text className="text-sm text-gray-600">Account credentiaals</Text>
          {/* Allow Access */}
          <View className="bg-white border border-slate-200 p-3 pt-4 pl-4 rounded-lg">
            <View className="flex flex-col gap-3 items-center">
              <AntDesign name="user" size={24} color="#6b7280" />
              <Text className="text-black/90 text-sm">
                To use your contacts, allow the app to access your contacts.
              </Text>
            </View>
            <Text className="text-center text-[#ff6600] font-semibold mt-5 mb-1">
              Allow access
            </Text>
          </View>
        </View>

        <View className="flex flex-col mt-4">
          <Text className="text-sm text-gray-600">Fund from</Text>
          {fundingData.map((item, index) => (
            <TouchableOpacity
              onPress={() => {}}
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default FundingSource;

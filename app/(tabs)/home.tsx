import { activitiesData } from "@/lib/data/activitiesData";
import { featuresData } from "@/lib/data/featuresData";
import { shortcutData } from "@/lib/data/shortcutData";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView className="p-8 bg-[#F9F9F9] h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row justify-center items-center gap-2">
            <View className="bg-gray-300 p-2 rounded-full">
              <AntDesign name="user" size={16} color="gray" />
            </View>
            <Text className="text-base text-[#000000] font-semibold ">
              Hello, Rasheed!
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between mt-6">
          <View className="flex flex-row justify-center gap-2">
            <View className="border-[0.5px] border-gray-300 p-1 px-2 rounded-md flex items-center justify-center">
              <Text className="text-sm font-semibold text-slate-500">
                Savings
              </Text>
            </View>
          </View>
          <View className="border-[0.5px] border-gray-300 flex flex-row items-center justify-center gap-2 p-1 px-2 rounded-md">
            <Text className="text-sm font-semibold text-slate-500">
              0198872766
            </Text>
            <MaterialIcons name="content-copy" size={16} color="#ff6600" />
          </View>
        </View>

        <View className="mt-6 flex flex-row items-end rounded-lg">
          <Text className="font-bold text-sm mr-1">₦</Text>
          <Text className="font-bold text-3xl">250,000</Text>
          <Text className="font-bold text-xs mb-[1px] ml-0.5">.46</Text>
          <Octicons
            name="eye-closed"
            size={18}
            color="#64748b"
            className="ml-3"
          />
        </View>

        <View className="pt-3 flex flex-row items-end gap-2 rounded-lg">
          <Text className="font-bold text-xs text-slate-500">Book balance</Text>
          <Text className="font-bold text-xs text-slate-500">₦250,000.46</Text>
        </View>

        <FlatList
          data={activitiesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{ width: width * 0.4, marginRight: 10, height: 50 }}
              className="mt-6 bg-[#f1dcce] border-[0.3px] border-[#ff6600] rounded-3xl flex flex-row items-center justify-center gap-3"
            >
              {item.icon}
              <Text className="text-[#ff6600] font-bold text-center">
                {item.name}
              </Text>
            </View>
          )}
        />

        <View className="my-10">
          <Text className="text-black font-bold text-2xl mb-4">Shortcuts</Text>
          <FlatList
            data={shortcutData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex flex-col justify-center items-center mr-5">
                <View className="mb-3 bg-gray-300 rounded-full flex items-center justify-center w-16 h-16">
                  {item.icon}
                </View>
                <Text className="text-slate-500 text-base">{item.name}</Text>
              </View>
            )}
          />
        </View>

        <FlatList
          data={featuresData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex flex-col mb-4">
              <View>
                <Text className="text-black font-bold text-2xl my-3">
                  {item.name}
                </Text>
                <View className="border border-slate-200 rounded-lg pb-5">
                  <View className="mb-4">
                    <Image
                      source={item.imageUrl}
                      resizeMode="cover"
                      className="w-full h-[120px] rounded-lg"
                    />
                  </View>
                  <View className="px-4">
                    <Text className="text-[#000000] text-base">
                      {item.description}
                    </Text>
                    <View className="mt-4 bg-[#f1dcce]  border-[0.3px] border-[#ff6600] rounded-lg py-5 px-6">
                      <Text className="text-[#ff6600] font-bold text-center">
                        {item.buttonName}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

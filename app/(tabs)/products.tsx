import { productsData } from "@/lib/data/productsData";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = () => {
  return (
    <SafeAreaView className="px-5 pt-6 pb-8">
      <View className="flex flex-row items-center justify-between mb-6">
        <Text className="text-black font-bold text-3xl">Products</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <FlatList
          data={productsData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex flex-col mb-4">
              <View>
                <Text className="text-black font-bold text-xl my-3">
                  {item.name}
                </Text>
                <View className="border border-slate-200 rounded-lg pb-5">
                  <View className="mb-4">
                    <Image
                      source={item.imageUrl}
                      resizeMode="cover"
                      className="w-full h-[120px] rounded-t-lg"
                    />
                  </View>
                  <View className="px-4">
                    <View className="flex flex-row justify-between items-end mr-4">
                      <Text className="text-[#000000] text-base">
                        {item.description}
                      </Text>
                      {item.iconRight && (
                        <Ionicons
                          name="chevron-forward"
                          size={18}
                          color="#ff6600"
                        />
                      )}
                    </View>
                    {item.buttonName && (
                      <View className="mt-4 bg-[#f1dcce]  border-[0.3px] border-[#ff6600] rounded-lg py-5 px-6">
                        <Text className="text-[#ff6600] font-bold text-center">
                          {item.buttonName}
                        </Text>
                      </View>
                    )}
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

export default Products;

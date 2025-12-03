import Filters from "@/components/Filters";
import Search from "@/components/Search";
import { beneficiaryAccountData } from "@/lib/data/transfersData";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const AccountTransfer = () => {
  const router = useRouter();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const titleStyle = useAnimatedStyle(() => {
    const isCentered = scrollY.value > 10;
    return {
      transform: [
        {
          translateX: withTiming(isCentered ? width / 2 - 80 : 0, {
            duration: 300,
          }),
        },
      ],
      opacity: withTiming(isCentered ? 0.85 : 1, { duration: 300 }),
      fontSize: withTiming(isCentered ? 20 : 24, { duration: 300 }),
      marginLeft: withTiming(isCentered ? -20 : 0, { duration: 300 }),
    };
  });

  const getInitials = (fullName: string) => {
    if (!fullName) return "";
    const parts = fullName.trim().split(" ");
    if (parts.length < 2) {
      return parts[0].charAt(0).toUpperCase();
    }
    return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
  };

  const groupedData = beneficiaryAccountData.reduce(
    (
      acc: { [key: string]: (typeof beneficiaryAccountData)[number][] },
      item
    ) => {
      const letter = item.name.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);

      return acc;
    },
    {}
  );

  return (
    <SafeAreaView className="px-5 pt-4 pb-2">
      <View className="">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="max-w-[50px] flex items-start justify-start "
        >
          <View className="flex flex-row items-center justify-between gap-3">
            <FontAwesome6 name="arrow-left-long" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="mt-3">
          <Animated.Text
            style={[
              titleStyle,
              {
                fontWeight: "bold",
                color: "black",
              },
            ]}
          >
            Account transfer
          </Animated.Text>
        </View>
      </View>

      {/* Search */}
      <View className="mt-4 mb-2 gap-3">
        <View>
          <Search placeholder="Name, phone or account number..." />
        </View>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Own accounts transfer */}
        <View className="mt-10 mb-2 gap-3">
          <Text className="text-sm text-gray-600">Own accounts transfer</Text>
          <View>
            <TouchableOpacity
              // onPress={() => router.push(item.href as any)}
              className="flex flex-row items-center justify-between py-3 px-4 mt- rounded-xl bg-white border border-gray-200"
            >
              <View className="flex flex-row items-center gap-2">
                <View className="p-1 rounded-full">
                  <Ionicons
                    name="chevron-expand-outline"
                    size={24}
                    color="#DC2626"
                    style={{ transform: [{ rotate: "90deg" }] }}
                  />
                </View>
                <Text className="text-base text-gray-600">
                  Send between own accounts
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Beneficiaries */}
        <View className="mt-5 mb-2 gap-3">
          <Text className="text-sm text-gray-600">Your Beneficiaries</Text>
          <View>
            <Filters />
          </View>

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

          <View>
            {Object.keys(groupedData)
              .sort()
              .map((letter) => (
                <View key={letter}>
                  <View className="mt-4">
                    <Text className="text-lg font-semibold">{letter}</Text>
                  </View>

                  {groupedData[letter].map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      className="flex flex-row items-center justify-between py-3 mt-2 rounded-xl"
                    >
                      <View className="flex flex-row items-center gap-3">
                        <View
                          style={{
                            backgroundColor: item.bg,
                            borderColor: item.borderColor,
                            borderWidth: 1,
                          }}
                          className="p-3 rounded-full relative"
                        >
                          <Text
                            style={{
                              color: item.borderColor,
                            }}
                            className="text-base font-bold"
                          >
                            {getInitials(item.name)}
                          </Text>

                          <View className="absolute bottom-0 right-0 rounded-full">
                            {item.icon}
                          </View>
                        </View>

                        <View>
                          <Text className="text-base text-gray-700">
                            {item.name}
                          </Text>

                          <View className="flex flex-row gap-2">
                            <Text className="text-xs text-gray-600">
                              {item.bankName}
                            </Text>
                            <Text className="text-xs text-gray-600">
                              {item.accountNumber}
                            </Text>
                            <Text className="text-xs text-gray-600">
                              {item.currency}
                            </Text>
                          </View>
                        </View>
                      </View>

                      <Ionicons
                        name="chevron-forward"
                        size={18}
                        color="black"
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default AccountTransfer;

import ComingSoon from "@/components/ComingSoon";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Finances = () => {
  return (
    <SafeAreaView className="px-8 pt-8 pb-2">
      <View className="flex flex-row items-center justify-between gap-3 mb-32">
        <Text className="text-black font-bold text-3xl">Finances</Text>
      </View>
      <ComingSoon
        title="Coming soon"
        subTitle="We are working very hard to complete it as soon as possible, but you can always use our other cool features."
      />
    </SafeAreaView>
  );
};

export default Finances;

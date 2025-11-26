import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ComingSoonProps {
  title: string;
  subTitle: string;
}
const ComingSoon = ({ title, subTitle }: ComingSoonProps) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.comingsoon}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />
      <Text className="text-center font-spaceMono-regular font-bold text-3xl mt-2">
        {title}
      </Text>
      <Text className="text-center text-sm text-slate-500 mt-5">{subTitle}</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        className="rounded-xl  flex flex-row justify-center items-center w-full my-5"
      >
        <Text className="text-white text-base">Reload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComingSoon;

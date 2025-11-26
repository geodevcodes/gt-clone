import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const TabIcon = ({
  focused,
  Icon,
  title,
}: {
  focused: boolean;
  Icon: React.ReactNode;
  title: string;
}) => (
  <View className="flex-1 mt-1 flex flex-col items-center">
    {Icon}
    <Text
      className={`${
        focused
          ? "text-[#ff6600] font-rubik-medium"
          : "text-[#666876] font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2664A1",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            borderTopColor: "#D1D1D6",
            borderTopWidth: 1,
            minHeight: 1,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Home"
                Icon={
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#ff6600" : "#666876"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "products",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Products"
                Icon={
                  <AntDesign
                    name="code-sandbox"
                    size={24}
                    color={focused ? "#ff6600" : "#666876"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: "payments",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Payments"
                Icon={
                  <MaterialCommunityIcons
                    name="circle-box"
                    size={24}
                    color={focused ? "#ff6600" : "#666876"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="transfers"
          options={{
            title: "transfers",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Transfers"
                Icon={
                  <MaterialCommunityIcons
                    name="chevron-double-right"
                    size={24}
                    color={focused ? "#ff6600" : "#666876"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="finances"
          options={{
            title: "finances",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Finances"
                Icon={
                  <Feather
                    name="bar-chart-2"
                    size={24}
                    color={focused ? "#ff6600" : "#666876"}
                  />
                }
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#000000" style="auto" />
    </>
  );
};

export default TabsLayout;

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const shortcutData = [
  {
    id: "nearme_1",
    name: "Near me",
    icon: <FontAwesome6 name="location-crosshairs" size={24} color="#ff6600" />,
  },
  {
    id: "byairtime_2",
    name: "Buy airtime",
    icon: (
      <MaterialIcons name="signal-cellular-0-bar" size={24} color="#ff6600" />
    ),
  },
  {
    id: "buydata_3",
    name: "Buy data",
    icon: (
      <MaterialCommunityIcons
        name="wifi-strength-4"
        size={24}
        color="#ff6600"
      />
    ),
  },
  {
    id: "fxsales_4",
    name: "FX Sales",
    icon: (
      <MaterialCommunityIcons
        name="rotate-3d-variant"
        size={24}
        color="black"
      />
    ),
  },
];

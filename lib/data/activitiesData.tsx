import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const activitiesData = [
  {
    id: "fund_1",
    name: "Fund account",
    icon: <AntDesign name="plus-circle" size={18} color="#ff6600" />,
  },
  {
    id: "transfer_2",
    name: "Transfer",
    icon: (
      <MaterialCommunityIcons
        name="chevron-double-right"
        size={24}
        color="#ff6600"
      />
    ),
  },
  {
    id: "account_3",
    name: "Account details",
    icon: <MaterialIcons name="bar-chart" size={24} color="#ff6600" className="rotate-180" />,
  },
];

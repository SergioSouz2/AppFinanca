import { Image, Text, View } from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";

import { style } from "./styles";

export function ItemCompra({ title, data, valor, icon }) {
   return (
      <View style={style.container}>
            <View style={style.contentIcon}>
               <SimpleLineIcons
                  name="handbag"
                  size={20}
                  color="rgba(162, 116, 48, 1)"
               />
            </View>
            <View style={style.contentTitle}>
               <Text style={style.title}>{title}</Text>
               <Text style={style.date}>{data}</Text>
            </View>
            <View style={style.contentValor}>
               <Text style={style.valor}>-R$ {valor}</Text>
            </View>
      </View>
   );
}

import { Text, View, FlatList } from "react-native";

import Carousel from "react-native-snap-carousel";

import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/ButtonBack";
import { CardCartao } from "../../components/CardCartao";
import { ItemCompra } from "../../components/ItemCompra";

import { Tranzacao } from "../../utils/list";

import { style } from "./styles";

export function Cartoes() {
   const DATA = [
      {
         id: "1",
      },
      {
         id: "2",
      },
      {
         id: "3",
      },
   ];

   return (
      <View style={style.containerCartao}>
         <Header>
            <View style={style.headerCartao}>
               <ButtonBack />
               <Text style={style.cartaoTitle}>
                  Você pode verificar {"\n"}seus cartões aqui
               </Text>
            </View>
         </Header>

         <View
            style={{ top: -50, justifyContent: "center", alignItems: "center" }}
         >
            <Carousel
               containerCustomStyle={{}}
               data={DATA}
               key={DATA.id}
               renderItem={() => (
                  <CardCartao
                     creditos={"1.500,00"}
                     titular={"Empresa"}
                     validade={"10/25"}
                     numeroCartao={"**** **** **** 2403"}
                  />
               )}
               sliderWidth={400}
               itemWidth={250}
               slideStyle={{ marginLeft: 20 }}
               inactiveSlideScale={0.95}
               inactiveSlideOpacity={1}
               enableMomentum={true}
               activeSlideAlignment="start"
               activeAnimationType="spring"
            />
         </View>

         <Text style={{marginLeft:20, fontSize:22,marginBottom:12, fontFamily:'Montserrat_700Bold' }}>Transações recentes</Text>
         <View style={{marginLeft:20}}>
            <FlatList
               data={Tranzacao}
               renderItem={({ item }) => (
                  <ItemCompra
                     title={item.title}
                     data={item.data}
                     valor={item.valor}
                     icon={item.icon}
                  />
               )}
               keyExtractor={(item) => item.id}
            />
         </View>
      </View>
   );
}

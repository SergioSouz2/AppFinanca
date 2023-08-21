import { StyleSheet } from "react-native";
import { COLOR } from "../../theme/styles";

export const styles = StyleSheet.create({
  verifAccount: {
    width: '80%',
    height: '20%',
    justifyContent: "center",
    alignItems: "center",

    shadowColor: COLOR.BLACK,
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,

  },

  accountGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",


  },
  txtAccount: {
    color: COLOR.WHITE,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 19,
    width: '70%'
  }

})
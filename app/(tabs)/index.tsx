import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <FontAwesome name="history" size={24} color="black" />
            <Text>Votre dernière salle</Text>
          </View>
          <View style={styles.sectionContent}>
            <View>
              <Text>Soirée chez Maxence</Text>
              <Text>par Noam le 27 décembre 2023</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <FontAwesome name="music" size={24} color="black" />
            <Text>Vos dernières musiques partagées</Text>
          </View>
          <View style={styles.sectionContent}>
            <View>
              <Text>In The Name Of Love</Text>
              <Text>Martin Garrix</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  main: {
    flex: 2,
    width: "100%",
  },
  section: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

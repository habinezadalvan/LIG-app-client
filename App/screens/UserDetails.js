import React from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
import Tag from "../components/Tag";

export default function UserDetails({ route }) {
  const { colors, dark } = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/logoBlue.png")}
          />
          <View
            style={[
              styles.profileTagsContainer,
              {
                borderBottomWidth: 2,
                borderBottomColor: "#e5e5e5",
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
          >
            <Caption style={styles.caption}>{route.params.item.role}</Caption>

            <Caption style={styles.caption}>{route.params.item.email}</Caption>

            <Caption style={styles.caption}>
              {route.params.item.phoneNumber}
            </Caption>
          </View>
        </View>

        <View style={styles.tagsSection}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Tag text="Active" color="#0793FD" textColor="white" />
            <Tag
              text={route.params.item.position}
              color="#0793FD"
              textColor="white"
            />
          </View>
          <View style={styles.otherTags}>
            <Tag
              text="3 Loans"
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text="13 Contributions"
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text="Savings:
              717000 rwf"
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text="0 Reports"
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text="0 Events"
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1.5,
  },
  image: {
    flex: 4,
    width: "100%",
  },
  profileTagsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  caption: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
  },
  tagsSection: {
    flex: 1,
    paddingVertical: 20,
  },
  otherTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 3,
    justifyContent: "space-evenly",
  },
});

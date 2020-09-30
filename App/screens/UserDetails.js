import React from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
import Tag from "../components/Tag";

export default function UserDetails({
  route: {
    params: { item },
  },
}) {
  const { colors, dark } = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={item.avatar || require("../assets/logoBlue.png")}
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
            <Caption style={styles.caption}>{item.userRole.name === 'admin' ? 'Admin' : 'User'}</Caption>

            <Caption style={styles.caption}>{item.email}</Caption>

            <Caption style={styles.caption}>
              {item.phoneNo}
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
            <Tag
              text={`${
                item.accountStatus === "disactivated"
                  ? "Disactivated"
                  : "Active"
              }`}
              color={`${
                item.accountStatus === "disactivated" ? "#444" : "#0793FD"
              }`}
              textColor={`${
                item.accountStatus === "disactivated" ? "#666" : "white"
              }`}
            />
            <Tag
              text={item.userPosition.name}
              color="#0793FD"
              textColor="white"
            />
          </View>
          <View style={styles.otherTags}>
            <Tag
               text={`${item.userLoans.length} Loan(s)`}
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text={`${item.userContributions.length} Contribution(s)`}
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text={`Savings: ${item.userSavings ? item.userSavings.amount : 0} frw`}
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text={`${item.userReports.length} Report(s)`}
              color={dark ? colors.backdrop : colors.tagBg}
              textColor={dark ? colors.text : colors.tagText}
            />
            <Tag
              text={`${item.userEvents.length} Event(s)`}
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

import React from "react";
import { Tabs } from "expo-router";
import PlusCircleIcon from "@/components/Icons/components/PlusCircleIcon";
import BookmarkIcon from "@/components/Icons/components/BookmarkIcon";
import ProfileIcon from "@/components/Icons/components/ProfileIcon";
import HomeIcon from "@/components/Icons/components/HomeIcon";
import TabBarLabel from "@/components/TabBarLabel";
import TabBarIcon from "@/components/TabBarIcon";

const TabsLayout: React.FC = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon({ color, focused, size }) {
              return (
                <TabBarIcon
                  Component={HomeIcon}
                  color={color}
                  focused={focused}
                  size={size}
                  propToColorize="stroke"
                />
              );
            },
            tabBarLabel(props) {
              return <TabBarLabel {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon({ color, focused, size }) {
              return (
                <TabBarIcon
                  Component={PlusCircleIcon}
                  color={color}
                  focused={focused}
                  size={size}
                  propToColorize="stroke"
                />
              );
            },
            tabBarLabel(props) {
              return <TabBarLabel {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon({ color, focused, size }) {
              return (
                <TabBarIcon
                  Component={ProfileIcon}
                  color={color}
                  focused={focused}
                  size={size}
                  propToColorize="stroke"
                />
              );
            },
            tabBarLabel(props) {
              return <TabBarLabel {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon({ color, focused, size }) {
              return (
                <TabBarIcon
                  Component={BookmarkIcon}
                  color={color}
                  focused={focused}
                  size={size}
                  propToColorize="stroke"
                />
              );
            },
            tabBarLabel(props) {
              return <TabBarLabel {...props} />;
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

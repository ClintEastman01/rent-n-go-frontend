import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import React from "react";
import { Text, View } from "react-native";
import SignUpScreen from "./components/SignUpScreen";
import SignInWithOAuth from "./components/SignInWithOAuth";
import SignInScreen from "./components/SignInScreen";
import SignOut from "./components/SignOut";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <SignedIn>
        <Text>You are Signed in</Text>
        <SignOut />
      </SignedIn>
      <SignedOut>
        <SignInWithOAuth />
      </SignedOut>

      <Text className=" text-3xl font-bold text-red-500  ">Expo sdk 50+</Text>
      <Text className=" text-3xl font-bold text-red-400  ">Nativewind</Text>
      <Text className=" text-3xl font-bold text-red-300  ">Clerk Auth</Text>
      <Text className=" text-3xl font-bold text-red-200  ">Typescript</Text>
    </View>
  );
}

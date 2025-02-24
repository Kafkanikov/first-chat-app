import { Redirect, Stack } from "expo-router";
import React from "react";
import { useAuth } from "@/providers/AuthProvider";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="/(main)/(tabs)" />;
  }
  return <Stack />;
}

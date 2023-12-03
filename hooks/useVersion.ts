import type { Version } from "fwew.js";
import { version as fwewVersion } from "fwew.js";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Platform } from "react-native";

export function useVersion() {
  const [version, setVersion] = useState<Version>();

  const AppVersion = Constants.expoConfig?.version;
  const CommitHash =
    Platform.OS === "web"
      ? process.env.VERCEL_GIT_COMMIT_REF
      : process.env.EXPO_PUBLIC_GIT_COMMIT_HASH;
  const Branch =
    Platform.OS === "web"
      ? process.env.VERCEL_GIT_COMMIT_SHA
      : process.env.EXPO_PUBLIC_GIT_BRANCH;

  const getVersion = async () => {
    const data = await fwewVersion();
    setVersion(data);
  };

  useEffect(() => {
    getVersion();
  }, []);

  return {
    AppVersion,
    Branch,
    CommitHash,
    ...version,
  };
}

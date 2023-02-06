import { ActivityContext } from "@/contexts/ActivityContext";
import { useContext } from "react";

export function useActivity() {
  return useContext(ActivityContext)
}
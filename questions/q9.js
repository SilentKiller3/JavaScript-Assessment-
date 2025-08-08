import { sumArray } from "./q6.js";

export function averageArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return sumArray(arr) / arr.length;
}

import { Problem } from "../types/problem";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-sell-stock";
import { climbingStairs } from "./climbing-stairs";
import { containerWithMostWater } from "./container-with-most-water";
import { jumpGame } from "./jump-game";
import { maximumSubarray } from "./maximum-subarray";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { subsets } from "./subsets";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "container-with-most-water": containerWithMostWater,
  subsets: subsets,
  "best-time-to-buy-and-sell-stock": bestTimeToBuyAndSellStock,
  "climbing-stairs": climbingStairs,
  "maximum-subarray": maximumSubarray,
};

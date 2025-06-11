import assert from "assert";
import { Problem } from "../types/problem";

export const bestTimeToBuyAndSellStockHandler = (fn: any) => {
	try {
		const tests = [
			[7, 1, 5, 3, 6, 4],
			[7, 6, 4, 3, 1],
			[2, 4, 1],
		];
		const answers = [5, 0, 2];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from bestTimeToBuyAndSellStockHandler:", error);
		throw new Error(error);
	}
};

const starterCodeBestTime = `function maxProfit(prices) {
  // Write your code here
};`;

export const bestTimeToBuyAndSellStock: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "Best Time to Buy and Sell Stock",
	problemStatement: `
	<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
	<p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
	<p>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.</p>
	`,
	examples: [
		{
			id: 0,
			inputText: `prices = [7,1,5,3,6,4]`,
			outputText: `5`,
			explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
		},
		{
			id: 1,
			inputText: `prices = [7,6,4,3,1]`,
			outputText: `0`,
			explanation: "No profit is possible as prices decline every day.",
		},
	],
	constraints: `
	<li>1 <= prices.length <= 10<sup>5</sup></li>
	<li>0 <= prices[i] <= 10<sup>4</sup></li>
	`,
	starterCode: starterCodeBestTime,
	handlerFunction: bestTimeToBuyAndSellStockHandler,
	starterFunctionName: "function maxProfit(",
	order: 8,
};

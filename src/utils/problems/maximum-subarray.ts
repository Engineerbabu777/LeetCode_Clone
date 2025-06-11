import assert from "assert";
import { Problem } from "../types/problem";

export const maximumSubarrayHandler = (fn: any) => {
	try {
		const tests = [
			[-2, 1, -3, 4, -1, 2, 1, -5, 4],
			[1],
			[5, 4, -1, 7, 8],
		];
		const answers = [6, 1, 23];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maximumSubarrayHandler:", error);
		throw new Error(error);
	}
};

const starterCodeMaximumSubarray = `function maxSubArray(nums) {
  // Write your code here
};`;

export const maximumSubarray: Problem = {
	id: "maximum-subarray",
	title: "Maximum Subarray",
	problemStatement: `
	<p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return its sum.</p>
	`,
	examples: [
		{
			id: 0,
			inputText: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,
			outputText: `6`,
			explanation: "Subarray [4,-1,2,1] has the largest sum = 6.",
		},
		{
			id: 1,
			inputText: `nums = [1]`,
			outputText: `1`,
			explanation: "Only one element, so max subarray is the element itself.",
		},
	],
	constraints: `
	<li>1 <= nums.length <= 10<sup>5</sup></li>
	<li>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></li>
	`,
	starterCode: starterCodeMaximumSubarray,
	handlerFunction: maximumSubarrayHandler,
	starterFunctionName: "function maxSubArray(",
	order: 10,
};

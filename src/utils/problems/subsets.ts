import assert from "assert";
import { Problem } from "../types/problem";

export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			[[1,2,3]],
			[[0]],
		];
		const answers = [
			[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]],
			[[], [0]],
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i][0]);
			const sort = (arr: number[][]) =>
				arr.map(inner => inner.sort((a, b) => a - b)).sort();
			assert.deepStrictEqual(sort(result), sort(answers[i]));
		}
		return true;
	} catch (error: any) {
		console.log("Error from subsetsHandler:", error);
		throw new Error(error);
	}
};

const starterCodeSubsets = `function subsets(nums) {
  // Write your code here
};`;

export const subsets: Problem = {
	id: "subsets",
	title: "Subsets",
	problemStatement: `
	<p>Given an integer array <code>nums</code> of unique elements, return <em>all possible subsets (the power set)</em>.</p>
	<p>The solution set must not contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>
	`,
	examples: [
		{
			id: 0,
			inputText: `nums = [1,2,3]`,
			outputText: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
			explanation: "There are 8 possible subsets of [1,2,3].",
		},
		{
			id: 1,
			inputText: `nums = [0]`,
			outputText: `[[],[0]]`,
			explanation: "There are 2 subsets of [0]: empty and [0].",
		},
	],
	constraints: `
	<li>1 <= nums.length <= 10</li>
	<li>-10 <= nums[i] <= 10</li>
	<li>All the numbers of <code>nums</code> are unique.</li>
	`,
	starterCode: starterCodeSubsets,
	handlerFunction: subsetsHandler,
	starterFunctionName: "function subsets(",
	order: 10,
};

import assert from "assert";
import { Problem } from "../types/problem";

export const climbingStairsHandler = (fn: any) => {
	try {
		const tests = [2, 3, 5];
		const answers = [2, 3, 8];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from climbingStairsHandler:", error);
		throw new Error(error);
	}
};

const starterCodeClimbingStairs = `function climbStairs(n) {
  // Write your code here
};`;

export const climbingStairs: Problem = {
	id: "climbing-stairs",
	title: "Climbing Stairs",
	problemStatement: `
	<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>
	<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>
	`,
	examples: [
		{
			id: 0,
			inputText: `n = 2`,
			outputText: `2`,
			explanation: "1 step + 1 step, or 2 steps.",
		},
		{
			id: 1,
			inputText: `n = 3`,
			outputText: `3`,
			explanation: "1+1+1, 1+2, or 2+1.",
		},
	],
	constraints: `
	<li>1 <= n <= 45</li>
	`,
	starterCode: starterCodeClimbingStairs,
	handlerFunction: climbingStairsHandler,
	starterFunctionName: "function climbStairs(",
	order: 9,
};

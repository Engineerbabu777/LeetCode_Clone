import assert from "assert";
import { Problem } from "../types/problem";

export const containerWithMostWaterHandler = (fn: any) => {
	try {
		const tests = [
			[[1,8,6,2,5,4,8,3,7]],
			[[1,1]],
			[[4,3,2,1,4]],
			[[1,2,1]],
		];
		const answers = [49, 1, 16, 2];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i][0]);
			assert.strictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from containerWithMostWaterHandler:", error);
		throw new Error(error);
	}
};

const starterCodeContainer = `function maxArea(height) {
  // Write your code here
};`;

export const containerWithMostWater: Problem = {
	id: "container-with-most-water",
	title: "Container With Most Water",
	problemStatement: `
	<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>
	<p>Find two lines that together with the x-axis form a container that holds the most water, and return the maximum amount of water a container can store.</p>
	<p><strong>Note:</strong> You may not slant the container.</p>
	`,
	examples: [
		{
			id: 0,
			inputText: `height = [1,8,6,2,5,4,8,3,7]`,
			outputText: `49`,
			explanation: "The container formed by lines at index 1 and 8 holds the most water: min(8,7) * (8 - 1) = 49.",
		},
		{
			id: 1,
			inputText: `height = [1,1]`,
			outputText: `1`,
			explanation: "The only possible container has width 1 and height 1.",
		},
	],
	constraints: `
	<li>n == height.length</li>
	<li>2 <= n <= 10<sup>5</sup></li>
	<li>0 <= height[i] <= 10<sup>4</sup></li>
	`,
	starterCode: starterCodeContainer,
	handlerFunction: containerWithMostWaterHandler,
	starterFunctionName: "function maxArea(",
	order: 6,
};

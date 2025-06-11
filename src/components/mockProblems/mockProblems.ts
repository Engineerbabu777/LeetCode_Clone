export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  order: number;
  videoId?: string;
  link?: string;
};

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    videoId: "8-k1C6ehKuw",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/two-sum",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/reverse-linked-list",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/jump-game",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: "xty7fr-k0TU",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/valid-parentheses",
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    order: 5,
    videoId: "ZfFl4torNg4",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/search-a-2d-matrix",
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/container-with-most-water",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Intervals",
    order: 7,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/merge-intervals",
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: "4qYTqOiRMoM",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/maximum-depth-of-binary-tree",
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/best-time-to-buy-and-sell-stock",
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "",
    link: process.env.NEXT_PUBLIC_SITE_URL + "/problems/subsets",
  },
];

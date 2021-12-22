import React from "react";
import useCollapse from "react-collapsed";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "../../home/styles.module.css";

function Collapse() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  var categories: string[];
  categories = [
    "Array",
    "String",
    "Hash table",
    "Dynamic Programming",
    "Maths",
    "Depth-First search",
    "Sorting",
    "Greedy",
    "Breadth-First Search",
    "Tree",
    "Binary Tree",
    "Binary Search",
    "Two Pointers",
    "Stack",
    "Heap",
    "Graph",
    "Linked-List",
    "Recursion",
    "Divide and Conquer",
    "Segment Tree",
  ];

  return (
    <div className={styles["categorySection"]}>
      <h4>Topics </h4>
      <button className={styles["expand"]} {...getToggleProps()}>
        {isExpanded
          ? "Click to Collapse \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0🡡"
          : "Click to Expand  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0🡣"}
      </button>
      <section {...getCollapseProps()}>
        <ul className={styles["ul"]}>
          {categories.map((category) => (
            <li>
              <Link className={styles["li"]} to={"problem/" + category}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Collapse;

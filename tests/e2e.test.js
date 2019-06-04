import mount from "../src/lib.js";
import { exportAllDeclaration } from "@babel/types";

const filters = ["type", "location"];

const jobs = [
  {
    type: "fulltime",
    location: "Magdeburg"
  },
  {
    type: "fulltime",
    location: "Braunschweig"
  },
  {
    type: "parttime",
    location: "Magdeburg"
  },
  {
    type: "internship",
    location: "Hannover"
  }
];

describe("mounting the job filter", () => {
  test("should add the filter to the DOM", () => {
    const node = mountJobFilter();

    const filterContainerNode = getFilterContainer(node);

    expect(filterContainerNode).toBeDefined();
  });

  test("should add the job list to the DOM", () => {
    const node = mountJobFilter();

    const jobListNode = getJobList(node);

    expect(jobListNode).toBeDefined();
  });
});

function mountJobFilter() {
  const node = document.createElement("div");
  mount(node, filters, jobs);
  return node;
}

function getFilterContainer(node) {
  return node.querySelector(".filter-container");
}

function getJobList(node) {
  return node.querySelector(".results-container");
}
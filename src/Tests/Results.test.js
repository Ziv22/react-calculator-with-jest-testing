import React from "react";
import ReactDOM from "react-dom";
import Results from "../components/Results";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

const result = 7;

test("Renders without crashing", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Results result={result} />, root);
});

test("Renders Results with correct data", () => {
  const { getByTestId } = render(<Results result={result} />);
  expect(getByTestId("result")).toHaveTextContent(result);
});

test("Result component matches snapshot", () => {
  const resultSnapshot = renderer.create(<Results result={result} />).toJSON();
  expect(resultSnapshot).toMatchSnapshot();
});

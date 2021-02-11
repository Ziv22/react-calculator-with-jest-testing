import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

afterEach(cleanup);

test("App component matches snapshot", () => {
  const appSnapshot = renderer.create(<App />).toJSON();
  expect(appSnapshot).toMatchSnapshot();
});

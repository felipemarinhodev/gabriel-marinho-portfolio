import { Text } from ".";
import { customRender } from "@gabrielmarinho/test-commons/react-testing-library";
import { screen } from "@gabrielmarinho/test-commons/dom-testing-library";
import "@testing-library/jest-dom";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    render(<Text tag="h1">Simple Text</Text>);
    expect(
      screen.getByRole("heading", {
        name: /simple text/i,
      })
    ).toBeInTheDocument();
  });
});

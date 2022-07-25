import { Text } from ".";
import { customRender } from "@gabrielmarinho/test-commons/react-testing-library";
import { screen } from "@gabrielmarinho/test-commons/dom-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    render(<Text tag="h1">Simple Text</Text>);
    const wrapper = screen.getByRole("heading", {
      name: /simple text/i,
    });
    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toHaveStyle({
      fontFamily: "sans-serif",
    });
  });
});

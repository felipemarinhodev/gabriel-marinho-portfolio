import { customRender } from "@gabrielmarinho/test-commons/react-testing-library";
import { screen } from "@gabrielmarinho/test-commons/dom-testing-library";
import { HomeScreen } from "./HomeScreen";

const render = customRender();

describe("<HomeScreen />", () => {
  it("Render Page correctly", () => {
    render(<HomeScreen />);

    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByText(/Importando modulo local/i)).toBeInTheDocument();
  });
});

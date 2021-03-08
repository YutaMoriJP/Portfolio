import App from "../App";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("test if correct initial text is rendered", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/welcome/i);
  const button = getByText(/switch/i);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveTextContent(/welcome dark/i);
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(h1).toHaveTextContent(/welcome light/i);
});

import { h } from "preact";
import { render, fireEvent } from "@testing-library/preact";
import "@testing-library/jest-dom";
import { HelloWorld } from "../src/components/HelloWorld";

describe("HelloWorld Component", () => {
  it("renders with default name", () => {
    const { getByText, getByPlaceholderText } = render(<HelloWorld />);
    expect(getByText("Hello, World!")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter a name")).toBeInTheDocument();
  });

  it("renders with provided name", () => {
    const { getByText } = render(<HelloWorld initialName="Preact" />);
    expect(getByText("Hello, Preact!")).toBeInTheDocument();
  });

  it("updates name when input changes", () => {
    const { getByText, getByPlaceholderText } = render(<HelloWorld />);
    const input = getByPlaceholderText("Enter a name");
    fireEvent.change(input, { target: { value: "Jest" } });
    expect(getByText("Hello, Jest!")).toBeInTheDocument();
  });

  it("displays initial count of 0", () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText("You clicked 0 times")).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    const { getByText, getByRole } = render(<HelloWorld />);
    const button = getByRole("button", { name: "Increment" });
    fireEvent.click(button);
    expect(getByText("You clicked 1 times")).toBeInTheDocument();
    fireEvent.click(button);
    expect(getByText("You clicked 2 times")).toBeInTheDocument();
  });
});

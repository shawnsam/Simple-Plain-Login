import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextField from "../components/TextField";

const onChange = jest.fn();

describe("Text field component", () => {
  it("Verify the email input type", () => {
    render(<TextField label="Email:" value="" onChange={onChange} />);
    const textbox = screen.getByTestId("text"); //getByTestId(): find an element by its data-testid attribute
    expect(textbox).toHaveAttribute("type", "text"); //textbox should have an attribute of type "text"
  });

  it("Verify the password input type", () => {
    render(
      <TextField label="Password:" value="" onChange={onChange} isPassword />
    );
    const textbox = screen.getByTestId("password");
    expect(textbox).toHaveAttribute("type", "password"); //textbox should have an attribute of type "password"
  });

  it("Verify if the email value can be entered", async () => {
    render(<TextField label="Email:" value="" onChange={onChange} />);
    const textbox = screen.getByTestId("text");
    fireEvent.change(textbox, { target: { value: "test@test.com" } });
    expect(onChange).toHaveBeenCalledWith("test@test.com"); //onChange function have been called with the entered value
  });

  it("Verify if the password value can be entered", async () => {
    render(
      <TextField label="Password:" value="" onChange={onChange} isPassword />
    );
    const textbox = screen.getByTestId("password");
    fireEvent.change(textbox, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalledWith("test"); //onChange function have been called with the entered value
  });
});
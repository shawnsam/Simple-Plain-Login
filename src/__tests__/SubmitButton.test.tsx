import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import SubmitButton from "../components/SubmitButton";
import { FormStatus } from "../types/form";

const onChange = jest.fn();

describe("Submit button component", () => {
  it("Verify if the label is submit", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.PENDING}
      />
    );
    const text = screen.getByText("Submit"); //getByText(): find the element by its textContent value
    expect(text).toBeInTheDocument(); //assertion that the text is present in the document
  });

  it("Verify if the submit button color is grey initially(Pending state)", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.PENDING}
      />
    );
    expect(screen.getByRole("button")).toHaveStyle("background-color: grey"); //pending: button should have grey color style
  });

  it("Verify if the submit button is clickable", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.PENDING}
      />
    );
    expect(screen.getByRole("button")).toBeEnabled(); //button should be enabled form
  });

  it("Verify whether the submit function is called when clicked", async () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.PENDING}
      />
    );
    await userEvent.click(screen.getByRole("button")); //getByRole(): find the element by its role attribute value
    expect(onChange).toHaveBeenCalledTimes(1); //function got called 1 time on button click
  });

  it("Verify if the error state is shown", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.ERROR}
      />
    );
    expect(screen.getByRole("button")).toHaveStyle("background-color: red"); //error: button should have red color style
  });

  it("Verify if the success state is shown", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.SUCCESS}
      />
    );
    expect(screen.getByRole("button")).toHaveStyle("background-color: green"); //success: button should have green color style
  });

  it("Verify if the validating state is shown", () => {
    render(
      <SubmitButton
        label="Submit"
        onClick={onChange}
        status={FormStatus.VALIDATING}
      />
    );
    expect(screen.getByRole("button")).toHaveStyle("background-color: yellow"); // validating: button should have yellow color style
  });
});
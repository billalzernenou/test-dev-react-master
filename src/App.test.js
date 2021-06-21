import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabContainer from "./Components/TabContainer";
// import TabContainer from "./Components/TabHeader";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("TabContainer.js", () => {
  it("toggle screen register login", () => {
    // display component
    render(<TabContainer />);

    // clic event on button register
    userEvent.click(screen.getByTestId("register"));

    // expect display register form
    const elem2 = screen.getByText("Confirm");
    expect(elem2).toBeInTheDocument();
    //expect hide register form and show login form
    userEvent.click(screen.getByTestId("login"));
    expect(elem2).not.toBeInTheDocument();
  });

  it("test form validate login", () => {
    render(<TabContainer />);

    // event with not valid values
    userEvent.type(screen.getByTestId("email"), "billal");
    userEvent.click(screen.getByTitle("submit"));

    // Est-ce qu'on a la valeur 1 ?
    const elem1 = screen.getByText("You have to provide a valid email.");
    expect(elem1).toBeInTheDocument();

    userEvent.type(screen.getByTestId("password"), "azer");
    userEvent.click(screen.getByTitle("submit"));
    const elem2 = screen.getByText(
      "Your password must be between 5 and 16 characters length."
    );
    expect(elem2).toBeInTheDocument();

    userEvent.type(screen.getByTestId("email"), "billal@gmail.com");
    userEvent.type(screen.getByTestId("password"), "azerty123");
    expect(elem1 && elem2).not.toBeInTheDocument();
  });

  it("test form validate register", () => {
    render(<TabContainer />);

    // display register form
    userEvent.click(screen.getByTestId("register"));

    // expect display register form
    const elem = screen.getByText("Confirm");
    expect(elem).toBeInTheDocument();

    // event with not valid values
    userEvent.type(screen.getByTestId("email"), "zern");
    userEvent.click(screen.getByTitle("submit"));

    const elem1 = screen.getByText("You have to provide a valid email.");
    expect(elem1).toBeInTheDocument();

    userEvent.type(screen.getByTestId("password"), "azer");
    userEvent.click(screen.getByTitle("submit"));
    const elem2 = screen.getByText(
      "Your password must be between 5 and 16 characters length."
    );
    expect(elem2).toBeInTheDocument();
    //test match passwords
    userEvent.type(screen.getByTestId("confirm-password"), "azer!!");
    const elem3 = screen.getByText("Your passwords must match.");
    expect(elem3).toBeInTheDocument();

    userEvent.type(screen.getByTestId("email"), "billal@gmail.com");
    userEvent.type(screen.getByTestId("password"), "azerty123");
    userEvent.type(screen.getByTestId("confirm-password"), "azerty123");
    expect(elem1 && elem2 && elem3).not.toBeInTheDocument();
  });
});

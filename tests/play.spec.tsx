import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages/index";

const spyPlay = jest.fn();
jest.mock("../hooks/playHook", () => ({
  usePlay: () => ({ onClickPlay: spyPlay }),
}));

describe("test for play block", () => {
  it("play button is disabled in the initial state", () => {
    render(<Home />);
    expect(screen.getByText("play")).toBeDisabled();
  });

  it("play button is enabled if ttsed text is set", async () => {
    render(<Home />);
    // type the text in input textarea
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "MeFAoQdEE1Yw33MT7N9zReEmb62s3LrhzW5s5tj5fAlj61lQW9Vof10JriIFZtQN1aXExYCczRemhQB6LT4OAomxpLSwJUGspKHg"
    );
    // click register button
    await userEvent.click(screen.getByText("register"));

    // clock tts(text-to-speech) button
    await userEvent.click(screen.getByText("text to speech"));

    // check if the play button is enabled
    expect(screen.getByText("play")).toBeEnabled();
  });

  it("called the assigned function if play button is clicked", async () => {
    render(<Home />);
    // type the text in input textarea
    await userEvent.type(
      screen.getByPlaceholderText("please input text for register"),
      "ymGmI8fA0tGyGRWkcPe41WQswhIyninmKeazA4SqS8G1lNCeK23wsEHhCiOsH4X9irxTJGtek66NYrBg18MCo1TVZcP9pafOJPeM"
    );
    // click register button
    await userEvent.click(screen.getByText("register"));

    // clock tts(text-to-speech) button
    await userEvent.click(screen.getByText("text to speech"));

    // check if the play button is enabled
    expect(screen.getByText("play")).toBeEnabled();

    // click play button
    await userEvent.click(screen.getByText("play"));

    // check if the assigned function is called
    expect(spyPlay).toHaveBeenCalledTimes(1);
  });
});

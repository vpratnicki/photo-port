import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<ContactForm />);
  });

  // Second test
  it('matches snapshot DOM node structure', () => {
    // render 
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId("contact")).toHaveTextContent("Contact me");
})
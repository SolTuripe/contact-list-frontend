/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("Navbar", () => {
  it("Must display a title", () => {
    const screen = render(<Navbar />, { wrapper: Wrapper });

    expect(screen.getByText(/Contact List/i)).toBeInTheDocument();
  });
});

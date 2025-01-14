import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

test("renders the Board", () => {
  const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  expect(container.querySelectorAll(".Cell")).toHaveLength(9);
});

test("flips cells correctly on click", () => {
  const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  
  const cell = container.querySelector(".Cell");
  fireEvent.click(cell);
  
  const litCells = container.querySelectorAll(".Cell-lit");
  expect(litCells.length).toBeLessThan(9);
});

test("displays 'You Win!' message when all cells are off", () => {
  const { getByText } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  expect(getByText("You Win!")).toBeInTheDocument();
});

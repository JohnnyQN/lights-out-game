import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

test("renders a Cell", () => {
  const { container } = render(<Cell isLit={false} />);
  expect(container.firstChild).toHaveClass("Cell");
});

test("applies Cell-lit class when isLit is true", () => {
  const { container } = render(<Cell isLit={true} />);
  expect(container.firstChild).toHaveClass("Cell-lit");
});

test("calls flipCellsAroundMe on click", () => {
  const flipCellsAroundMe = jest.fn();
  const { container } = render(<Cell isLit={false} flipCellsAroundMe={flipCellsAroundMe} />);
  
  fireEvent.click(container.firstChild);
  expect(flipCellsAroundMe).toHaveBeenCalled();
});

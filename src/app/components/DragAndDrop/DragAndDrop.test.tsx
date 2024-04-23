import "@testing-library/jest-dom";

import { createEvent, fireEvent, render, screen } from "@testing-library/react";

import DragAndDrop from "./DragAndDrop";

describe("DragAndDrop component", () => {
  it("renders the component", () => {
    render(<DragAndDrop setImages={jest.fn()} />);

    const dragAndDrop = screen.getByTestId("drag-and-drop-container");

    expect(dragAndDrop).toBeInTheDocument();
  });

  it("should handle form dragenter event", () => {
    render(<DragAndDrop setImages={jest.fn()} />);

    const dragAndDrop = screen.getByTestId("drag-and-drop-container");

    fireEvent.dragEnter(dragAndDrop);

    const dragAndDropLabel = screen.getByTestId("drag-and-drop-label");

    expect(dragAndDropLabel).toHaveClass("drag-and-drop-label-hidden");
  });

  it("should prevent the default form submit event handler", () => {
    render(<DragAndDrop setImages={jest.fn()} />);

    const dragAndDrop = screen.getByTestId("drag-and-drop-container");
    const submitEvent = createEvent.submit(dragAndDrop);

    fireEvent(dragAndDrop, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it("should handle drop-area dragover event", () => {
    render(<DragAndDrop setImages={jest.fn()} />);

    const dragAndDrop = screen.getByTestId("drag-and-drop-container");

    fireEvent.dragEnter(dragAndDrop);

    const dropArea = screen.getByTestId("drop-area");

    fireEvent.dragOver(dropArea);

    const dragAndDropLabel = screen.getByTestId("drag-and-drop-label");

    expect(dragAndDropLabel).toHaveClass("drag-and-drop-label-hidden");
  });

  it("should handle drop-area dragleave event", () => {
    render(<DragAndDrop setImages={jest.fn()} />);

    const dragAndDrop = screen.getByTestId("drag-and-drop-container");

    fireEvent.dragEnter(dragAndDrop);

    const dropArea = screen.getByTestId("drop-area");

    fireEvent.dragLeave(dropArea);

    const dragAndDropLabel = screen.getByTestId("drag-and-drop-label");

    expect(dragAndDropLabel).not.toHaveClass("drag-and-drop-label-hidden");
  });

  it("should prevent the default dragover and drop event handlers", () => {
    jest.spyOn(window, "addEventListener").mockImplementationOnce(() => {});

    const { unmount } = render(<DragAndDrop setImages={jest.fn()} />);

    expect(window.addEventListener).toHaveBeenNthCalledWith(
      1,
      "dragover",
      expect.any(Function)
    );

    expect(window.addEventListener).toHaveBeenNthCalledWith(
      2,
      "drop",
      expect.any(Function)
    );

    jest.spyOn(window, "removeEventListener").mockImplementationOnce(() => {});

    unmount();

    expect(window.removeEventListener).toHaveBeenNthCalledWith(
      1,
      "dragover",
      expect.any(Function)
    );

    expect(window.removeEventListener).toHaveBeenNthCalledWith(
      2,
      "drop",
      expect.any(Function)
    );
  });
});

import { render } from "@testing-library/react";
import { Message} from "../message";

describe("Message tests", () => {
  it("renders author and text", () => {
    const message = render(<Message message={{ text: "text", author: "volkov.denis.w@gmail.com" }} />);

    const msgText = message.getByText("text");
    const authorText = message.getByText("author");
    expect(msgText).toBeInTheDocument();
    expect(authorText).toBeInTheDocument();
  });

  it("matches snapshot with author", () => {
    const message = render(<Message message={{ text: "text", author: "author" }} />);

    expect(message).toMatchSnapshot();
  });
  it("matches snapshot with no author", () => {
    const message = render(<Message message={{ text: "text", author: "" }} />);

    expect(message).toMatchSnapshot();
  });
});

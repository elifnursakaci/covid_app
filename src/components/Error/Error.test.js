import { render, screen } from "@testing-library/react";
import Error from ".";
import userEvent from "@testing-library/user-event";

describe("error bileşeni testleri", () => {
  const user = userEvent.setup();
  let comp;

  const retryMock = jest.fn();

  beforeEach(() => {
    comp = render(
      <Error message="failed with status code of 404" retry={retryMock} />
    );
  });

  it("doğru hata mesajını gösterir", () => {
    comp.getByText(/failed with/i);
  });

  it("tekrar dene butonu görevini yapar", async () => {
    const button = comp.getByRole("button");

    await user.click(button);

    expect(retryMock).toHaveBeenCalled();
  });
});

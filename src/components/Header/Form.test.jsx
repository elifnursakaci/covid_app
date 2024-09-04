import { render } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

test("Form gönderildiğinde aratma fonksiyonu çalışır", async () => {
  const mockFn = jest.fn();
  const user = userEvent.setup();

  const { getByPlaceholderText, getByRole } = render(
    <Form handleSubmit={mockFn} />
  );

  const input = getByPlaceholderText(/ülke ara/i);
  const btn = getByRole("button");

  await user.type(input, "Turkey");

  await user.click(btn);

  expect(mockFn).toHaveBeenCalled();
});

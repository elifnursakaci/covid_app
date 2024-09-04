import { render, screen } from "@testing-library/react";
import Detail from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { storeData } from "../../utils/constant";

const mockStore = configureStore([thunk]);

it("Yüklenme durumunda loader bileşenleri ekrana basılır", () => {
  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  screen.getByTestId("header-loader");
  screen.getAllByTestId("card-loader");
});

it("Hata gelme durumunda error bileşeni ekrana basılır.", () => {
  const store = mockStore({
    isLoading: false,
    error: "404 not found",
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  screen.getByText(/404 not found/i);
});

it("Veri gelme durumunda  ülke bilgisi ve kartlar ekrana basılır.", () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  const img = screen.getByRole("img");

  expect(img).toHaveProperty("src", storeData.data.country.flags.png);

  screen.getByText(storeData.data.country.altSpellings[1]);

  const arr = Object.entries(storeData.data.covid);

  arr.forEach((item) => {
    screen.getByText(item[0].split("_").join(" "));

    screen.getAllByText(item[1]);
  });
});

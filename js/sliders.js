export const priceSlider = noUiSlider.create(
  document.querySelector(".price-slider"),
  {
    start: 100,
    connect: "lower",
    direction: "rtl",
    range: {
      min: 1,
      max: 100,
    },
  }
);

export const widthSlider = noUiSlider.create(
  document.querySelector(".c-filter-width-slider"),
  {
    start: [30, 1000],
    connect: true,
    range: {
      min: 30,
      max: 1000,
    },
  }
);

export const getValue = (textSymbol, slider, elem1, elem2 = null) => {
  slider.on("update", (value, handle) => {
    if (elem2) {
      if (!handle) {
        let setValue = +value[0];
        elem1.innerHTML = setValue.toFixed() + " " + textSymbol;
      } else {
        let setValue = +value[1];
        elem2.innerHTML = setValue.toFixed() + " " + textSymbol;
      }
    } else {
      let setValue = +value.join();
      elem1.innerHTML = setValue.toFixed() + " " + textSymbol;
    }
  });
};

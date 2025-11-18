const initIsotope = () => {
  // Verificar que Isotope está disponible globalmente
  if (typeof window === "undefined" || typeof window.Isotope === "undefined") {
    console.warn(
      "Isotope is not available. Make sure the isotope script is loaded."
    );
    return;
  }

  let iso;
  let grid = document.querySelectorAll(".gallery");
  let filtersElem = document.querySelector(".filtering");
  let buttonGroups = document.querySelectorAll(".filtering");

  if (grid.length >= 1) {
    grid.forEach((item) => {
      if (!item) {
        throw new Error("initIsotope: item is null");
      }
      iso = new window.Isotope(item, {
        itemSelector: ".items",
      });
    });
  }

  if (!filtersElem) {
    throw new Error("initIsotope: filtersElem is null");
  }

  filtersElem.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "span")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    if (!filterValue) {
      throw new Error("initIsotope: filterValue is null");
    }
    filterValue = filterValue;
    iso.arrange({ filter: filterValue });
  });

  const radioButtonGroup = (buttonGroup) => {
    if (!buttonGroup) {
      throw new Error("initIsotope: buttonGroup is null");
    }
    buttonGroup.addEventListener("click", (event) => {
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      const activeButton = buttonGroup.querySelector(".active");
      if (!activeButton) {
        throw new Error("initIsotope: activeButton is null");
      }
      activeButton.classList.remove("active");
      event.target.classList.add("active");
    });
  };
  for (var i = 0, len = buttonGroups.length; i < len; i++) {
    const buttonGroup = buttonGroups[i];
    if (!buttonGroup) {
      throw new Error("initIsotope: buttonGroup is null");
    }
    radioButtonGroup(buttonGroup);
  }
};

export default initIsotope;

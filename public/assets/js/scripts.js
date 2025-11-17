if (typeof window !== "undefined") {
  if (typeof window.WOW !== "undefined") {
    new WOW({
      animateClass: "animated",
      offset: 100,
    }).init();
  } else {
    // Protector: evitar error si la librería WOW no se ha cargado
    // (puede ocurrir por orden de scripts o por carga diferida).
    // Registramos una advertencia para facilitar el debug.
    // eslint-disable-next-line no-console
    console.warn("WOW no está disponible — animaciones deshabilitadas.");
  }
}

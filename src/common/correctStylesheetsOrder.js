export default function correctStylesheetsOrder({ preview, lightMode }) {
  let previewStylesheet = document.querySelector(
    `link[href="/landing-preview/css/preview-style.css"]`,
  );
  let globalDarkStylesheet = document.querySelector(
    `link[href="/assets/dark/css/style.css"]`,
  );
  let globalLightStylesheet = document.querySelector(
    `link[href="/assets/light/css/style.css"]`,
  );
  let pluginsDarkStylesheet = document.querySelector(
    `link[href="/assets/dark/css/plugins.css"]`,
  );
  let pluginsLightStylesheet = document.querySelector(
    `link[href="/assets/light/css/plugins.css"]`,
  );

  if (lightMode && !preview) {
    document.querySelector(`noscript`).before(pluginsLightStylesheet);
    document.querySelector(`noscript`).before(globalLightStylesheet);

    let pluginsStylesheets = document.querySelectorAll(
      `link[href="/assets/light/css/plugins.css"]`,
    );
    if (pluginsStylesheets.length > 1) {
      pluginsStylesheets[0].remove();
    }

    let globalStylesheets = document.querySelectorAll(
      `link[href="/assets/light/css/style.css"]`,
    );
    if (globalStylesheets.length > 1) {
      globalStylesheets[0].remove();
    }
  }
  if (!lightMode && !preview) {
    document.querySelector(`noscript`).before(pluginsDarkStylesheet);
    document.querySelector(`noscript`).before(globalDarkStylesheet);

    let pluginsStylesheets = document.querySelectorAll(
      `link[href="/assets/dark/css/plugins.css"]`,
    );
    if (pluginsStylesheets.length > 1) {
      pluginsStylesheets[0].remove();
    }

    let globalStylesheets = document.querySelectorAll(
      `link[href="/assets/dark/css/style.css"]`,
    );
    if (globalStylesheets.length > 1) {
      globalStylesheets[0].remove();
    }
  }

  if (preview && previewStylesheet) {
    document.head.append(previewStylesheet);
    if (globalLightStylesheet) globalLightStylesheet.remove();
    if (pluginsLightStylesheet) pluginsLightStylesheet.remove();
  } else if (!preview && previewStylesheet) {
    previewStylesheet.remove();
  }
}

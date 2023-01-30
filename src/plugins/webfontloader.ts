/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

import webFontLoader from "webFontLoader";

export async function loadFonts () {
  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500&display=swap'],
    },
  })
}

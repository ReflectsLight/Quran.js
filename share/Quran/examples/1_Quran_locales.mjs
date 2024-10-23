#!/usr/bin/env node
import { Quran } from "@0x1eef/quran";

(() => {
  const locales = Object.keys(Quran.locales)
  locales.forEach((key) => {
    const locale = Quran.locales[key];
    console.log("The Noble Quran for ", locale.displayName, " speakers");
  });
  /*
    The Noble Quran for English speakers
    The Noble Quran for العربية speakers
    The Noble Quran for فارسی speakers
  */
})();

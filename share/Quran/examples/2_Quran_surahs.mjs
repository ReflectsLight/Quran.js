#!/usr/bin/env node
import { Quran } from "@0x1eef/quran";

(() => {
  const surah = Quran.surahs["en"][0];
  const ayah = surah.ayat[0].body;
  console.log(ayah);
  /*
     In the Name of Allah —
     the Most Compassionate, Most Merciful.
   */
})();

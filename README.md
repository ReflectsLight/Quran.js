<p align="center">
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
</p>

## About

[`@0x1eef/quran`](https://www.npmjs.com/package/@0x1eef/quran)
provides a programmer's interface to The Noble Quran,
alongside various translations. At the time of writing
there is support for the Arabic, English, and Farsi languages.

## Examples

### Quran.locales

The
[`Quran.locales`](http://0x1eef.github.io/x/Quran.js/classes/Quran.html#locales)
getter provides an object where the
key is a locale name (such as `en`) and the value is a
locale object. The locales returned by this method indicate
what languages the
[`@0x1eef/quran`](https://www.npmjs.com/package/@0x1eef/quran)
library supports:

```typescript
#!/usr/bin/env node
import { Quran } from "@0x1eef/quran";

(() => {
  const locales = Object.keys(Quran.locales);
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
```

### Quran.surahs

The
[`Quran.surahs`](http://0x1eef.github.io/x/Quran.js/classes/Quran.html#surahs-1)
getter provides an object where the key
is a locale name (such as `en`) and the value is a surah
object. For example:

```typescript
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
```

## Documentation

A complete API reference is available at [0x1eef.github.io/x/Quran.js](https://0x1eef.github.io/x/Quran.js)

## Install

[`@0x1eef/quran`](https://www.npmjs.com/package/@0x1eef/quran)
is available via npm:

	npm i @0x1eef/quran

## Credit

**Translations**

* English (The Clear Quran) by Dr. Mustafa Khattab
* Farsi by Hussain Ansarian

## Sources

* [github.com/@ReflectsLight](https://github.com/ReflectsLight/Quran.js)
* [gitlab.com/@ReflectsLight](https://gitlab.com/ReflectsLight/Quran.js)
* [codeberg.org/@ReflectsLight](https://codeberg.org/ReflectsLight/Quran.js)
* [brew.bsd.cafe/@ReflectsLight](https://brew.bsd.cafe/ReflectsLight/Quran.js)

## License

The "source code" is released under the terms of the GPL <br>
See [LICENSE](./share/Quran/LICENSE) for details

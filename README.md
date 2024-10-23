## About

This repository provides a programmer's interface
to The Noble Quran, alongside various translations.

## Examples

### Quran.locales

The `Quran.locales` method provides an object where the
key is a locale name (such as `en`) and the value is a
locale object. The locales returned by this method indicate
what languages the `@0x1eef/Quran` library supports:

```typescript
#!/usr/bin/env node
import { Quran } from "@0x1eef/Quran";

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

The `Quran.surahs` method provides an object where the key
is a locale name (such as `en`) and the value is a surah
object. For example:

```typescript
#!/usr/bin/env node
import { Quran } from "@0x1eef/Quran";

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

## Languages

* Arabic
* English
* Farsi

## Install

**FIXME: haven't published to npm yet**

`@0x1eef/Quran` is available via npm:

	npm i @0x1eef/Quran

## Thanks

الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ

Thanks to the translators:
    - English (The Clear Quran) by Dr. Mustafa Khattab
    - Farsi by Hussain Ansarian

## Sources

* [GitHub](https://github.com/ReflectsLight/Quran.js)
* [GitLab](https://gitlab.com/ReflectsLight/Quran.js)
* [brew.bsd.cafe/@ReflectsLight](https://brew.bsd.cafe/ReflectsLight/Quran.js)

## License

The "source code" is released under the terms of the GPL <br>
See [LICENSE](./share/Quran/LICENSE) for details

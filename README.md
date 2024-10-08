# saytest README

To work on the Raspberry Pi 5 you will need to ensure `festival` and `espeak` are installed.

```bash
sudo apt install espeak
sudo apt install festival festvox-kallpc16k
```

Run the app with

```bash
node app.js
```

You can repeat with

```bash
watch -n 10 node app.js
```

## Voices

Use `espeak --voices` to get a list of voices.

```bash
$ espeak --voices
Pty Language Age/Gender VoiceName          File          Other Languages
 5  af             M  afrikaans            other/af
 5  an             M  aragonese            europe/an
 5  bg             -  bulgarian            europe/bg
 5  bs             M  bosnian              europe/bs
 5  ca             M  catalan              europe/ca
 5  cs             M  czech                europe/cs
 5  cy             M  welsh                europe/cy
 5  da             M  danish               europe/da
 5  de             M  german               de
 5  el             M  greek                europe/el
 5  en             M  default              default
 2  en-gb          M  english              en            (en-uk 2)(en 2)
 5  en-sc          M  en-scottish          other/en-sc   (en 4)
 5  en-uk-north    M  english-north        other/en-n    (en-uk 3)(en 5)
 5  en-uk-rp       M  english_rp           other/en-rp   (en-uk 4)(en 5)
 5  en-uk-wmids    M  english_wmids        other/en-wm   (en-uk 9)(en 9)
 2  en-us          M  english-us           en-us         (en-r 5)(en 3)
 5  en-wi          M  en-westindies        other/en-wi   (en-uk 4)(en 10)
 5  eo             M  esperanto            other/eo
 5  es             M  spanish              europe/es
 5  es-la          M  spanish-latin-am     es-la         (es-mx 6)(es 6)
 5  et             -  estonian             europe/et
 5  fa             -  persian              asia/fa
 5  fa-pin         -  persian-pinglish     asia/fa-pin
 5  fi             M  finnish              europe/fi
 5  fr-be          M  french-Belgium       europe/fr-be  (fr 8)
 5  fr-fr          M  french               fr            (fr 5)
 5  ga             -  irish-gaeilge        europe/ga
 5  grc            M  greek-ancient        other/grc
 5  hi             M  hindi                asia/hi
 5  hr             M  croatian             europe/hr     (hbs 5)
 5  hu             M  hungarian            europe/hu
 5  hy             M  armenian             asia/hy
 5  hy-west        M  armenian-west        asia/hy-west  (hy 8)
 5  id             M  indonesian           asia/id
 5  is             M  icelandic            europe/is
 5  it             M  italian              europe/it
 5  jbo            -  lojban               other/jbo
 5  ka             -  georgian             asia/ka
 5  kn             -  kannada              asia/kn
 5  ku             M  kurdish              asia/ku
 5  la             M  latin                other/la
 5  lfn            M  lingua_franca_nova   other/lfn
 5  lt             M  lithuanian           europe/lt
 5  lv             M  latvian              europe/lv
 5  mk             M  macedonian           europe/mk
 5  ml             M  malayalam            asia/ml
 5  ms             M  malay                asia/ms
 5  ne             M  nepali               asia/ne
 5  nl             M  dutch                europe/nl
 5  no             M  norwegian            europe/no     (nb 5)
 5  pa             -  punjabi              asia/pa
 5  pl             M  polish               europe/pl
 5  pt-br          M  brazil               pt            (pt 5)
 5  pt-pt          M  portugal             europe/pt-pt  (pt 6)
 5  ro             M  romanian             europe/ro
 5  ru             M  russian              europe/ru
 5  sk             M  slovak               europe/sk
 5  sq             M  albanian             europe/sq
 5  sr             M  serbian              europe/sr
 5  sv             M  swedish              europe/sv
 5  sw             M  swahili-test         other/sw
 5  ta             M  tamil                asia/ta
 5  tr             M  turkish              asia/tr
 5  vi             M  vietnam              asia/vi
 5  vi-hue         M  vietnam_hue          asia/vi-hue
 5  vi-sgn         M  vietnam_sgn          asia/vi-sgn
 5  zh             M  Mandarin             asia/zh
 5  zh-yue         M  cantonese            asia/zh-yue   (yue 5)(zhy 5)
```
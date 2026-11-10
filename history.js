// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "Navigating the 'No': Mastering Constructive Refusals in High-Stakes Deals",
    "date": "2026-10-16T03:48:14.882148",
    "duration_sec": 1387.78,
    "duration_min": 23.13,
    "video_file": "podcast_ep1_20261016_032704.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "Die Kunst des Kompromisses: Verhandlungstaktiken für nachhaltige Partnerschaften",
    "date": "2026-10-17T11:59:09.853608",
    "duration_sec": 1358.45,
    "duration_min": 22.64,
    "video_file": "podcast_ep2_20261017_113814.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "Die Kunst der kritischen Rückmeldung: Konstruktiv führen, exzellent entwickeln",
    "date": "2026-10-18T05:59:19.295381",
    "duration_sec": 1479.79,
    "duration_min": 24.66,
    "video_file": "podcast_ep3_20261018_053635.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "Die Macht der Überzeugung: Strategien für wirkungsvolle Argumentation im Business",
    "date": "2026-10-19T06:13:47.469388",
    "duration_sec": 1481.52,
    "duration_min": 24.69,
    "video_file": "podcast_ep4_20261019_055522.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "Die Kunst der stillen Zustimmung: Nonverbale Signale im internationalen Geschäftsleben meistern",
    "date": "2026-10-20T06:07:48.199649",
    "duration_sec": 1485.17,
    "duration_min": 24.75,
    "video_file": "podcast_ep5_20261020_054655.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "Die Kunst des stillen Einwand: Subtile Stimmungsänderungen und nonverbale Signale in wichtigen Verhandlungen erkennen und steuern",
    "date": "2026-10-21T06:15:10.041008",
    "duration_sec": 1501.15,
    "duration_min": 25.02,
    "video_file": "podcast_ep6_20261021_055059.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 7,
    "topic": "Die Kunst der strategischen Schweigsamkeit: Wann Reden Silber und Schweigen Gold ist",
    "date": "2026-10-22T06:18:55.468127",
    "duration_sec": 1562.83,
    "duration_min": 26.05,
    "video_file": "podcast_ep7_20261022_055348.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 8,
    "topic": "Die Kunst der strategischen Antwort: Präzision und Wirkung in entscheidenden Momenten",
    "date": "2026-10-23T06:16:10.030157",
    "duration_sec": 1388.95,
    "duration_min": 23.15,
    "video_file": "podcast_ep8_20261023_055208.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "Die Kunst der strategischen Vorlage: Wie Sie Ihre Agenda proaktiv gestalten",
    "date": "2026-10-24T05:57:11.818403",
    "duration_sec": 1283.9,
    "duration_min": 21.4,
    "video_file": "podcast_ep9_20261024_053507.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "Die Kunst des strategischen Rückzugs: Wann Loslassen Stärke beweist",
    "date": "2026-10-25T06:13:40.561194",
    "duration_sec": 1467.86,
    "duration_min": 24.46,
    "video_file": "podcast_ep10_20261025_055045.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "Die Kunst der diplomatischen Eskalation: Konflikte souverän nach oben tragen",
    "date": "2026-10-26T06:19:01.236669",
    "duration_sec": 1522.8,
    "duration_min": 25.38,
    "video_file": "podcast_ep11_20261026_055333.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "Die Kunst der strategischen Unterbrechung: Klare Grenzen setzen, Gespräche lenken",
    "date": "2026-10-27T06:28:12.713781",
    "duration_sec": 1404.45,
    "duration_min": 23.41,
    "video_file": "podcast_ep12_20261027_060645.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 13,
    "topic": "Die Kunst der indirekten Einflussnahme: Strategien subtiler Überzeugung im Führungsalltag",
    "date": "2026-10-29T07:05:49.054280",
    "duration_sec": 1303.8,
    "duration_min": 21.73,
    "video_file": "podcast_ep13_20261029_065204.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 14,
    "topic": "Die Kunst der strategischen Allianz: Partnerschaften knüpfen und pflegen für gemeinsamen Erfolg",
    "date": "2026-10-30T07:20:09.581488",
    "duration_sec": 1473.14,
    "duration_min": 24.55,
    "video_file": "podcast_ep14_20261030_065603.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 15,
    "topic": "Die Kunst der strategischen Entschuldigung: Vertrauen wiederherstellen nach Fehlern im Management",
    "date": "2026-10-31T07:10:45.109727",
    "duration_sec": 1341.36,
    "duration_min": 22.36,
    "video_file": "podcast_ep15_20261031_065008.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 16,
    "topic": "Die Kunst der strategischen Geduld: Erfolg durch bewusstes Zuwarten in Verhandlungen",
    "date": "2026-11-01T07:30:19.451202",
    "duration_sec": 1389.84,
    "duration_min": 23.16,
    "video_file": "podcast_ep16_20261101_071612.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 17,
    "topic": "Die Kunst des strategischen 'Nein-Sagens': Grenzen setzen, ohne zu verletzen",
    "date": "2026-11-02T07:44:40.750051",
    "duration_sec": 1437.41,
    "duration_min": 23.96,
    "video_file": "podcast_ep17_20261102_073026.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 18,
    "topic": "Die Kunst der strategischen Akzeptanz: Zustimmung formell und informell meistern",
    "date": "2026-11-03T08:07:39.243565",
    "duration_sec": 1460.64,
    "duration_min": 24.34,
    "video_file": "podcast_ep18_20261103_074512.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 19,
    "topic": "Die Kunst des strategischen Nachhakens: Beharrlichkeit trifft Eleganz im Geschäftsleben",
    "date": "2026-11-04T07:44:22.518266",
    "duration_sec": 1463.71,
    "duration_min": 24.4,
    "video_file": "podcast_ep19_20261104_072237.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 20,
    "topic": "Die Kunst der strategischen Zugeständnisse: Souverän verhandeln, ohne zu viel zu geben",
    "date": "2026-11-05T08:10:55.196557",
    "duration_sec": 1351.82,
    "duration_min": 22.53,
    "video_file": "podcast_ep20_20261105_074915.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 21,
    "topic": "Die Kunst der strategischen Informationskontrolle: Wissen als Waffe im Geschäftsleben",
    "date": "2026-11-06T08:07:20.453288",
    "duration_sec": 1372.58,
    "duration_min": 22.88,
    "video_file": "podcast_ep21_20261106_074826.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 22,
    "topic": "Die Kunst der strategischen Positionierung: Ihre Agenda erfolgreich im Top-Management platzieren",
    "date": "2026-11-07T07:15:59.772473",
    "duration_sec": 1370.73,
    "duration_min": 22.85,
    "video_file": "podcast_ep22_20261107_065611.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 23,
    "topic": "Die Kunst der strategischen Distanzierung: Emotionen managen und professionelle Grenzen wahren",
    "date": "2026-11-08T07:24:33.323204",
    "duration_sec": 1366.2,
    "duration_min": 22.77,
    "video_file": "podcast_ep23_20261108_070250.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 24,
    "topic": "Die Kunst der strategischen Annahme: Erfolgreiche Positionierung durch geschicktes Ja-Sagen",
    "date": "2026-11-09T08:08:56.652053",
    "duration_sec": 1366.87,
    "duration_min": 22.78,
    "video_file": "podcast_ep24_20261109_074811.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 25,
    "topic": "Die Kunst der strategischen Agenda-Umleitung: Wenn Pläne scheitern, wie Sie das Ruder herumreißen",
    "date": "2026-11-10T08:21:08.327000",
    "duration_sec": 1290.07,
    "duration_min": 21.5,
    "video_file": "podcast_ep25_20261110_080818.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }

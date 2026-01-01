const QUESTIONS_POOL = [
  {
    "question": "Quanti Scudetti ha vinto la Juventus?",
    "options": [
      "38",
      "36",
      "35",
      "37"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto l'Inter?",
    "options": [
      "20",
      "19",
      "22",
      "21"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Milan?",
    "options": [
      "21",
      "20",
      "18",
      "19"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Genoa?",
    "options": [
      "11",
      "9",
      "10",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "options": [
      "6",
      "7",
      "9",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Torino?",
    "options": [
      "6",
      "9",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto la Roma?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto la Lazio?",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto la Fiorentina?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto la Sampdoria?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto l'Hellas Verona?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "options": [
      "0",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2024/25?",
    "options": [
      "Napoli",
      "Milan",
      "Bologna",
      "Lazio"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2023/24?",
    "options": [
      "Juventus",
      "Torino",
      "Inter",
      "Genoa"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2022/23?",
    "options": [
      "Lazio",
      "Genoa",
      "Cagliari",
      "Napoli"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2021/22?",
    "options": [
      "Sampdoria",
      "Genoa",
      "Lazio",
      "Milan"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2020/21?",
    "options": [
      "Milan",
      "Genoa",
      "Sampdoria",
      "Inter"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2019/20?",
    "options": [
      "Sampdoria",
      "Genoa",
      "Juventus",
      "Torino"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2018/19?",
    "options": [
      "Cagliari",
      "Lazio",
      "Juventus",
      "Fiorentina"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2017/18?",
    "options": [
      "Hellas Verona",
      "Lazio",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2016/17?",
    "options": [
      "Juventus",
      "Sampdoria",
      "Inter",
      "Torino"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2015/16?",
    "options": [
      "Bologna",
      "Juventus",
      "Fiorentina",
      "Hellas Verona"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2014/15?",
    "options": [
      "Juventus",
      "Bologna",
      "Hellas Verona",
      "Torino"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2013/14?",
    "options": [
      "Sampdoria",
      "Hellas Verona",
      "Juventus",
      "Genoa"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2012/13?",
    "options": [
      "Juventus",
      "Fiorentina",
      "Lazio",
      "Sampdoria"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2011/12?",
    "options": [
      "Juventus",
      "Hellas Verona",
      "Roma",
      "Cagliari"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2010/11?",
    "options": [
      "Milan",
      "Hellas Verona",
      "Inter",
      "Cagliari"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2009/10?",
    "options": [
      "Hellas Verona",
      "Inter",
      "Torino",
      "Genoa"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2008/09?",
    "options": [
      "Napoli",
      "Sampdoria",
      "Inter",
      "Torino"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2007/08?",
    "options": [
      "Inter",
      "Hellas Verona",
      "Juventus",
      "Napoli"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2006/07?",
    "options": [
      "Torino",
      "Milan",
      "Hellas Verona",
      "Inter"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2005/06?",
    "options": [
      "Inter",
      "Napoli",
      "Sampdoria",
      "Hellas Verona"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2003/04?",
    "options": [
      "Torino",
      "Hellas Verona",
      "Sampdoria",
      "Milan"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2002/03?",
    "options": [
      "Torino",
      "Inter",
      "Juventus",
      "Bologna"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2001/02?",
    "options": [
      "Sampdoria",
      "Fiorentina",
      "Lazio",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 2000/01?",
    "options": [
      "Fiorentina",
      "Genoa",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1999/00?",
    "options": [
      "Milan",
      "Lazio",
      "Inter",
      "Napoli"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1998/99?",
    "options": [
      "Milan",
      "Bologna",
      "Hellas Verona",
      "Juventus"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1997/98?",
    "options": [
      "Juventus",
      "Milan",
      "Hellas Verona",
      "Torino"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1996/97?",
    "options": [
      "Napoli",
      "Roma",
      "Juventus",
      "Cagliari"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1995/96?",
    "options": [
      "Hellas Verona",
      "Milan",
      "Roma",
      "Fiorentina"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1994/95?",
    "options": [
      "Inter",
      "Juventus",
      "Lazio",
      "Hellas Verona"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1993/94?",
    "options": [
      "Milan",
      "Genoa",
      "Cagliari",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1992/93?",
    "options": [
      "Milan",
      "Sampdoria",
      "Juventus",
      "Torino"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1991/92?",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Lazio"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1990/91?",
    "options": [
      "Genoa",
      "Hellas Verona",
      "Sampdoria",
      "Napoli"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1989/90?",
    "options": [
      "Napoli",
      "Sampdoria",
      "Lazio",
      "Bologna"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1988/89?",
    "options": [
      "Fiorentina",
      "Cagliari",
      "Inter",
      "Torino"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1987/88?",
    "options": [
      "Napoli",
      "Juventus",
      "Milan",
      "Sampdoria"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1986/87?",
    "options": [
      "Napoli",
      "Roma",
      "Bologna",
      "Genoa"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1985/86?",
    "options": [
      "Juventus",
      "Genoa",
      "Napoli",
      "Fiorentina"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1984/85?",
    "options": [
      "Juventus",
      "Genoa",
      "Cagliari",
      "Hellas Verona"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1983/84?",
    "options": [
      "Roma",
      "Torino",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1982/83?",
    "options": [
      "Inter",
      "Bologna",
      "Roma",
      "Genoa"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1981/82?",
    "options": [
      "Inter",
      "Cagliari",
      "Juventus",
      "Genoa"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1980/81?",
    "options": [
      "Milan",
      "Bologna",
      "Hellas Verona",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1979/80?",
    "options": [
      "Hellas Verona",
      "Lazio",
      "Inter",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto lo Scudetto nella stagione 1978/79?",
    "options": [
      "Genoa",
      "Milan",
      "Lazio",
      "Juventus"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Real Madrid?",
    "options": [
      "14",
      "16",
      "15",
      "17"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Milan?",
    "options": [
      "8",
      "6",
      "9",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Liverpool?",
    "options": [
      "6",
      "7",
      "8",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Bayern München?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Barcelona?",
    "options": [
      "5",
      "6",
      "4",
      "7"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto l'Ajax?",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto l'Inter?",
    "options": [
      "2",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Manchester United?",
    "options": [
      "4",
      "5",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto la Juventus?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Porto?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Benfica?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Quanti titoli di UEFA Champions League ha vinto il Chelsea?",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Quale club ha vinto più Champions League?",
    "options": [
      "Liverpool",
      "Milan",
      "Real Madrid",
      "Bayern München"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2024/25?",
    "options": [
      "Manchester City",
      "Benfica",
      "Paris Saint-Germain",
      "Ajax"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2023/24?",
    "options": [
      "Bayern München",
      "Real Madrid",
      "Manchester City",
      "Benfica"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2022/23?",
    "options": [
      "Real Madrid",
      "Manchester City",
      "Porto",
      "Benfica"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2021/22?",
    "options": [
      "Liverpool",
      "Real Madrid",
      "Inter",
      "Paris Saint-Germain"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2020/21?",
    "options": [
      "Real Madrid",
      "Bayern München",
      "Chelsea",
      "Porto"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2019/20?",
    "options": [
      "Paris Saint-Germain",
      "Milan",
      "Juventus",
      "Bayern München"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "Chi ha vinto la Champions League nella stagione 2018/19?",
    "options": [
      "Manchester United",
      "Real Madrid",
      "Liverpool",
      "Ajax"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "options": [
      "5",
      "3",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Quanti secondi posti al Mondiale ha ottenuto l’Italia?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "Quanti terzi posti al Mondiale ha l’Italia?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "Quanti quarti posti al Mondiale ha l’Italia?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "Quanti secondi posti agli Europei ha l’Italia?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Quante medaglie d’oro olimpiche ha vinto l’Italia nel calcio?",
    "options": [
      "2",
      "0",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "Quante medaglie di bronzo olimpiche ha l’Italia nel calcio?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "Quale di questi anni è una vittoria Mondiale dell’Italia?",
    "options": [
      "2010",
      "2006",
      "1974",
      "1998"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "Quale di questi anni è una vittoria all’Europeo dell’Italia?",
    "options": [
      "2008",
      "2016",
      "1984",
      "2021"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "Il fuorigioco è punito con:",
    "options": [
      "Calcio di punizione indiretto",
      "Calcio d’angolo",
      "Calcio di punizione diretto",
      "Rimessa dal fondo"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "options": [
      "Quando l’arbitro fischia",
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Quale fallo in area comporta rigore?",
    "options": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Fuorigioco",
      "Rimessa irregolare",
      "Ostruzione senza contatto"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Quante sostituzioni standard sono consentite nei regolamenti moderni?",
    "options": [
      "Tre",
      "Due",
      "Cinque (eventuale sesta nei supplementari se previsto)",
      "Sei senza limiti"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Il fuorigioco NON si applica quando il giocatore riceve da:",
    "options": [
      "Punizione indiretto",
      "Rimessa laterale, calcio d’angolo o rimessa dal fondo",
      "Retropassaggio volontario di un compagno",
      "Punizione diretto"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Dopo un fuorigioco, la ripresa corretta è:",
    "options": [
      "Calcio di punizione diretto",
      "Rimessa laterale",
      "Calcio d’angolo",
      "Calcio di punizione indiretto"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Quando un rigore è regolarmente eseguito?",
    "options": [
      "Solo dopo un rimbalzo",
      "Quando il pallone è calciato e si muove in avanti",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Un fallo di mano punibile fuori area comporta:",
    "options": [
      "Rimessa dal fondo",
      "Ripresa a terra",
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Il portiere può prendere con le mani un retropassaggio volontario del compagno?",
    "options": [
      "Sì, se l’arbitro concede vantaggio",
      "Sì solo se fuori area",
      "Sì sempre",
      "No, salvo che il passaggio non sia di testa/petto/coscia"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Su un calcio di punizione diretto, la distanza minima della barriera è:",
    "options": [
      "12 metri",
      "7 metri",
      "10 metri",
      "9 metri"
    ],
    "correctIndex": 2,
    "difficulty": 10
  }
];

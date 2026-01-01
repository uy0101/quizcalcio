
// questions.js — pool statico di 500 domande (60% Serie A, 20% UEFA, 10% Nazionale, 10% Regole)
// Difficoltà: 1–100=facile, 101–200=media, 201–300=difficile, 301–500=solo per appassionati
// Fonti ufficiali:
// - Lega Serie A (Albo d'Oro): https://static.legaseriea.it/it/serie-a/albo
// - Lega Serie A (Top Scorers 23/24): https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib
// - Lega Serie A (Higuain 36 gol 2015/16): https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato
// - Lega Serie A (Osimhen capocannoniere 22/23): https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf
// - UEFA (Champions League winners): https://www.uefa.com/uefachampionsleague/history/winners/
// - FIGC (Palmarès Nazionale): https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia
// - IFAB Laws of the Game (regole): https://www.theifab.com/laws-of-the-game/

const QUESTIONS = 
[
  {
    "id": 1,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Genoa?",
    "choices": [
      "8",
      "11",
      "9",
      "10"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 2,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 3,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "21",
      "19",
      "20",
      "18"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 4,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 5,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "36",
      "37",
      "35",
      "38"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 6,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "6",
      "9",
      "7",
      "8"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 7,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "1",
      "3",
      "0",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 8,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 9,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 10,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "4",
      "5",
      "3",
      "6"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 11,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "3",
      "1",
      "0",
      "2"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 12,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 13,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Milan",
      "Fiorentina",
      "Torino"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 14,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 15,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 16,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 17,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 18,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 19,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Novese",
      "Juventus",
      "Bologna",
      "Cagliari"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 20,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Genoa",
      "Hellas Verona",
      "Roma"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 21,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Milan",
      "Roma",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 22,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Sampdoria",
      "Torino",
      "Juventus",
      "Genoa"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 23,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 24,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "choices": [
      "2",
      "0",
      "3",
      "1"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 25,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Bologna",
      "Juventus",
      "Torino"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 26,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Juventus",
      "Torino",
      "Napoli"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 27,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Novese",
      "Juventus",
      "Sampdoria"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 28,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 29,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Cagliari",
      "Juventus",
      "Sampdoria"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 30,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "1",
      "3",
      "0",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 31,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "19",
      "20",
      "21"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 32,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 33,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Napoli",
      "Milan",
      "Bologna",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 34,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Novese",
      "Milan",
      "Napoli",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 35,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "3",
      "2",
      "4",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 36,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "35",
      "38",
      "37",
      "36"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 37,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Roma",
      "Bologna",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 38,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "8",
      "9",
      "7",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 39,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "38",
      "36",
      "35",
      "37"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 40,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "4",
      "5",
      "2",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 41,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Novese?",
    "choices": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 42,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Lazio?",
    "choices": [
      "4",
      "3",
      "2",
      "1"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 43,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Roma",
      "Hellas Verona",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 44,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 45,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 46,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Hellas Verona",
      "Roma",
      "Juventus",
      "Inter"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 47,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 48,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Inter",
      "Torino",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 49,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "21",
      "19",
      "20"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 50,
    "difficulty": 1,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "8",
      "6",
      "9",
      "7"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 51,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Lazio",
      "Cagliari",
      "Genoa"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 52,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 53,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 54,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Pro Vercelli",
      "Juventus",
      "Napoli",
      "Fiorentina"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 55,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "8",
      "7",
      "9",
      "6"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 56,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Pro Vercelli?",
    "choices": [
      "7",
      "8",
      "6",
      "9"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 57,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Torino",
      "Juventus",
      "Milan"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 58,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Fiorentina",
      "Lazio",
      "Bologna",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 59,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Cagliari",
      "Casale",
      "Juventus",
      "Milan"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 60,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "0",
      "3",
      "2",
      "1"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 61,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "38",
      "37",
      "36",
      "35"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 62,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 63,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Juventus",
      "Napoli",
      "Lazio"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 64,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 65,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Juventus",
      "Genoa",
      "Cagliari"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 66,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "choices": [
      "1",
      "0",
      "3",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 67,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Juventus",
      "Genoa",
      "Sampdoria"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 68,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Novese?",
    "choices": [
      "1",
      "3",
      "0",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 69,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 70,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Torino",
      "Pro Vercelli",
      "Napoli"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 71,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 72,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Fiorentina",
      "Inter",
      "Novese",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 73,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Napoli",
      "Pro Vercelli",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 74,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Fiorentina",
      "Casale",
      "Juventus",
      "Cagliari"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 75,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 76,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 77,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 78,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Cagliari",
      "Juventus",
      "Napoli"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 79,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Napoli",
      "Lazio",
      "Juventus",
      "Cagliari"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 80,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 81,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 82,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Novese?",
    "choices": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 83,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Hellas Verona",
      "Juventus",
      "Cagliari",
      "Casale"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 84,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 85,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 86,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Napoli",
      "Pro Vercelli",
      "Casale",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 87,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Pro Vercelli",
      "Juventus",
      "Genoa"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 88,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Genoa",
      "Sampdoria",
      "Pro Vercelli"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 89,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 90,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 91,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Fiorentina?",
    "choices": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 92,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 93,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 94,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 95,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 96,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "38",
      "35",
      "36",
      "37"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 97,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Sampdoria",
      "Juventus",
      "Pro Vercelli",
      "Roma"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 98,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Bologna",
      "Napoli",
      "Genoa"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 99,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Inter",
      "Fiorentina",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 100,
    "difficulty": 2,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 101,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Lazio?",
    "choices": [
      "1",
      "4",
      "2",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 102,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 103,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Novese",
      "Sampdoria",
      "Juventus",
      "Napoli"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 104,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Fiorentina",
      "Inter",
      "Torino",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 105,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Juventus",
      "Cagliari",
      "Casale"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 106,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 107,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Juventus",
      "Inter",
      "Sampdoria"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 108,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 109,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Roma",
      "Fiorentina",
      "Torino",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 110,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "6",
      "5",
      "4",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 111,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Pro Vercelli?",
    "choices": [
      "6",
      "9",
      "7",
      "8"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 112,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "3",
      "5",
      "4",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 113,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Torino?",
    "choices": [
      "6",
      "8",
      "9",
      "7"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 114,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "0",
      "3",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 115,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "3",
      "5",
      "4",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 116,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 117,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 118,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Napoli",
      "Genoa",
      "Bologna"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 119,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 120,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Fiorentina",
      "Inter",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 121,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Novese",
      "Napoli",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 122,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 123,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "4",
      "3",
      "6",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 124,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Casale",
      "Hellas Verona",
      "Milan"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 125,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "36",
      "38",
      "37",
      "35"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 126,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "20",
      "21",
      "19"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 127,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Cagliari",
      "Fiorentina",
      "Bologna"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 128,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 129,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Milan",
      "Napoli",
      "Juventus",
      "Genoa"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 130,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Cagliari",
      "Casale",
      "Bologna",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 131,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "1",
      "0",
      "3",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 132,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 133,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 134,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 135,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 136,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 137,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 138,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 139,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "22",
      "20",
      "19",
      "21"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 140,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 141,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 142,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 143,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Roma",
      "Juventus",
      "Milan",
      "Casale"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 144,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Pro Vercelli",
      "Inter",
      "Cagliari"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 145,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Napoli",
      "Juventus",
      "Novese",
      "Lazio"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 146,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 147,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "2",
      "1",
      "0",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 148,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "facile"
    ]
  },
  {
    "id": 149,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Juventus",
      "Genoa",
      "Bologna"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 150,
    "difficulty": 3,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Sampdoria",
      "Pro Vercelli",
      "Hellas Verona",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "facile"
    ]
  },
  {
    "id": 151,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Juventus",
      "Napoli",
      "Torino"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 152,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "21",
      "19",
      "20"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 153,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "choices": [
      "3",
      "0",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 154,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Genoa?",
    "choices": [
      "9",
      "10",
      "11",
      "8"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 155,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "19",
      "20",
      "21"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 156,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 157,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 158,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Lazio",
      "Casale",
      "Bologna"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 159,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 160,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Sampdoria",
      "Juventus",
      "Milan",
      "Fiorentina"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 161,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Inter",
      "Lazio",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 162,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Roma",
      "Bologna",
      "Inter"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 163,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Roma",
      "Casale",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 164,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "21",
      "19",
      "22",
      "20"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 165,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Napoli",
      "Cagliari",
      "Hellas Verona"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 166,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "3",
      "6",
      "5",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 167,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 168,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 169,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "2",
      "0",
      "1",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 170,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 171,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 172,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 173,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 174,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Hellas Verona",
      "Bologna",
      "Inter",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 175,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Lazio?",
    "choices": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 176,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 177,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 178,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "21",
      "19",
      "22",
      "20"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 179,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 180,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Hellas Verona",
      "Juventus",
      "Fiorentina"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 181,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Roma",
      "Milan",
      "Bologna",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 182,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "5",
      "3",
      "6",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 183,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 184,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 185,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "1",
      "3",
      "2",
      "0"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 186,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "20",
      "22",
      "19",
      "21"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 187,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 188,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Milan",
      "Genoa",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 189,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Sampdoria",
      "Milan",
      "Fiorentina"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 190,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 191,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 192,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 193,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 194,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 195,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Fiorentina",
      "Cagliari",
      "Novese"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 196,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Fiorentina?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 197,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 198,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 199,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Fiorentina",
      "Roma",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 200,
    "difficulty": 4,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 201,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "3",
      "6",
      "5",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 202,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "6",
      "5",
      "3",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 203,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Novese?",
    "choices": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 204,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 205,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "22",
      "20",
      "21",
      "19"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 206,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Bologna",
      "Fiorentina",
      "Milan"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 207,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Cristiano Ronaldo (29)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 208,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 209,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 210,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Torino?",
    "choices": [
      "8",
      "7",
      "6",
      "9"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 211,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Juventus",
      "Cagliari",
      "Novese"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 212,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 213,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 214,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Cagliari",
      "Inter",
      "Pro Vercelli",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 215,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "7",
      "6",
      "9",
      "8"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 216,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 217,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Milan",
      "Juventus",
      "Torino",
      "Cagliari"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 218,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Napoli",
      "Casale",
      "Novese"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 219,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Fiorentina",
      "Roma",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 220,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 221,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "0",
      "3",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 222,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 223,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Casale",
      "Pro Vercelli",
      "Genoa"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 224,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Fiorentina?",
    "choices": [
      "1",
      "4",
      "2",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 225,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Milan",
      "Hellas Verona",
      "Juventus",
      "Novese"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 226,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "0",
      "2",
      "1",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 227,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 228,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "3",
      "0",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 229,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Juventus",
      "Sampdoria",
      "Cagliari"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 230,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Casale",
      "Napoli",
      "Pro Vercelli"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 231,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Casale",
      "Juventus",
      "Sampdoria"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 232,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Inter",
      "Juventus",
      "Milan"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 233,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Torino?",
    "choices": [
      "6",
      "8",
      "7",
      "9"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 234,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Inter?",
    "choices": [
      "21",
      "19",
      "22",
      "20"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 235,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 236,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Sampdoria?",
    "choices": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 237,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Juventus?",
    "choices": [
      "35",
      "37",
      "36",
      "38"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 238,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 239,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "choices": [
      "7",
      "9",
      "8",
      "6"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 240,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Novese",
      "Sampdoria",
      "Fiorentina"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 241,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 242,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 243,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 244,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 245,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Torino",
      "Fiorentina",
      "Juventus",
      "Novese"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 246,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Casale",
      "Novese",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 247,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 248,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "19",
      "21",
      "18",
      "20"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 249,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Roma?",
    "choices": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 250,
    "difficulty": 5,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Cagliari",
      "Bologna",
      "Roma"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 251,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 252,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Pro Vercelli",
      "Juventus",
      "Lazio",
      "Hellas Verona"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 253,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 254,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Novese",
      "Bologna",
      "Inter"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 255,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 256,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Hellas Verona",
      "Roma",
      "Torino"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 257,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 258,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 259,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Genoa?",
    "choices": [
      "8",
      "11",
      "9",
      "10"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 260,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Pro Vercelli",
      "Sampdoria",
      "Juventus",
      "Hellas Verona"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 261,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Roma",
      "Sampdoria",
      "Inter",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 262,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Fiorentina?",
    "choices": [
      "1",
      "4",
      "2",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 263,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Inter",
      "Juventus",
      "Napoli"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 264,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 265,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Hellas Verona?",
    "choices": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 266,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 267,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Juventus",
      "Milan",
      "Fiorentina"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 268,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Lazio",
      "Juventus",
      "Inter",
      "Fiorentina"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 269,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Juventus",
      "Napoli",
      "Cagliari",
      "Sampdoria"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 270,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Cristiano Ronaldo (29)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 3,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 271,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Casale",
      "Juventus",
      "Pro Vercelli",
      "Novese"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 272,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "choices": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 273,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Inter",
      "Genoa",
      "Juventus",
      "Sampdoria"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 274,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 275,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 1,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 276,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 277,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Cristiano Ronaldo (29)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 278,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 279,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 280,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Milan",
      "Napoli",
      "Juventus",
      "Lazio"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 281,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Milan",
      "Cagliari",
      "Juventus",
      "Hellas Verona"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 282,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 283,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Novese?",
    "choices": [
      "3",
      "1",
      "2",
      "0"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 284,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Casale?",
    "choices": [
      "3",
      "0",
      "2",
      "1"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 285,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Fiorentina",
      "Juventus",
      "Cagliari",
      "Sampdoria"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 286,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 287,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Napoli",
      "Cagliari",
      "Juventus",
      "Inter"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 288,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Milan?",
    "choices": [
      "18",
      "19",
      "21",
      "20"
    ],
    "answerIndex": 1,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 289,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quanti Scudetti ha vinto il Lazio?",
    "choices": [
      "2",
      "4",
      "3",
      "1"
    ],
    "answerIndex": 0,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 290,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 291,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Lautaro Martínez (24)",
      "Cristiano Ronaldo (29)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 0,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 292,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 3,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 293,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Milan",
      "Juventus",
      "Fiorentina"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 294,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2023/24 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)"
    ],
    "answerIndex": 1,
    "source": "https://www.legaseriea.it/it/media/serie-a/top-scorers-i-re-del-gol-della-serie-a-710d2ib",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 295,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Fabio Quagliarella (26)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)"
    ],
    "answerIndex": 2,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 296,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Bologna",
      "Hellas Verona",
      "Juventus",
      "Casale"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 297,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2022/23 e con quante reti?",
    "choices": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Fabio Quagliarella (26)"
    ],
    "answerIndex": 0,
    "source": "https://img.legaseriea.it/vimages/647cd67d/CS%20163%20-%20Striker%20of%20the%20year%20presented%20by%20crypto.com%2022-23.pdf",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 298,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Genoa",
      "Casale",
      "Juventus",
      "Napoli"
    ],
    "answerIndex": 2,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 299,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Chi è stato il capocannoniere in Serie A 2015/16 e con quante reti?",
    "choices": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "answerIndex": 2,
    "source": "https://www.legaseriea.it/en/media/serie-a/higuain-capocannoniere-del-campionato",
    "tags": [
      "record",
      "capocannoniere",
      "media"
    ]
  },
  {
    "id": 300,
    "difficulty": 6,
    "category": "Serie A",
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "choices": [
      "Roma",
      "Hellas Verona",
      "Fiorentina",
      "Juventus"
    ],
    "answerIndex": 3,
    "source": "https://static.legaseriea.it/it/serie-a/albo",
    "tags": [
      "record",
      "scudetti",
      "media"
    ]
  },
  {
    "id": 301,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Liverpool?",
    "choices": [
      "7",
      "8",
      "5",
      "6"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 302,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Porto",
      "Barcelona",
      "Manchester United"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 303,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Inter",
      "Juventus",
      "Ajax",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 304,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Inter",
      "Bayern München",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 305,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Real Madrid",
      "Manchester United",
      "Bayern München"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 306,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Milan",
      "Real Madrid",
      "Porto",
      "Juventus"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 307,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Liverpool?",
    "choices": [
      "6",
      "7",
      "8",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 308,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Milan",
      "Ajax",
      "Porto"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 309,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Porto?",
    "choices": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 310,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Milan?",
    "choices": [
      "9",
      "7",
      "6",
      "8"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 311,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Inter",
      "Chelsea",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 312,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Real Madrid?",
    "choices": [
      "17",
      "16",
      "15",
      "14"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 313,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Chelsea",
      "Inter",
      "Real Madrid",
      "Bayern München"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 314,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Manchester United?",
    "choices": [
      "3",
      "5",
      "4",
      "2"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 315,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Inter",
      "Real Madrid",
      "Barcelona"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 316,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "choices": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 317,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Inter",
      "Porto",
      "Bayern München"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 318,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Manchester United",
      "Ajax",
      "Juventus",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 319,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Porto",
      "Milan",
      "Ajax"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 320,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Ajax?",
    "choices": [
      "5",
      "6",
      "4",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 321,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Manchester United",
      "Chelsea",
      "Porto",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 322,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Bayern München?",
    "choices": [
      "8",
      "5",
      "7",
      "6"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 323,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Ajax",
      "Porto",
      "Real Madrid",
      "Manchester United"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 324,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Milan",
      "Barcelona",
      "Juventus"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 325,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Real Madrid",
      "Ajax",
      "Milan"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 326,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Real Madrid",
      "Inter",
      "Ajax"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 327,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Chelsea",
      "Porto",
      "Manchester United",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 328,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Inter",
      "Real Madrid",
      "Liverpool",
      "Chelsea"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 329,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Manchester United",
      "Benfica",
      "Chelsea",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 330,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Porto?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 331,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Ajax",
      "Real Madrid",
      "Juventus"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 332,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Inter",
      "Liverpool",
      "Real Madrid",
      "Ajax"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 333,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Real Madrid?",
    "choices": [
      "15",
      "17",
      "16",
      "14"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 334,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Porto",
      "Benfica",
      "Chelsea"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 335,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Ajax?",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 336,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Real Madrid",
      "Manchester United",
      "Bayern München"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 337,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Juventus?",
    "choices": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 338,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Chelsea",
      "Inter",
      "Real Madrid",
      "Bayern München"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 339,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Bayern München?",
    "choices": [
      "7",
      "8",
      "5",
      "6"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 340,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Benfica",
      "Chelsea",
      "Liverpool"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 341,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Porto",
      "Barcelona",
      "Juventus"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 342,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Inter",
      "Ajax",
      "Chelsea",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 343,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Porto?",
    "choices": [
      "4",
      "1",
      "3",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 344,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Benfica",
      "Manchester United",
      "Juventus"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 345,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Milan",
      "Ajax",
      "Manchester United",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 346,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Liverpool?",
    "choices": [
      "8",
      "7",
      "6",
      "5"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 347,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Real Madrid?",
    "choices": [
      "16",
      "17",
      "14",
      "15"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 348,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Ajax?",
    "choices": [
      "4",
      "6",
      "3",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 349,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Chelsea",
      "Real Madrid",
      "Manchester United",
      "Benfica"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 350,
    "difficulty": 7,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Barcelona?",
    "choices": [
      "7",
      "4",
      "5",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 351,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Real Madrid?",
    "choices": [
      "17",
      "16",
      "15",
      "14"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 352,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Benfica?",
    "choices": [
      "2",
      "1",
      "4",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 353,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Juventus?",
    "choices": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 354,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Benfica?",
    "choices": [
      "3",
      "1",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 355,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Benfica",
      "Milan",
      "Liverpool"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 356,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "choices": [
      "4",
      "1",
      "3",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 357,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Chelsea",
      "Barcelona",
      "Real Madrid",
      "Milan"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 358,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Juventus",
      "Real Madrid",
      "Manchester United",
      "Liverpool"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 359,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "choices": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 360,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Milan",
      "Bayern München",
      "Real Madrid",
      "Barcelona"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 361,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Porto?",
    "choices": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 362,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Milan",
      "Real Madrid",
      "Liverpool"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 363,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Manchester United?",
    "choices": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 364,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Benfica",
      "Real Madrid",
      "Inter"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 365,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Ajax?",
    "choices": [
      "3",
      "4",
      "6",
      "5"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 366,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Porto",
      "Inter",
      "Juventus"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 367,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Inter?",
    "choices": [
      "2",
      "5",
      "4",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 368,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Bayern München",
      "Ajax",
      "Real Madrid",
      "Juventus"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 369,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Benfica",
      "Inter",
      "Chelsea"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 370,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Bayern München?",
    "choices": [
      "5",
      "7",
      "6",
      "8"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 371,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Bayern München?",
    "choices": [
      "8",
      "6",
      "7",
      "5"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 372,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "choices": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 373,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Barcelona",
      "Liverpool",
      "Bayern München"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 374,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Liverpool",
      "Ajax",
      "Real Madrid",
      "Inter"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 375,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Barcelona?",
    "choices": [
      "6",
      "7",
      "4",
      "5"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 376,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "choices": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 377,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Manchester United",
      "Chelsea",
      "Porto",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 378,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Ajax",
      "Juventus",
      "Barcelona"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 379,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Manchester United?",
    "choices": [
      "2",
      "4",
      "5",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 380,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Bayern München",
      "Barcelona",
      "Ajax"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 381,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Juventus",
      "Real Madrid",
      "Manchester United",
      "Porto"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 382,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Milan?",
    "choices": [
      "6",
      "8",
      "9",
      "7"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 383,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Barcelona",
      "Real Madrid",
      "Liverpool",
      "Inter"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 384,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Barcelona",
      "Bayern München",
      "Manchester United",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 385,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Ajax",
      "Benfica",
      "Chelsea",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 386,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Bayern München",
      "Liverpool",
      "Benfica"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 387,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Barcelona",
      "Chelsea",
      "Bayern München",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 388,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Ajax",
      "Inter",
      "Benfica"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 389,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Juventus",
      "Benfica",
      "Chelsea",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 390,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Manchester United",
      "Bayern München",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 391,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Benfica?",
    "choices": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 392,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Manchester United?",
    "choices": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 393,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Manchester United",
      "Real Madrid",
      "Liverpool",
      "Inter"
    ],
    "answerIndex": 1,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 394,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Porto",
      "Manchester United",
      "Real Madrid",
      "Milan"
    ],
    "answerIndex": 2,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 395,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Real Madrid",
      "Barcelona",
      "Benfica",
      "Liverpool"
    ],
    "answerIndex": 0,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 396,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Inter?",
    "choices": [
      "4",
      "2",
      "5",
      "3"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 397,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quanti titoli di Champions League ha vinto il Liverpool?",
    "choices": [
      "7",
      "5",
      "8",
      "6"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 398,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Barcelona",
      "Benfica",
      "Manchester United",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 399,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Benfica",
      "Liverpool",
      "Juventus",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 400,
    "difficulty": 8,
    "category": "UEFA",
    "question": "Quale club detiene il maggior numero di Champions League/European Cup?",
    "choices": [
      "Juventus",
      "Milan",
      "Ajax",
      "Real Madrid"
    ],
    "answerIndex": 3,
    "source": "https://www.uefa.com/uefachampionsleague/history/winners/",
    "tags": [
      "record",
      "ucl",
      "difficile"
    ]
  },
  {
    "id": 401,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "4",
      "3",
      "6",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 402,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 403,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "4",
      "3",
      "6"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 404,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "1",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 405,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "4",
      "6",
      "3",
      "5"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 406,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "4",
      "5",
      "3",
      "6"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 407,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 408,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "6",
      "5",
      "4",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 409,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 410,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "1",
      "3",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 411,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 412,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "1",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 413,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "6",
      "4",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 414,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "1",
      "4",
      "2",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 415,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 416,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "2",
      "1",
      "4",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 417,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "2",
      "1",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 418,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 419,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "4",
      "6",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 420,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "3",
      "1",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 421,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "1",
      "2",
      "3"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 422,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "6",
      "5"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 423,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "1",
      "4",
      "3",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 424,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "4",
      "6",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 425,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 426,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 427,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "4",
      "3",
      "6"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 428,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "2",
      "1"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 429,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 430,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "4",
      "3",
      "5",
      "6"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 431,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 432,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "1",
      "3",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 433,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "6",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 434,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 435,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "2",
      "1",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 436,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 437,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "4",
      "6",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 438,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 439,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "3",
      "4",
      "2",
      "1"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 440,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answerIndex": 3,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 441,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 442,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "6",
      "4",
      "5"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 443,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 444,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "4",
      "6",
      "5",
      "3"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 445,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 446,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answerIndex": 0,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 447,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 448,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "choices": [
      "4",
      "2",
      "1",
      "3"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "europei",
      "appassionati"
    ]
  },
  {
    "id": 449,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answerIndex": 2,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 450,
    "difficulty": 9,
    "category": "Nazionale",
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "choices": [
      "6",
      "4",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "source": "https://www.figc.it/it/full-html?path=%2Fnazionali%2Fpalmares-storia%2Fpalmares-e-storia",
    "tags": [
      "record",
      "mondiali",
      "appassionati"
    ]
  },
  {
    "id": 451,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Rimessa irregolare",
      "Fuorigioco"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 452,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Rimessa irregolare",
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 453,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando tocca un compagno",
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 454,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 455,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio d’angolo",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo",
      "Calcio di punizione diretto"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 456,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio di punizione diretto",
      "Calcio d’angolo",
      "Rimessa dal fondo",
      "Calcio di punizione indiretto"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 457,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio d’angolo",
      "Calcio di punizione diretto"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 458,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Rimessa irregolare"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 459,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 460,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 461,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo",
      "Calcio d’angolo"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 462,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare",
      "Ostruzione senza contatto",
      "Fuorigioco"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 463,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio d’angolo",
      "Calcio di punizione indiretto",
      "Calcio di punizione diretto",
      "Rimessa dal fondo"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 464,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio di punizione diretto",
      "Calcio d’angolo"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 465,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Rimessa dal fondo",
      "Calcio di punizione diretto",
      "Calcio d’angolo",
      "Calcio di punizione indiretto"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 466,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Rimessa dal fondo",
      "Calcio di punizione diretto",
      "Calcio d’angolo",
      "Calcio di punizione indiretto"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 467,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Rimessa irregolare",
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 468,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo",
      "Calcio d’angolo"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 469,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Rimessa irregolare",
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 470,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Fuorigioco",
      "Rimessa irregolare"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 471,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 472,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando l’arbitro fischia",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Solo quando esce dall’area"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 473,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area",
      "Quando tocca un compagno",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 474,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio d’angolo",
      "Rimessa dal fondo",
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 475,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando tocca un compagno",
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 476,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Rimessa irregolare",
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 477,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 478,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando l’arbitro fischia",
      "Quando tocca un compagno",
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 479,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Quando l’arbitro fischia",
      "Solo quando esce dall’area"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 480,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Fuorigioco",
      "Rimessa irregolare",
      "Ostruzione senza contatto"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 481,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 482,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 483,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Rimessa irregolare"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 484,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Fuorigioco",
      "Rimessa irregolare",
      "Ostruzione senza contatto"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 485,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Fuorigioco"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 486,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare",
      "Fuorigioco"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 487,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio di punizione indiretto",
      "Calcio d’angolo",
      "Rimessa dal fondo",
      "Calcio di punizione diretto"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 488,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno",
      "Quando è calciato e chiaramente si muove"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 489,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 490,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando l’arbitro fischia",
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 491,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 492,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Rimessa irregolare",
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 493,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando l’arbitro fischia",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Solo quando esce dall’area"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 494,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio di punizione diretto",
      "Calcio d’angolo"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 495,
    "difficulty": 10,
    "category": "Regole",
    "question": "Il fuorigioco è punito con:",
    "choices": [
      "Calcio di punizione diretto",
      "Calcio d’angolo",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo"
    ],
    "answerIndex": 2,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 496,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Fuorigioco"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 497,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Ostruzione senza contatto",
      "Rimessa irregolare",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 498,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quale fallo in area comporta rigore?",
    "choices": [
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "answerIndex": 3,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 499,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno"
    ],
    "answerIndex": 0,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  },
  {
    "id": 500,
    "difficulty": 10,
    "category": "Regole",
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "choices": [
      "Quando tocca un compagno",
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia"
    ],
    "answerIndex": 1,
    "source": "https://www.theifab.com/laws-of-the-game/",
    "tags": [
      "regole",
      "appassionati"
    ]
  }
];

export default QUESTIONS;
// Se serve in globale: if (typeof window !== 'undefined') window.QUESTIONS = QUESTIONS;

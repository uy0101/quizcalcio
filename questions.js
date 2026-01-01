const QUESTIONS_POOL = [
  {
    "question": "Quanti Scudetti ha vinto la Juventus?",
    "options": [
      "35",
      "36",
      "38",
      "37"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti conta la Juventus?",
    "options": [
      "37",
      "38",
      "36",
      "35"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Juventus?",
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
    "question": "Qual è il numero di Scudetti di la Juventus?",
    "options": [
      "38",
      "35",
      "36",
      "37"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Indica il totale di Scudetti di la Juventus.",
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
    "question": "Quanti titoli nazionali (Scudetti) ha la Juventus?",
    "options": [
      "36",
      "35",
      "37",
      "38"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Qual è il computo degli Scudetti di la Juventus?",
    "options": [
      "35",
      "37",
      "38",
      "36"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Juventus?",
    "options": [
      "38",
      "37",
      "35",
      "36"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Juventus?",
    "options": [
      "37",
      "38",
      "36",
      "35"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Juventus?",
    "options": [
      "36",
      "38",
      "37",
      "35"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto l'Inter?",
    "options": [
      "22",
      "20",
      "19",
      "21"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti conta l'Inter?",
    "options": [
      "21",
      "22",
      "19",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Di quanti Scudetti può fregiarsi l'Inter?",
    "options": [
      "20",
      "19",
      "21",
      "22"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Qual è il numero di Scudetti di l'Inter?",
    "options": [
      "22",
      "19",
      "21",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Indica il totale di Scudetti di l'Inter.",
    "options": [
      "21",
      "19",
      "22",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha l'Inter?",
    "options": [
      "21",
      "22",
      "20",
      "19"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Qual è il computo degli Scudetti di l'Inter?",
    "options": [
      "22",
      "19",
      "21",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per l'Inter?",
    "options": [
      "20",
      "19",
      "21",
      "22"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da l'Inter?",
    "options": [
      "19",
      "21",
      "20",
      "22"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato l'Inter?",
    "options": [
      "19",
      "22",
      "21",
      "20"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Milan?",
    "options": [
      "18",
      "20",
      "21",
      "19"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti conta il Milan?",
    "options": [
      "19",
      "20",
      "18",
      "21"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Milan?",
    "options": [
      "21",
      "18",
      "20",
      "19"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Qual è il numero di Scudetti di il Milan?",
    "options": [
      "20",
      "21",
      "18",
      "19"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Indica il totale di Scudetti di il Milan.",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Milan?",
    "options": [
      "20",
      "21",
      "19",
      "18"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Qual è il computo degli Scudetti di il Milan?",
    "options": [
      "19",
      "21",
      "18",
      "20"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Milan?",
    "options": [
      "19",
      "20",
      "21",
      "18"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Milan?",
    "options": [
      "18",
      "21",
      "19",
      "20"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Milan?",
    "options": [
      "21",
      "19",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Genoa?",
    "options": [
      "10",
      "11",
      "8",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti conta il Genoa?",
    "options": [
      "10",
      "9",
      "11",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Genoa?",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Qual è il numero di Scudetti di il Genoa?",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Indica il totale di Scudetti di il Genoa.",
    "options": [
      "11",
      "10",
      "9",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Genoa?",
    "options": [
      "11",
      "10",
      "9",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Qual è il computo degli Scudetti di il Genoa?",
    "options": [
      "9",
      "10",
      "8",
      "11"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Genoa?",
    "options": [
      "8",
      "11",
      "10",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Genoa?",
    "options": [
      "11",
      "10",
      "8",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Genoa?",
    "options": [
      "10",
      "8",
      "11",
      "9"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Bologna?",
    "options": [
      "8",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti conta il Bologna?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Bologna?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Qual è il numero di Scudetti di il Bologna?",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Indica il totale di Scudetti di il Bologna.",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Bologna?",
    "options": [
      "7",
      "9",
      "8",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Qual è il computo degli Scudetti di il Bologna?",
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
    "question": "Quanti Scudetti risultano in bacheca per il Bologna?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 1
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Bologna?",
    "options": [
      "7",
      "9",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Bologna?",
    "options": [
      "6",
      "8",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": 1
  },
  {
    "question": "Quanti Scudetti ha vinto il Torino?",
    "options": [
      "9",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti conta il Torino?",
    "options": [
      "6",
      "7",
      "9",
      "8"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Torino?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Qual è il numero di Scudetti di il Torino?",
    "options": [
      "8",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Indica il totale di Scudetti di il Torino.",
    "options": [
      "7",
      "9",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Torino?",
    "options": [
      "8",
      "9",
      "7",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il computo degli Scudetti di il Torino?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Torino?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Torino?",
    "options": [
      "9",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Torino?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto la Pro Vercelli?",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti conta la Pro Vercelli?",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Pro Vercelli?",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il numero di Scudetti di la Pro Vercelli?",
    "options": [
      "9",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Indica il totale di Scudetti di la Pro Vercelli.",
    "options": [
      "7",
      "9",
      "8",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Pro Vercelli?",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il computo degli Scudetti di la Pro Vercelli?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Pro Vercelli?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Pro Vercelli?",
    "options": [
      "8",
      "9",
      "7",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Pro Vercelli?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto il Napoli?",
    "options": [
      "6",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti conta il Napoli?",
    "options": [
      "5",
      "3",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Napoli?",
    "options": [
      "6",
      "3",
      "5",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Qual è il numero di Scudetti di il Napoli?",
    "options": [
      "6",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Indica il totale di Scudetti di il Napoli.",
    "options": [
      "6",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Napoli?",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il computo degli Scudetti di il Napoli?",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Napoli?",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Napoli?",
    "options": [
      "6",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Napoli?",
    "options": [
      "4",
      "6",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto la Roma?",
    "options": [
      "4",
      "2",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti conta la Roma?",
    "options": [
      "5",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Roma?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Qual è il numero di Scudetti di la Roma?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Indica il totale di Scudetti di la Roma.",
    "options": [
      "5",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Roma?",
    "options": [
      "2",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Qual è il computo degli Scudetti di la Roma?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Roma?",
    "options": [
      "4",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Roma?",
    "options": [
      "4",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Roma?",
    "options": [
      "4",
      "5",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto la Lazio?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti conta la Lazio?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Lazio?",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il numero di Scudetti di la Lazio?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Indica il totale di Scudetti di la Lazio.",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Lazio?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Qual è il computo degli Scudetti di la Lazio?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Lazio?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 2
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Lazio?",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Lazio?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Quanti Scudetti ha vinto la Fiorentina?",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti conta la Fiorentina?",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Fiorentina?",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Qual è il numero di Scudetti di la Fiorentina?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Indica il totale di Scudetti di la Fiorentina.",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Fiorentina?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Qual è il computo degli Scudetti di la Fiorentina?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Fiorentina?",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Fiorentina?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Fiorentina?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ha vinto la Sampdoria?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti conta la Sampdoria?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Sampdoria?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Qual è il numero di Scudetti di la Sampdoria?",
    "options": [
      "2",
      "0",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Indica il totale di Scudetti di la Sampdoria.",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Sampdoria?",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Qual è il computo degli Scudetti di la Sampdoria?",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Sampdoria?",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Sampdoria?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Sampdoria?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ha vinto l'Hellas Verona?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti conta l'Hellas Verona?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Di quanti Scudetti può fregiarsi l'Hellas Verona?",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Qual è il numero di Scudetti di l'Hellas Verona?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Indica il totale di Scudetti di l'Hellas Verona.",
    "options": [
      "3",
      "0",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha l'Hellas Verona?",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Qual è il computo degli Scudetti di l'Hellas Verona?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per l'Hellas Verona?",
    "options": [
      "3",
      "2",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da l'Hellas Verona?",
    "options": [
      "0",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato l'Hellas Verona?",
    "options": [
      "3",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ha vinto il Cagliari?",
    "options": [
      "2",
      "0",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti conta il Cagliari?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Cagliari?",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Qual è il numero di Scudetti di il Cagliari?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Indica il totale di Scudetti di il Cagliari.",
    "options": [
      "2",
      "3",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Cagliari?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Qual è il computo degli Scudetti di il Cagliari?",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Cagliari?",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Cagliari?",
    "options": [
      "2",
      "3",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Cagliari?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ha vinto il Casale?",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti conta il Casale?",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Di quanti Scudetti può fregiarsi il Casale?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Qual è il numero di Scudetti di il Casale?",
    "options": [
      "0",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Indica il totale di Scudetti di il Casale.",
    "options": [
      "3",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha il Casale?",
    "options": [
      "0",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Qual è il computo degli Scudetti di il Casale?",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per il Casale?",
    "options": [
      "3",
      "2",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 3
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da il Casale?",
    "options": [
      "0",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato il Casale?",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Quanti Scudetti ha vinto la Novese?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Quanti Scudetti conta la Novese?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Di quanti Scudetti può fregiarsi la Novese?",
    "options": [
      "3",
      "2",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Qual è il numero di Scudetti di la Novese?",
    "options": [
      "3",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Indica il totale di Scudetti di la Novese.",
    "options": [
      "0",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli nazionali (Scudetti) ha la Novese?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Qual è il computo degli Scudetti di la Novese?",
    "options": [
      "2",
      "3",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quanti Scudetti risultano in bacheca per la Novese?",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Qual è il totale degli Scudetti vinti da la Novese?",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Quanti Scudetti ufficiali ha conquistato la Novese?",
    "options": [
      "2",
      "0",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quale club ha vinto più Scudetti in Serie A?",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Chi detiene il record di Scudetti in Serie A?",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Qual è la squadra con più Scudetti in Serie A?",
    "options": [
      "Juventus",
      "Inter",
      "Milan",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quale team ha il maggior numero di Scudetti in Serie A?",
    "options": [
      "Inter",
      "Roma",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Chi ha vinto il maggior numero di Scudetti in Serie A?",
    "options": [
      "Milan",
      "Juventus",
      "Roma",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Qual è il club più titolato (Scudetti) in Serie A?",
    "options": [
      "Milan",
      "Inter",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "In Serie A, chi ha il primato di Scudetti?",
    "options": [
      "Milan",
      "Inter",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quale società vanta più Scudetti in Serie A?",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Chi è al primo posto per Scudetti in Serie A?",
    "options": [
      "Juventus",
      "Milan",
      "Roma",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Chi guida l'albo degli Scudetti in Serie A?",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Real Madrid?",
    "options": [
      "16",
      "14",
      "15",
      "17"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Quante Champions League ha in bacheca il Real Madrid?",
    "options": [
      "15",
      "17",
      "16",
      "14"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Real Madrid?",
    "options": [
      "17",
      "16",
      "14",
      "15"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Indica il totale di Champions League vinte da il Real Madrid.",
    "options": [
      "17",
      "14",
      "16",
      "15"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Real Madrid?",
    "options": [
      "16",
      "14",
      "15",
      "17"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Di quante Champions può vantarsi il Real Madrid?",
    "options": [
      "17",
      "16",
      "15",
      "14"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Real Madrid?",
    "options": [
      "14",
      "17",
      "15",
      "16"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Qual è il computo di Champions vinte da il Real Madrid?",
    "options": [
      "15",
      "14",
      "16",
      "17"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quanti trofei Champions appartengono a il Real Madrid?",
    "options": [
      "15",
      "16",
      "14",
      "17"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Totale Champions vinte da il Real Madrid?",
    "options": [
      "15",
      "17",
      "16",
      "14"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Milan?",
    "options": [
      "6",
      "9",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Quante Champions League ha in bacheca il Milan?",
    "options": [
      "8",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Milan?",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Indica il totale di Champions League vinte da il Milan.",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Milan?",
    "options": [
      "7",
      "9",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Di quante Champions può vantarsi il Milan?",
    "options": [
      "6",
      "9",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Milan?",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Qual è il computo di Champions vinte da il Milan?",
    "options": [
      "8",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Quanti trofei Champions appartengono a il Milan?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Totale Champions vinte da il Milan?",
    "options": [
      "7",
      "6",
      "9",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Liverpool?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quante Champions League ha in bacheca il Liverpool?",
    "options": [
      "6",
      "7",
      "8",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Liverpool?",
    "options": [
      "7",
      "8",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Indica il totale di Champions League vinte da il Liverpool.",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Liverpool?",
    "options": [
      "8",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Di quante Champions può vantarsi il Liverpool?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Liverpool?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Qual è il computo di Champions vinte da il Liverpool?",
    "options": [
      "8",
      "7",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quanti trofei Champions appartengono a il Liverpool?",
    "options": [
      "8",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Totale Champions vinte da il Liverpool?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Bayern München?",
    "options": [
      "8",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quante Champions League ha in bacheca il Bayern München?",
    "options": [
      "8",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Bayern München?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Indica il totale di Champions League vinte da il Bayern München.",
    "options": [
      "8",
      "5",
      "7",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Bayern München?",
    "options": [
      "7",
      "5",
      "8",
      "6"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Di quante Champions può vantarsi il Bayern München?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Bayern München?",
    "options": [
      "7",
      "5",
      "6",
      "8"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Qual è il computo di Champions vinte da il Bayern München?",
    "options": [
      "6",
      "5",
      "8",
      "7"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quanti trofei Champions appartengono a il Bayern München?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Totale Champions vinte da il Bayern München?",
    "options": [
      "8",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Barcelona?",
    "options": [
      "4",
      "6",
      "5",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quante Champions League ha in bacheca il Barcelona?",
    "options": [
      "7",
      "4",
      "6",
      "5"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Barcelona?",
    "options": [
      "5",
      "6",
      "7",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Indica il totale di Champions League vinte da il Barcelona.",
    "options": [
      "4",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Barcelona?",
    "options": [
      "4",
      "5",
      "7",
      "6"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Di quante Champions può vantarsi il Barcelona?",
    "options": [
      "5",
      "7",
      "4",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Barcelona?",
    "options": [
      "6",
      "7",
      "4",
      "5"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Qual è il computo di Champions vinte da il Barcelona?",
    "options": [
      "4",
      "6",
      "5",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quanti trofei Champions appartengono a il Barcelona?",
    "options": [
      "7",
      "6",
      "4",
      "5"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Totale Champions vinte da il Barcelona?",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli di Champions League ha vinto l'Ajax?",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quante Champions League ha in bacheca l'Ajax?",
    "options": [
      "5",
      "3",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Qual è il numero di Champions League vinte da l'Ajax?",
    "options": [
      "6",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Indica il totale di Champions League vinte da l'Ajax.",
    "options": [
      "6",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto l'Ajax?",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Di quante Champions può vantarsi l'Ajax?",
    "options": [
      "6",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto l'Ajax?",
    "options": [
      "4",
      "6",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Qual è il computo di Champions vinte da l'Ajax?",
    "options": [
      "5",
      "3",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quanti trofei Champions appartengono a l'Ajax?",
    "options": [
      "4",
      "6",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Totale Champions vinte da l'Ajax?",
    "options": [
      "6",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli di Champions League ha vinto l'Inter?",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quante Champions League ha in bacheca l'Inter?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Qual è il numero di Champions League vinte da l'Inter?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Indica il totale di Champions League vinte da l'Inter.",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto l'Inter?",
    "options": [
      "5",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Di quante Champions può vantarsi l'Inter?",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto l'Inter?",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Qual è il computo di Champions vinte da l'Inter?",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quanti trofei Champions appartengono a l'Inter?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Totale Champions vinte da l'Inter?",
    "options": [
      "2",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Manchester United?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quante Champions League ha in bacheca il Manchester United?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Manchester United?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Indica il totale di Champions League vinte da il Manchester United.",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Manchester United?",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Di quante Champions può vantarsi il Manchester United?",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Manchester United?",
    "options": [
      "5",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Qual è il computo di Champions vinte da il Manchester United?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quanti trofei Champions appartengono a il Manchester United?",
    "options": [
      "4",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Totale Champions vinte da il Manchester United?",
    "options": [
      "2",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "difficulty": 5
  },
  {
    "question": "Quanti titoli di Champions League ha vinto la Juventus?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quante Champions League ha in bacheca la Juventus?",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Qual è il numero di Champions League vinte da la Juventus?",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Indica il totale di Champions League vinte da la Juventus.",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto la Juventus?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Di quante Champions può vantarsi la Juventus?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto la Juventus?",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Qual è il computo di Champions vinte da la Juventus?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quanti trofei Champions appartengono a la Juventus?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Totale Champions vinte da la Juventus?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Porto?",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quante Champions League ha in bacheca il Porto?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Porto?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Indica il totale di Champions League vinte da il Porto.",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Porto?",
    "options": [
      "4",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Di quante Champions può vantarsi il Porto?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Porto?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Qual è il computo di Champions vinte da il Porto?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quanti trofei Champions appartengono a il Porto?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Totale Champions vinte da il Porto?",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Benfica?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Quante Champions League ha in bacheca il Benfica?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Benfica?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Indica il totale di Champions League vinte da il Benfica.",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Benfica?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Di quante Champions può vantarsi il Benfica?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Benfica?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Qual è il computo di Champions vinte da il Benfica?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quanti trofei Champions appartengono a il Benfica?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Totale Champions vinte da il Benfica?",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli di Champions League ha vinto il Chelsea?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Quante Champions League ha in bacheca il Chelsea?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Qual è il numero di Champions League vinte da il Chelsea?",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Indica il totale di Champions League vinte da il Chelsea.",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quanti titoli europei (Champions) ha vinto il Chelsea?",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Di quante Champions può vantarsi il Chelsea?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quante Coppe dei Campioni/Champions ha ottenuto il Chelsea?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Qual è il computo di Champions vinte da il Chelsea?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quanti trofei Champions appartengono a il Chelsea?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Totale Champions vinte da il Chelsea?",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quale club ha vinto più Champions League/European Cup?",
    "options": [
      "Real Madrid",
      "Liverpool",
      "Milan",
      "Bayern München"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi detiene il record di vittorie in Champions League?",
    "options": [
      "Real Madrid",
      "Bayern München",
      "Liverpool",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Qual è la squadra con più Champions League vinte?",
    "options": [
      "Bayern München",
      "Real Madrid",
      "Liverpool",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Chi ha il maggior numero di Champions League?",
    "options": [
      "Liverpool",
      "Milan",
      "Bayern München",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Quale team è il più titolato in Champions League?",
    "options": [
      "Real Madrid",
      "Bayern München",
      "Liverpool",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi guida l'albo d'oro della Champions League?",
    "options": [
      "Milan",
      "Bayern München",
      "Liverpool",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Qual è il club leader per Champions League vinte?",
    "options": [
      "Milan",
      "Liverpool",
      "Real Madrid",
      "Bayern München"
    ],
    "correctIndex": 2,
    "difficulty": 6
  },
  {
    "question": "Quale società detiene più Coppe dei Campioni/Champions?",
    "options": [
      "Liverpool",
      "Real Madrid",
      "Milan",
      "Bayern München"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Chi possiede il primato di Champions vinte?",
    "options": [
      "Bayern München",
      "Real Madrid",
      "Liverpool",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Qual è la squadra con il record di Champions?",
    "options": [
      "Milan",
      "Bayern München",
      "Liverpool",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 6
  },
  {
    "question": "Chi ha vinto la classifica marcatori in Serie A 2015/16 e con quante reti?",
    "options": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Chi è stato il capocannoniere della Serie A 2015/16 e quante reti ha segnato?",
    "options": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Indica nome e gol del capocannoniere della Serie A 2015/16.",
    "options": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Serie A 2015/16: chi ha chiuso da capocannoniere e con quanti gol?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Capocannoniere Serie A 2015/16: chi e quante reti?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Chi ha vinto la classifica marcatori in Serie A 2022/23 e con quante reti?",
    "options": [
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Chi è stato il capocannoniere della Serie A 2022/23 e quante reti ha segnato?",
    "options": [
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Gonzalo Higuaín (36)"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Indica nome e gol del capocannoniere della Serie A 2022/23.",
    "options": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Serie A 2022/23: chi ha chiuso da capocannoniere e con quanti gol?",
    "options": [
      "Lautaro Martínez (24)",
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Capocannoniere Serie A 2022/23: chi e quante reti?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Chi ha vinto la classifica marcatori in Serie A 2023/24 e con quante reti?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Chi è stato il capocannoniere della Serie A 2023/24 e quante reti ha segnato?",
    "options": [
      "Victor Osimhen (26)",
      "Gonzalo Higuaín (36)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Indica nome e gol del capocannoniere della Serie A 2023/24.",
    "options": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Ciro Immobile (27)",
      "Lautaro Martínez (24)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Serie A 2023/24: chi ha chiuso da capocannoniere e con quanti gol?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)",
      "Ciro Immobile (27)"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Capocannoniere Serie A 2023/24: chi e quante reti?",
    "options": [
      "Gonzalo Higuaín (36)",
      "Ciro Immobile (27)",
      "Victor Osimhen (26)",
      "Lautaro Martínez (24)"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti Campionati del Mondo ha vinto l’Italia?",
    "options": [
      "6",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Numero di Mondiali vinti dall’Italia?",
    "options": [
      "3",
      "6",
      "5",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Qual è il totale dei Mondiali dell’Italia?",
    "options": [
      "5",
      "3",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Italia: quanti titoli Mondiali?",
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Di quanti Mondiali è campione l’Italia?",
    "options": [
      "6",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti trofei Mondiali conta l’Italia?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti Mondiali ha in bacheca l’Italia?",
    "options": [
      "4",
      "3",
      "6",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Totale vittorie al Mondiale dell’Italia?",
    "options": [
      "4",
      "6",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Quanti successi ai Mondiali per l’Italia?",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli FIFA World Cup ha vinto l’Italia?",
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
    "question": "Italia, numero di Coppe del Mondo vinte?",
    "options": [
      "4",
      "3",
      "6",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Qual è il computo dei Mondiali vinti dall’Italia?",
    "options": [
      "6",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Indica il numero di Mondiali vinti dall’Italia.",
    "options": [
      "6",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quanti campionati del mondo ha conquistato l’Italia?",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Italia: quante Coppe del Mondo?",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti Campionati Europei ha vinto l’Italia?",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Numero di Europei vinti dall’Italia?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Qual è il totale degli Europei dell’Italia?",
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
    "question": "Italia: quanti titoli Europei?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Di quanti Europei è campione l’Italia?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quanti trofei Europei conta l’Italia?",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti Europei ha in bacheca l’Italia?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Totale vittorie all’Europeo dell’Italia?",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti successi all’Europeo per l’Italia?",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Quanti titoli UEFA EURO ha vinto l’Italia?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Italia, numero di Campionati Europei vinti?",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Qual è il computo degli Europei vinti dall’Italia?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Indica il numero di Europei vinti dall’Italia.",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "difficulty": 7
  },
  {
    "question": "Quanti campionati europei ha conquistato l’Italia?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Italia: quanti Europei?",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Il fuorigioco è punito con:",
    "options": [
      "Calcio d’angolo",
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Qual è la sanzione tecnica per un fuorigioco?",
    "options": [
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio di punizione diretto",
      "Calcio d’angolo"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Fuorigioco: quale ripresa di gioco è corretta?",
    "options": [
      "Calcio d’angolo",
      "Calcio di punizione diretto",
      "Calcio di punizione indiretto",
      "Rimessa dal fondo"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "In caso di fuorigioco, che tipo di calcio di punizione si assegna?",
    "options": [
      "Calcio d’angolo",
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio di punizione diretto"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "Quando il pallone è in gioco su una rimessa dal fondo?",
    "options": [
      "Quando è calciato e chiaramente si muove",
      "Solo quando esce dall’area",
      "Quando tocca un compagno",
      "Quando l’arbitro fischia"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Rimessa dal fondo: quando il pallone torna in gioco?",
    "options": [
      "Quando è calciato e chiaramente si muove",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno",
      "Solo quando esce dall’area"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "A quale condizione la rimessa dal fondo rende il pallone in gioco?",
    "options": [
      "Quando tocca un compagno",
      "Solo quando esce dall’area",
      "Quando l’arbitro fischia",
      "Quando è calciato e chiaramente si muove"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "Rimessa dal fondo, momento in cui il pallone è in gioco: quale?",
    "options": [
      "Solo quando esce dall’area",
      "Quando è calciato e chiaramente si muove",
      "Quando tocca un compagno",
      "Quando l’arbitro fischia"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Quale fallo in area comporta rigore?",
    "options": [
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Rimessa irregolare"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Rigore: quale tipo di infrazione in area lo provoca?",
    "options": [
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Rimessa irregolare",
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In area, che infrazione porta all'assegnazione del rigore?",
    "options": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Fuorigioco",
      "Ostruzione senza contatto",
      "Rimessa irregolare"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Quale contatto in area comporta il calcio di rigore?",
    "options": [
      "Un fallo punibile con calcio diretto (es. trattenuta/spinta/mani punibili)",
      "Ostruzione senza contatto",
      "Fuorigioco",
      "Rimessa irregolare"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Quante sostituzioni standard sono consentite nei regolamenti moderni?",
    "options": [
      "Sei senza limiti",
      "Cinque (eventuale sesta nei supplementari se previsto)",
      "Tre",
      "Due"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Il fuorigioco NON si applica quando il giocatore riceve da:",
    "options": [
      "Retropassaggio volontario di un compagno",
      "Punizione indiretto",
      "Rimessa laterale, calcio d’angolo o rimessa dal fondo",
      "Punizione diretto"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Dopo un fuorigioco, la ripresa corretta è:",
    "options": [
      "Calcio d’angolo",
      "Calcio di punizione indiretto",
      "Rimessa laterale",
      "Calcio di punizione diretto"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Contatto falloso in area sul portatore: la decisione tecnica è:",
    "options": [
      "Rimessa laterale",
      "Rimessa dal fondo",
      "Calcio di punizione indiretto",
      "Calcio di rigore"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "Quando un rigore è regolarmente eseguito?",
    "options": [
      "Solo dopo un rimbalzo",
      "Quando l’arbitro fischia",
      "Quando tocca un compagno",
      "Quando il pallone è calciato e si muove in avanti"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 1)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 2)",
    "options": [
      "Milan",
      "Roma",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 3)",
    "options": [
      "Roma",
      "Milan",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 4)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 5)",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 6)",
    "options": [
      "Juventus",
      "Milan",
      "Roma",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 7)",
    "options": [
      "Inter",
      "Roma",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 8)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 9)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 10)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 11)",
    "options": [
      "Milan",
      "Inter",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 12)",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 13)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 14)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 15)",
    "options": [
      "Inter",
      "Roma",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 16)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 17)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 18)",
    "options": [
      "Inter",
      "Roma",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 19)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 20)",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 21)",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 22)",
    "options": [
      "Juventus",
      "Inter",
      "Milan",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 23)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 24)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 25)",
    "options": [
      "Milan",
      "Juventus",
      "Roma",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 26)",
    "options": [
      "Juventus",
      "Milan",
      "Inter",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 27)",
    "options": [
      "Milan",
      "Inter",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 28)",
    "options": [
      "Inter",
      "Milan",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 29)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 30)",
    "options": [
      "Milan",
      "Inter",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 31)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 32)",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 33)",
    "options": [
      "Inter",
      "Roma",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 34)",
    "options": [
      "Roma",
      "Milan",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 35)",
    "options": [
      "Roma",
      "Milan",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 36)",
    "options": [
      "Inter",
      "Milan",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 37)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 38)",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 39)",
    "options": [
      "Roma",
      "Inter",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 40)",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 41)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 42)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 43)",
    "options": [
      "Inter",
      "Roma",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 44)",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 45)",
    "options": [
      "Inter",
      "Roma",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 46)",
    "options": [
      "Milan",
      "Inter",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 47)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 48)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 49)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 50)",
    "options": [
      "Juventus",
      "Milan",
      "Roma",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 51)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 52)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 53)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 54)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 55)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 56)",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 57)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 58)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 59)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 60)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 61)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 62)",
    "options": [
      "Juventus",
      "Inter",
      "Milan",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 63)",
    "options": [
      "Milan",
      "Roma",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 64)",
    "options": [
      "Inter",
      "Roma",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 65)",
    "options": [
      "Milan",
      "Roma",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 66)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 67)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 68)",
    "options": [
      "Juventus",
      "Inter",
      "Milan",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 69)",
    "options": [
      "Milan",
      "Roma",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 70)",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 71)",
    "options": [
      "Milan",
      "Roma",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 72)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 73)",
    "options": [
      "Milan",
      "Inter",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 74)",
    "options": [
      "Roma",
      "Inter",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 75)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 76)",
    "options": [
      "Juventus",
      "Inter",
      "Roma",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 77)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 78)",
    "options": [
      "Inter",
      "Milan",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 79)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 80)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 81)",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 82)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 83)",
    "options": [
      "Roma",
      "Inter",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 84)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 85)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 86)",
    "options": [
      "Roma",
      "Milan",
      "Juventus",
      "Inter"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 87)",
    "options": [
      "Milan",
      "Inter",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 88)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 9
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 89)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 90)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 91)",
    "options": [
      "Juventus",
      "Milan",
      "Inter",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 92)",
    "options": [
      "Roma",
      "Juventus",
      "Inter",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 93)",
    "options": [
      "Inter",
      "Roma",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 94)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 95)",
    "options": [
      "Milan",
      "Juventus",
      "Roma",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 96)",
    "options": [
      "Milan",
      "Juventus",
      "Roma",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 97)",
    "options": [
      "Inter",
      "Juventus",
      "Roma",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 98)",
    "options": [
      "Roma",
      "Milan",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 99)",
    "options": [
      "Milan",
      "Juventus",
      "Inter",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 100)",
    "options": [
      "Juventus",
      "Milan",
      "Roma",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 101)",
    "options": [
      "Roma",
      "Milan",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 102)",
    "options": [
      "Inter",
      "Milan",
      "Roma",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 103)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 104)",
    "options": [
      "Juventus",
      "Roma",
      "Milan",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 105)",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 106)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 107)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 108)",
    "options": [
      "Milan",
      "Roma",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 109)",
    "options": [
      "Juventus",
      "Milan",
      "Inter",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 110)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 111)",
    "options": [
      "Juventus",
      "Roma",
      "Inter",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 112)",
    "options": [
      "Juventus",
      "Milan",
      "Roma",
      "Inter"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 113)",
    "options": [
      "Milan",
      "Roma",
      "Inter",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 114)",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 115)",
    "options": [
      "Roma",
      "Inter",
      "Juventus",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 116)",
    "options": [
      "Inter",
      "Roma",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 117)",
    "options": [
      "Roma",
      "Juventus",
      "Milan",
      "Inter"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 118)",
    "options": [
      "Inter",
      "Milan",
      "Juventus",
      "Roma"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 119)",
    "options": [
      "Juventus",
      "Inter",
      "Milan",
      "Roma"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "In Serie A, squadra con più Scudetti? (var 120)",
    "options": [
      "Roma",
      "Inter",
      "Milan",
      "Juventus"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 1)",
    "options": [
      "Real Madrid",
      "Liverpool",
      "Milan",
      "Barcelona"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 2)",
    "options": [
      "Milan",
      "Liverpool",
      "Barcelona",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 3)",
    "options": [
      "Real Madrid",
      "Milan",
      "Barcelona",
      "Liverpool"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 4)",
    "options": [
      "Milan",
      "Barcelona",
      "Liverpool",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 5)",
    "options": [
      "Real Madrid",
      "Liverpool",
      "Milan",
      "Barcelona"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 6)",
    "options": [
      "Liverpool",
      "Real Madrid",
      "Barcelona",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 7)",
    "options": [
      "Milan",
      "Liverpool",
      "Real Madrid",
      "Barcelona"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 8)",
    "options": [
      "Real Madrid",
      "Barcelona",
      "Liverpool",
      "Milan"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 9)",
    "options": [
      "Liverpool",
      "Barcelona",
      "Milan",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 10)",
    "options": [
      "Milan",
      "Barcelona",
      "Liverpool",
      "Real Madrid"
    ],
    "correctIndex": 3,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 11)",
    "options": [
      "Liverpool",
      "Real Madrid",
      "Barcelona",
      "Milan"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 12)",
    "options": [
      "Liverpool",
      "Barcelona",
      "Real Madrid",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 13)",
    "options": [
      "Milan",
      "Real Madrid",
      "Barcelona",
      "Liverpool"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 14)",
    "options": [
      "Liverpool",
      "Real Madrid",
      "Milan",
      "Barcelona"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 15)",
    "options": [
      "Milan",
      "Real Madrid",
      "Liverpool",
      "Barcelona"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 16)",
    "options": [
      "Barcelona",
      "Liverpool",
      "Real Madrid",
      "Milan"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 17)",
    "options": [
      "Milan",
      "Real Madrid",
      "Liverpool",
      "Barcelona"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Club con più Champions League? (var 18)",
    "options": [
      "Milan",
      "Real Madrid",
      "Liverpool",
      "Barcelona"
    ],
    "correctIndex": 1,
    "difficulty": 10
  }
];

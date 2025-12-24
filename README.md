# Quiz sul Calcio – WebApp (500 domande)

Questo pacchetto contiene una webapp pronta (HTML/CSS/JS) che propone **10 domande** via via più difficili (livelli 1→10) pescate da un **pool di 500 domande** (dati sintetici didattici). 

## Regole di punteggio
- Risposta corretta: **+1**
- Prima risposta errata consecutiva: **0**
- Errori consecutivi successivi: **-1** ciascuno
- Il punteggio **non va mai sotto 0**

## File
- `index.html` – gioco
- `leaderboard.html` – migliori punteggi (caricati da Google Sheets via JSONP)
- `styles.css` – stile
- `questions.js` – **500 domande** con `difficulty` 1..10
- `script.js` – logica e salvataggio punteggi (POST no-cors)
- `apps_script_code.gs` – codice Apps Script da incollare nella tua Web App

## Come pubblicare su GitHub Pages
1. Carica i file nella repository (radice).
2. Vai su **Settings → Pages**.
3. **Build and deployment**: *Deploy from a branch*, **Branch**: `main`, **Folder**: `/root`.
4. Apri: `https://<utente>.github.io/<repo>/`.

## Backend: Google Sheets via Apps Script (JSONP)
1. Crea un **Foglio Google** con tab `scores` e copia l'**ID** (parte tra `/d/` e `/edit`).
2. Vai su **https://script.google.com** → *Nuovo progetto* → incolla il contenuto di `apps_script_code.gs`.
3. Sostituisci `SHEET_ID` con l'ID del tuo foglio.
4. **Deploy → Web app**: *Execute as*: **Me**; *Who has access*: **Anyone, even anonymous**; copia l'URL `/exec`.
5. Apri `leaderboard.html` e `script.js` e sostituisci **`PASTE_EXEC_URL_HERE`** con l'URL `/exec`.
6. (Se modifichi il codice Apps Script) ricordati di **Update deployment**.

### Note su CORS / JSONP
- La pagina **leaderboard** usa **JSONP** per leggere i dati (nessun CORS necessario).
- Il **POST** di salvataggio usa `mode: 'no-cors'`: la risposta non è leggibile, ma il salvataggio avviene.

### Dati sintetici
Le 500 domande sono **sintetiche** e pensate per uso didattico.

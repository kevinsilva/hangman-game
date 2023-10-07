# Jogo da Forca

## Regras

O jogador tem 6 tentativas para adivinhar a palavra escondida, previamente escolhida pelo computador.

### Elementos

- Poste, Gallows
- Palavra, Word -> Letter / Character
- Referência Palavras Erradas ?, Error Reference
- Stickman
- 6 tries

###

- words Array
- tries
- start button / restart

- Game Starts:
  - A word is chosen from the list
  - The word is displayed on the screen with dashes
  - Player enters letter
  - Does the word contain the letter ?
    - If yes, the letter is shown
    - If not, minus one try, draw hangman
    - If word is guessed display win message and restart btn
    - If tries is equal to zero, display lose message and restart btn - show word to guess

Game Phases: Game Start, Guess, Game Over

### TODO

- add restart button
- add UI

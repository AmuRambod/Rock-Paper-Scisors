# Rock✊ Paper✋ Scisors✌

A web application for playing rock, paper, scisors. Web-dev learning project from [The Odin Project](https://www.theodinproject.com).

## Table of Content

- [Overview](#Overview)
  - [The Challenge](#the-challenge)
  - [Algorithm](#algorithm)
  - [Links](#links)
- [My Process](#my-process)
  - [First Iteration](#first-iteration)
  - [Second Iteration](#second-iteration)
  - [Third Iteration](#third-iteration)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Algorithm

1. Player chooses his move via the `move-button`s.
2. Computer randomly chooses a number between 0-2:
   ```js
   let computerMove = Math.floor(Math.random() * 3);
   switch (computerMove) {
     case 0:
       computerDecision = "rock";
       break;
     case 1:
       computerDecision = "paper";
       break;
     case 2:
       computerDecision = "scisors";
       break;
   }
   ```
3. Player and Computer moves will show in the `arena` section.
4. The result of the round will show on the `outcome` section.
5. After the round the points will add to the winner of the round and the scores will show on the `score-board` section.
6. This process will continue until one side reaches 5 points and will be declared the _WINNER_.
   **NOTE: how to declare the winner and how to show it I still don't know!**

### Links

Live website preview: [Rock Paper Scisors](https://amurambod.github.io/odin-project-02-RockPaperScisors-/)

## My Process

### First Iteration

First iteration did not have a GUI and it was purely a JavaScript app that would run on consol.

### Second Iteration

Second iteration added a GUI with HTML and CSS and Player moves were received with Graphical buttons instead of prompt boxes.

### Third Iteration

Third iteration added responsiveness for different device widths using `@media` queries. Then added `:hover` and `:active` states to `move-button`s.

## Author

**Rambod Rahimlou**

- GitHub: [Amu Rambod](https://github.com/AmuRambod)

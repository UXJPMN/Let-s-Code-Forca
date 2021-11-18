import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordProcessService {
  totalTries: number = 5;
  triedChars: string[] = [];
  gameLost: boolean = false;
  gameWon: boolean = false;
  wordList: string[] = [
    'PALAVRA',
    'CODING',
    'TEST',
    'TYPESCRIPT',
    'ANGULAR'
  ]
  word: string = this.wordList[Math.floor(Math.random() * this.wordList.length)];

  constructor() { }

  tryChar(char: string): void {
    if (!this.triedChars.includes(char) && !this.gameLost && !this.gameWon){
      this.triedChars.push(char);
    }
  }

}

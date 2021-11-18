import { Component, OnInit } from '@angular/core';
import { WordProcessService } from '../word-process.service';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss']
})
export class TriesComponent implements OnInit {
  triedChars: string[] = this.wordProcess.triedChars;

  constructor(private wordProcess: WordProcessService) { }

  ngOnInit(): void {
  }

  triesLeft(): number {
    return 5 - this.wordProcess.triedChars.reduce(
      (total, current) => this.wordProcess.word.includes(current) ? total : total + 1,
      0);
  }

  loseGame(): boolean {
    if(this.triesLeft() <= 0 && !this.wordProcess.gameWon){
      this.wordProcess.gameLost = true;
      return true;
    }
    return false;
  }

  rightChar(char: string): boolean {
    return this.wordProcess.word.includes(char);
  }

}

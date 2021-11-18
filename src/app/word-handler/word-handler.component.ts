import { Component, OnInit } from '@angular/core';
import { WordProcessService } from '../word-process.service';

@Component({
  selector: 'app-word-handler',
  templateUrl: './word-handler.component.html',
  styleUrls: ['./word-handler.component.scss']
})
export class WordHandlerComponent implements OnInit {
  constructor(private wordProcess: WordProcessService) { }

  ngOnInit(): void {
  }

  displayWord (): string[] {
    return this.wordProcess.word.split('').map((char) =>
      this.wordProcess.triedChars.includes(char) ? char : '_'
    );
  }

  winGame (): boolean {
    if (!this.displayWord().includes('_') && !this.wordProcess.gameLost){
      this.wordProcess.gameWon = true;
      return true;
    }

    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { WordProcessService } from '../word-process.service';

@Component({
  selector: 'app-char-input',
  templateUrl: './char-input.component.html',
  styleUrls: ['./char-input.component.scss']
})
export class CharInputComponent implements OnInit {
  currentChar: string = '';

  constructor(private wordProcess: WordProcessService) { }

  ngOnInit(): void {
  }

  sendChar() {
    this.wordProcess.tryChar(this.currentChar.toUpperCase())
    this.currentChar = '';
  }

}

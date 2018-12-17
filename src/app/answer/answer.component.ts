import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() questionInfo;
  @Output() pointsSend = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  guessedAnswer = '';

  evaluateAnswer(){
    console.log('Correct answer: ' + this.questionInfo.answer);
    console.log('Guess saved as: ' + this.guessedAnswer);
    if (this.guessedAnswer == this.questionInfo.answer){
      this.pointsSend.emit(this.questionInfo.value);
    } else {
      this.pointsSend.emit(this.questionInfo.value * -1);
    }
    this.guessedAnswer = '';
  }
}

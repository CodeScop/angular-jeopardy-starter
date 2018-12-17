import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';

  questionInfo;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }
  score = 0;

  guessedAnswer = "";

  evaluateAnswer(guess, question){
    console.log('Correct answer: ' + question.answer);
    console.log('Guess saved as: ' + guess);
    if (guess == question.answer){
      this.score += question.value;
    } else {
      this.score -= question.value;
    }
    this.getQuestionInfo();
  }

}

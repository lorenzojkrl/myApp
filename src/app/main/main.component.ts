import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = 'Angular Blog';
  contentTable = 'Table of Contents';
  showPosts = false;

  listOfTopics = [
    'Angular Fundamentals',
    'Binding',
    'Routing',
    'Simple Forms',
    'More, If I Have Time',
  ];

  goodPosts = [
    {
      title: 'JavaScript Ternary Operator: A Practical Guide',
      summary:
        'The JavaScript ternary operator executes a certain expression based on a condition evaluating to a truthy or falsy. See examples of ternary operator. ',
      link: 'https://medium.com/p/b76a02c90850',
    },
    {
      title: 'What is DOM in JavaScript?',
      summary: `In layman's terms, the DOM represents the structure of your website.`,
      link: 'https://medium.com/p/c95531731367',
    },
    {
      title: `Click Event In Angular: ngIf & ngFor`,
      summary:
        'A brief explanation of ngIf, ngFor, click event and event binding',
      link: 'https://www.vitainbeta.org/click-event-and-event-binding-in-angular/',
    },
    {
      title: 'Introduction to the Angular docs',
      summary: 'Official Angular documentation',
      link: 'https://angular.io/docs',
    },
  ];
}

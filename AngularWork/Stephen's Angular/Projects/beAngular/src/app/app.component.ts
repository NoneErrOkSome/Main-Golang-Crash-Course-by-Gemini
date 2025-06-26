import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  onChangeLength(event: Event) {
    // This part had got problem
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    // solution from UDEMY Q&A
    // 18. Handling Text Input

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  saveData() {
    console.log('Data saved successfully!');
  }

  onButtonClick() {
    console.log(`
    ${this.includeLetters}
    ${this.includeNumbers}
    ${this.includeSymbols}
    `);

    this.password = '12345678';
  }
}

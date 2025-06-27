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
  // This property holds the length of the password, initialized to 0.
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  // These properties are used to determine whether to include letters, numbers, and symbols in the password.
  password: string = '';
  // This property holds the generated password, initialized to an empty string.

  onChangeLength(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // Casts the event's target to an HTMLInputElement, so you can access input-specific properties like 'value'.
    const value = inputElement.value;
    // Retrieves the current value (as a string) from the input element.

    const parsedValue = parseInt(value);
    // Converts the string value to an integer using parseInt. If the value isn't a valid number,

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

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  celsius: number;
  fahrenheit: number;

  ngOnInit() {
    this.celsius = 0;
    this.fahrenheit = 0;
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  converTemperature(e, type) {
    const temperature = e.target.value;
    if(type === 'cel') {
      this.celsius = temperature;
      this.fahrenheit = (temperature * 9) /5 +32;
    }
    else {
      this.fahrenheit = temperature;
      this.celsius = (temperature-32) * 9 /5;
    }
  }

}
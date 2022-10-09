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
  }

  converTemperature(e, type) {
    const temperature = e.target.value;
    if(type === 'cel') {
      this.celsius = temperature;
      this.fahrenheit = Number(((temperature * 9) /5 +32).toFixed(1));
    }
    else {
      this.fahrenheit = temperature;
      this.celsius = Number(((temperature - 32) * 5 / 9).toFixed(1));
    }
  }

}
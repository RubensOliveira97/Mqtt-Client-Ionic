import { Component, Output } from '@angular/core';
import { EventMqttService } from 'src/app/services/event-mqtt.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pump1Class: string = 'pump1';
  pump2Class: string = 'pump2';

  constructor(private eventMqtt: EventMqttService) { }

  changePump(pump) {

    this.eventMqtt.selectedPump = pump;

    if (pump == '1') {
      this.pump1Class = 'pumpclick';
      this.pump2Class = 'pump2';
    } else {
      this.pump2Class = 'pumpclick';
      this.pump1Class = 'pump1';
    }

  }

}

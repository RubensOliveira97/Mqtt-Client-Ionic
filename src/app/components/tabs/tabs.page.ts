/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { RouterLinkDelegate } from '@ionic/angular';
import { EventMqttService } from 'src/app/services/event-mqtt.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  routeId: string='5';
  constructor(private eventMqtt: EventMqttService) {}

  updateRoute(){

    this.routeId = 'tab2/'+this.eventMqtt.selectedPump;

  }

}

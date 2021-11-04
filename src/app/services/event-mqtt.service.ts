import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventMqttService {
  public selectedPump: string;
  private endpoint: string;
  constructor( private _mqttService: MqttService)
  {
    this.endpoint = 'demo/led1/current_state';
  }
  topic(deviceId: string):Observable<IMqttMessage>{
    let topicName = this.endpoint;
    return this._mqttService.observe(topicName);
  }

  switchEngine(message: string){
    let topicName = this.endpoint
    this._mqttService.unsafePublish(`demo/motor${this.selectedPump}/set_state`, message)
    console.log(message);
  }

  changeSpeed( message:string ){

    let topicName = this.endpoint

    this._mqttService.unsafePublish(`demo/motor${this.selectedPump}/set_speed`, message)
    console.log(message);
  }
}

import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventMqttService } from 'src/app/services/event-mqtt.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    events: any[];
    private deviceId: string = 'bnadlbladb4564rf';
    subscription: Subscription;
    switch: boolean = false;
    buttonText: string = "ON";
    pwmValue: Number = 0;

    constructor(
        private readonly eventMqtt: EventMqttService,private route:ActivatedRoute
    ) {
    }

    ngOnInit() {
        
        this.route.params.subscribe( parametros => {
            if (parametros['id']) {
                console.log(parametros)            }
          });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private subscribeToTopic() {
        this.subscription = this.eventMqtt.topic(this.deviceId)
            .subscribe((data: IMqttMessage) => {
                let item = JSON.parse(data.payload.toString());

            });
    }


    sliderMove($event) {
        this.pwmValue = $event.detail.value;
        if(this.switch){
            this.eventMqtt.changeSpeed( this.pwmValue.toString())
        }
        
    }




    pubTopic() {
        
        this.buttonText = this.switch ? 'ON' : 'OFF';
        this.eventMqtt.switchEngine(this.switch ? '0' : this.pwmValue.toString());
        this.switch = !this.switch;
    }
}

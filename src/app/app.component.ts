import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchTest';

  public switchWord:string;
  public D1:string;
  public D2:string;
  public D3:string;
  @Input() newSwitch:string;

  constructor(){
    console.log('construct');
    this.switchWord = 'D1';
    this.D1 = 'D One';
    this.D2 = 'D Two';
    this.D3 = 'D Three';
    this.newSwitch = this.switchWord;  
  }

  saveValues() {
    console.log(this.newSwitch);
    this.switchWord = this.newSwitch;
    console.log('switchWord = ' + this.switchWord);
  }
}

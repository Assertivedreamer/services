import { Component, OnInit } from '@angular/core';
import {JsoService} from "../../service/jso.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myPerson = []

  constructor(private _empService: JsoService) { }

  ngOnInit() {
    this._empService.getEmployee()
      .subscribe((res: any) => this.myPerson = res)
  }

}

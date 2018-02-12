import { Component, AfterViewInit } from '@angular/core';
import 'bootstrap';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
}

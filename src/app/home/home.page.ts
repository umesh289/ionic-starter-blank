import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DatePipe],
})
export class HomePage {
  selectedDate: string = "";
  today: string;
  yesterday: string;
  tenDaysPast: string = "";
  oneYearPast: string = "";
  minDate: string;
  maxDate: string;
  submitted: boolean = false;


  constructor(private datePipe: DatePipe) {
    const now = new Date();
    this.today = this.datePipe.transform(now, 'yyyy-MM-dd') ?? "";
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    this.yesterday = this.datePipe.transform(yesterday, 'yyyy-MM-dd') ?? "";
    this.minDate = this.today;
    const maxDate = new Date(now);
    maxDate.setFullYear(maxDate.getFullYear() + 5);
    this.maxDate = this.datePipe.transform(maxDate, 'yyyy-MM-dd') ?? "";

  }

  onSubmit() {
    const selectedDate = new Date(this.selectedDate);
    const tenDaysPast = new Date(selectedDate);
    tenDaysPast.setDate(tenDaysPast.getDate() + 10);
    this.tenDaysPast = this.datePipe.transform(tenDaysPast, 'yyyy-MM-dd') ?? "";
    const oneYearPast = new Date(selectedDate);
    oneYearPast.setFullYear(oneYearPast.getFullYear() + 1);
    this.oneYearPast = this.datePipe.transform(oneYearPast, 'yyyy-MM-dd') ?? "";
    this.submitted = true;
  }

  ngAfterViewInit() {
    var todayDate = new Date().toISOString().split('T')[0];
    document.getElementsByName("selectedDate")[0].setAttribute('min', todayDate);   
  }
}

export default HomePage;
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="ok = !ok">Toggle</button>
    <div *ngIf="ok; else other">OK</div>
    <ng-template #other>Not OK</ng-template>
    <ng-container *ngTemplateOutlet="ok ? okTpl : errorTpl"></ng-container>

<ng-template #okTpl>
  <h2>OK111 5555✅</h2> 
</ng-template>

<ng-template #errorTpl>
  <h2>Error222 ❌</h2>
</ng-template>

    <ul>
      <li *ngFor="let item of items; index as i">{{ i }} - {{ item }}</li>
    </ul>
  `
})
export class App {
  ok = false;
  isOk = false;
  items = ['A','B','C'];
}

bootstrapApplication(App);
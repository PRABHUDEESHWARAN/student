import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css'],
})
export class ViewMarksComponent {
  marks = [
    {
      subjectName: 'MATH',
      mark: 12,
      percentage: 0.12,
      semester: 4,
      result: 'fail',
    },
    {
      subjectName: 'm 2',
      mark: 32,
      percentage: 0.32,
      semester: 4,
      result: 'fail',
    },
    {
      subjectName: 'OS',
      mark: 40,
      percentage: 0.4,
      semester: 4,
      result: 'pass',
    },
    {
      subjectName: 'DAA',
      mark: 99,
      percentage: 0.99,
      semester: 4,
      result: 'pass',
    },
    {
      subjectName: 'EVS',
      mark: 82,
      percentage: 0.82,
      semester: 4,
      result: 'pass',
    },
  ];
}

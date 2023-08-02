import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  MessageService } from 'primeng/api';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css'],
  providers: [MessageService]
})
export class CourseGridComponent implements OnInit {
  rowData: any[];
  columnDefs: any[];
  gridApi: any;
  

constructor(
  private http: HttpClient,
  private messageService: MessageService
  ) {
    this.rowData = [];
    this.columnDefs = [
      { headerName: 'Course ID', field: 'courseId' },
      { headerName: 'Course Level', field: 'courseLevel' },
      { headerName: 'Course Status', field: 'courseStatus' },
      { headerName: 'Creation Date', field: 'creationDate' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Last Update Date', field: 'lastUpdateDate' },
      { headerName: 'Course Name', field: 'name' },
      { headerName: 'Course Instructor', field: 'userInstructor' }
    ]
}
ngOnInit() {}

getAllCourses() {
  this.http.get<any>('http://localhost:8080/ead-course/courses').subscribe(
data => {
      console.log(data);
      this.rowData = data.content;
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch users.' });
      console.log('Error fetching users:', error);
    });
  }
}


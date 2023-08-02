import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css'],
  providers: [MessageService]
})
export class StudentGridComponent implements OnInit{
  rowDataUser: any[];
  columnDefsUser: any[];
  gridApi: any;


constructor(
  private http: HttpClient,
  private messageService: MessageService
  ) {

    this.rowDataUser = [];
    this.columnDefsUser = [
      { headerName: 'CPF', field: 'cpf' },
      { headerName: 'Creation Date', field: 'creationDate' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Full Name', field: 'fullName' },
      { headerName: 'Last Update Date', field: 'lastUpdateDate' },
      { headerName: 'Phone Number', field: 'phoneNumber' },
      { headerName: 'User ID', field: 'userId' },
      { headerName: 'User Status', field: 'userStatus' },
      { headerName: 'User Type', field: 'userType' },
      { headerName: 'Username', field: 'username' }
    ];
  }
    ngOnInit() {}

getAllUsers() {
  this.http.get<any>('http://localhost:8080/ead-authuser/users').subscribe(
data => {
      console.log(data);
      this.rowDataUser = data.content;
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch users.' });
      console.log('Error fetching users:', error);
    });
  }
}

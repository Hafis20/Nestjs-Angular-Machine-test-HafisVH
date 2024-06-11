import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserObj } from 'src/app/schemas/user.dto';
import { AlertBoxComponent } from 'src/app/shared/components/alert-box/alert-box.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { UserOperationsService } from 'src/app/services/user-operations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @ViewChild('paginator') paginator!: MatPaginator;

  // Variables 
  // Length of the pages
  length: number = 0
  // Headers of the table
  tableHeaders: string[] = ['name', 'email', 'phoneNumber', 'address', 'edit', 'delete'];
  // Datasource to show the data inside our table
  dataSource!: MatTableDataSource<UserObj>;
  // Data from backend
  userData!: UserObj[];
  // For subscription and update the table content
  isAnyChangeOccurSubscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private userService: UserOperationsService
  ) { }

  ngOnInit(): void {
    this.isAnyChangeOccurSubscription = this.userService.isAnyChangeOccur$.subscribe((isChanged) => {
      this.getAllUsers();
    })
    this.getAllUsers();
  }



  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.userData = res;
        this.length = this.userData.length;
        this.dataSource = new MatTableDataSource(this.userData);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editUser(userData: UserObj) {
    this.dialog.open(EditFormComponent, {
      data: userData
    });
  }

  // which is used for if the user click on delete then only it the delete action works
  deleteUser(userId: string) {
    this.dialog.open(AlertBoxComponent, { data: userId });
  }

  ngOnDestroy(): void {
    if (this.isAnyChangeOccurSubscription) {
      this.isAnyChangeOccurSubscription.unsubscribe();
    }
  }
}

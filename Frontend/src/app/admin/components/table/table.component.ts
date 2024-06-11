import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserObj } from 'src/app/schemas/user.dto';
import { AlertBoxComponent } from 'src/app/shared/components/alert-box/alert-box.component';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userData =
      [
        {
          _id: "112334353d343532khhid35",
          name: "Karen White",
          email: "karen.white@example.com",
          phoneNumber: "+1234567800",
          address: "808 Pinecone Street, Springfield, IL 62711"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Larry Harris",
          email: "larry.harris@example.com",
          phoneNumber: "+1234567801",
          address: "909 Spruce Street, Springfield, IL 62712"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Mona Martin",
          email: "mona.martin@example.com",
          phoneNumber: "+1234567802",
          address: "1010 Fir Street, Springfield, IL 62713"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Nathan Thompson",
          email: "nathan.thompson@example.com",
          phoneNumber: "+1234567803",
          address: "1111 Pine Street, Springfield, IL 62714"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Olivia Martinez",
          email: "olivia.martinez@example.com",
          phoneNumber: "+1234567804",
          address: "1212 Maple Street, Springfield, IL 62715"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Paul Garcia",
          email: "paul.garcia@example.com",
          phoneNumber: "+1234567805",
          address: "1313 Oak Street, Springfield, IL 62716"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Quinn Martinez",
          email: "quinn.martinez@example.com",
          phoneNumber: "+1234567806",
          address: "1414 Birch Street, Springfield, IL 62717"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Rita Robinson",
          email: "rita.robinson@example.com",
          phoneNumber: "+1234567807",
          address: "1515 Cedar Street, Springfield, IL 62718"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Steve Clark",
          email: "steve.clark@example.com",
          phoneNumber: "+1234567808",
          address: "1616 Walnut Street, Springfield, IL 62719"
        },
        {
          _id: "112334353d343532khhid35",
          name: "Tina Lewis",
          email: "tina.lewis@example.com",
          phoneNumber: "+1234567809",
          address: "1717 Chestnut Street, Springfield, IL 62720"
        }
      ]

    this.length = this.userData.length;
    this.dataSource = new MatTableDataSource(this.userData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  editUser(userData: UserObj) {
    this.dialog.open(EditFormComponent,{
      data:userData
    });
  }

  deleteUser(userId: string) {
    console.log(userId);
    this.dialog.open(AlertBoxComponent);
  }
}

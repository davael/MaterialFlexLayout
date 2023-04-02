import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableButton, TableColumn } from '../interfaces/table-column';
import { ActionTable } from '../models/action-table';

@Component({
  selector: 'app-table-data',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator, {static: false}) matPaginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) matSort!: MatSort;
  public _dataSource = new MatTableDataSource<any>([]);
  public displayedColumns!: string[];
  @Input() columns!: TableColumn[];
  @Input() buttons!: TableButton[];
  @Input() isFilterable = false;
  @Input() isSortable = false;

  @Input() isPageable = false;

  @Input() createdButton = false;



  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();

  paginationSizes=[2,4,6];
  defaultPageSize=4;

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
    if(this.buttons){
      this.displayedColumns.push('actions');
    }
  }

  ngAfterViewInit(): void {
    this._dataSource.paginator = this.matPaginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: any) {
    console.log(sortParameters);
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.columns.find(column => column.caption === sortParameters.active)!.field;
    console.log(sortParameters);

    this.sort.emit(sortParameters);
  }

  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
    this._dataSource.paginator = this.matPaginator;
    this._dataSource.sort = this.matSort;
  }

  emitRowAction(row: any, action:string) {
    let actionResult= new ActionTable(row,action);
    this.rowAction.emit(actionResult);
  }

  createItem(row: any, action:string){
    let actionResult= new ActionTable(row,action);
    console.log(actionResult);
    this.create.emit(actionResult);
  }
}

import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionTable } from '../models/action-table';
import { TableColumn } from '../models/table-column';
import { TableParameter } from '../models/table-parameter';

@Component({
  selector: 'app-table-data',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  @Input() tableParameters!: TableParameter;

  public _dataSource = new MatTableDataSource<any>([]);
  public displayedColumns!: string[];

  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableParameters.columns.map(
      (tableColumn: TableColumn) => tableColumn.caption
    );
    if (this.tableParameters.buttons) {
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
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableParameters.columns.find(
      column => column.caption === sortParameters.active
    )?.field;
    this.sort.emit(sortParameters);
  }

  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
    this._dataSource.paginator = this.matPaginator;
    this._dataSource.sort = this.matSort;
  }

  emitRowAction(row: any, action: string) {
    const actionResult = new ActionTable(row, action);
    this.rowAction.emit(actionResult);
  }

  createItem(row: any, action: string) {
    const actionResult = new ActionTable(row, action);
    this.create.emit(actionResult);
  }

  propertyAccess = (obj: any, path: any) =>
    path.split('.').reduce((o: any, p: any) => o && o[p], obj);
}

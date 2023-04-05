import {ActionButtonColumn} from './action-button-column';
import {TableColumn} from './table-column';
import {TablePagination} from './table-pagination';

export class TableParameter {
  columns!: TableColumn[];
  buttons!: ActionButtonColumn[];
  isFilterable = false;
  createdButton = false;
  tablePagination!: TablePagination;

  constructor(
    columns: TableColumn[],
    buttons: ActionButtonColumn[],
    isFilterable: boolean,
    tablePagination: TablePagination,
    createdButton: boolean
  ) {
    this.columns = columns;
    this.buttons = buttons;
    this.isFilterable = isFilterable;
    this.tablePagination = tablePagination;
    this.createdButton = createdButton;
  }
}

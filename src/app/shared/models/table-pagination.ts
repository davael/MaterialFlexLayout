export class TablePagination {
  isPageable: boolean= false;
  paginationSizes!: number[];
  defaultPageSize!: number;
  constructor(isPageable: boolean,paginationSizes: number[],defaultPageSize: number){
    this.isPageable=isPageable;
    this.paginationSizes= paginationSizes;
    this.defaultPageSize= defaultPageSize;
  }
}
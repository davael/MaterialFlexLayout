export class TableColumn {
  caption: string;
  field: string;
  type: string;
  isSortable: boolean;
  constructor(caption: string,field: string,type:string,isSortable:boolean){
    this.caption=caption;
    this.field=field;
    this.type=type;
    this.isSortable=isSortable
  }
}

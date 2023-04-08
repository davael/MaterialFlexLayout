export interface IMenu {
  menId: number;
  menDescripcion: string;
  menActivo: boolean;
  menIcono: string;
  menPath: null;
  inverseMenSubmenu: IMenu[];
}

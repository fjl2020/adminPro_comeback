import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[{
    title:"Dashboard",
    icon:"mdi mdi-gauge",
    submenu:[
      { title:"Main",icon:"",url:"/" },
      { title:"Progress",icon:"",url:"/dashboard/progress"},
      { title:"Graph",icon:"",url:"/dashboard/grafica1"}
    ]
  }]
  constructor() { }

}

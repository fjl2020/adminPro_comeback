import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme=document.querySelector("#theme");

  constructor() { 
    const url =localStorage.getItem('urlTheme') || './assets/css/colors/default.css';
    this.linkTheme?.setAttribute('href',url);      
  }
  changeTheme(theme:String)
  {
    // console.log(theme);
    let url=`./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('urlTheme',url);
    // console.log(url);
    this.checkCurrentTheme()
    
  }

  checkCurrentTheme(){ 
    const links=document.querySelectorAll('.selector');

    links.forEach(element => {
        element.classList.remove('working')
        const btnTheme=element.getAttribute("data-theme")
        const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`
        const currentTheme=this.linkTheme?.getAttribute('href');
        if (btnThemeUrl===currentTheme){
          element.classList.add('working')
        }
    });

  }
}

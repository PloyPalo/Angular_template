import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
<<<<<<< HEAD
      Created with ♥ by <b><a href="http://www.neercode.com/" target="_blank">NeerCode</a></b> 2023
=======
     <span class="copyright">Copyright © 2023 :</span> 
     <span>&nbsp;<a href="https://fortwachirawuthospital.rta.mi.th/homepage/">Fort Wachirawut Hospital</a> </span>  
      <!-- Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019 -->
>>>>>>> ba3dabdb7b407ed8ec65d9d2340b52fa699f7a44
    </span>
    <div class="socials">
      <span class="copyright">Smart Dashboard 1.0</span>
      <!-- <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a> -->
    </div>
  `,
})
export class FooterComponent {
}

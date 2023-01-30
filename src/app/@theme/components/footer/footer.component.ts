import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
     <span class="copyright">Copyright © 2023 :</span>
     <span class="hospital">&nbsp; Fort Wachirawut Hospital </span>
      <!-- Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019 -->
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

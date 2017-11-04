import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { LocationsPage } from '../../pages/locations/locations';
import { LandingPage } from '../../pages/landing/landing';

import { IAMService } from '../../services/iam.service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LocationsPage;

  constructor(private navCtrl: NavController, private iam: IAMService) {}

  logout() {
    this.iam.setCurrentUser(null);
    this.navCtrl.setRoot(LandingPage);
  }
}

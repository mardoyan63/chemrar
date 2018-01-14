import { Component } from '@angular/core';

import { Files } from "../files/files";
import { Scan } from "../scan/scan";
import { Create } from "../create/create";
import { Info } from "../info/info";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Files;
  tab2Root = Scan;
  tab3Root = Create;
  tab4Root = Info;

  constructor() {

  }
}

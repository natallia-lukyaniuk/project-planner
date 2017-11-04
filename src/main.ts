import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './global.scss';
import './assets/images/project-management.png';
import 'core-js/es6';
import 'zone.js/dist/zone';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.log(err));

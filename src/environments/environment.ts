// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase
};
firebase.initializeApp( {
  apiKey: 'AIzaSyA0HixY9moWIJCxhl-PcDnOC-H9BLXhM3w',
  authDomain: 'majestic-fuze-272106.firebaseapp.com',
  databaseURL: 'https://majestic-fuze-272106.firebaseio.com',
  projectId: 'majestic-fuze-272106',
  storageBucket: 'majestic-fuze-272106.appspot.com',
  messagingSenderId: '741631839907'
})
AngularFireModule.initializeApp(environment)

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

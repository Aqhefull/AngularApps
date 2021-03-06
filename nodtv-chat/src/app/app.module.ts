import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCAvFIN7qKTph2TnxPkjmaHDNfUmhAs91g",
  authDomain: "angularclichat.firebaseapp.com",
  databaseURL: "https://angularclichat.firebaseio.com",
  storageBucket: "angularclichat.appspot.com",
  messagingSenderId: "598906942037"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

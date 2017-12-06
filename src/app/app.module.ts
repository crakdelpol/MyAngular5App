import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const myRoots: Routes = [

  {path: 'register',component: RegistrationComponent},
  {path: '',component: HomeComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        HomeComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        //AppRoutingModule,
        RouterModule.forRoot(myRoots),
        MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})



export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'singles',
          pathMatch: 'full',
        },
        {
          path: '',
          outlet: 'menu',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              remoteName: 'menu',
              exposedModule: './Module',
            }).then((m) => m.AppModule),
        },
        {
          path: 'singles',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4202/remoteEntry.js',
              remoteName: 'mtgSingles',
              exposedModule: './Module',
            }).then((m) => m.AppModule),
        },
        {
          path: 'boosters',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4203/remoteEntry.js',
              remoteName: 'mtgBoosters',
              exposedModule: './Module',
            }).then((m) => m.AppModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

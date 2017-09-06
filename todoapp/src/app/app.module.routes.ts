import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ArchiveComponent} from './archive/archive.component';
import { AboutComponent } from './about/about.component';
 const appRoutes:Routes=[{path:'home',component:HomeComponent},{path:'archive',component:ArchiveComponent},{path:'about',component:AboutComponent},{path:'',redirectTo:'home',pathMatch:'full'}]
@NgModule({imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class RoutesModule{}
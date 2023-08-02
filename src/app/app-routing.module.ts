import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGridComponent } from './components/student-grid/student-grid.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'students', component: StudentGridComponent},
  { path: 'courses', component: CourseGridComponent},
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

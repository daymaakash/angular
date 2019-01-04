import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { TeacherComponent } from './components/home/teacher/teacher.component';
import { ClassComponent } from './components/home/class/class.component';
import { TimetableComponent } from './components/timetable/timetable.component';



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "signup" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent, children : [{
    path: "teacher", component: TeacherComponent,outlet:'teacherList'
  },
  {path: "class", component: ClassComponent,outlet:'teacherList'}
]},
{ path: "timetable", component: TimetableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

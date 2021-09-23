import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'login' ,component: LoginComponent},
  {path: 'students', component: StudentListComponent, canActivate: [AuthGuard]},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path:'logout', component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

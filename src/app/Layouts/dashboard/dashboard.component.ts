import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/Dashboard/navbar/navbar.component';
import { SidebarComponent } from '../../Components/Dashboard/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

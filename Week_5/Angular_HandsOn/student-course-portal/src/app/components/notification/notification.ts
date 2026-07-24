import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider creates a new NotificationService
  // instance for this component and its child components only.
  providers: [NotificationService]
})
export class NotificationComponent {

  constructor(
    public notificationService: NotificationService
  ) {}

}
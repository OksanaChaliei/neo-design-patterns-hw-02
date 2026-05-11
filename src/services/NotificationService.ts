import { INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  constructor(private channels: INotificationChannel[]) {}

  send(user: User, message: string): void {
    this.channels.forEach((channel) => {
      channel.send(user, message);
    });
  }
}

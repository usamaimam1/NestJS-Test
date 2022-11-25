import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getMe() {
    return 'user';
  }
}

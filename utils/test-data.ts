// utils/test-data.ts
import { User } from '../types/user.type';

export class TestData {
  static generateUser(): User {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 6);
    
    return {
      name: `User ${randomString}`,
      email: `user${timestamp}@gmail.com`
    };
  }

  static  generateInvalidEmails(): User {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 6);
    
    return {
      name: `User ${randomString}`,
      email: `user${timestamp}plainaddress`
    };
  }

}
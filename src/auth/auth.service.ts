import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneBy(username);

        console.log(user);

        if (user && user.password === password) {
            const { password, ...result } = user;
            console.log(result);
            return result;
        }

        return null;
    }

    async login(user: User) {
        console.log(user);
        const payload = { username: user.username, sub: user.id, email: user.email };
        console.log(payload);
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}

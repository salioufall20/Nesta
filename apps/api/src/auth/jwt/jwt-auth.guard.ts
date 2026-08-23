import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('\n===== JWT GUARD =====');
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    console.log('err  :', err);
    console.log('user :', user);
    console.log('info :', info);

    return user;
  }
}

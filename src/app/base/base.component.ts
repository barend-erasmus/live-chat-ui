import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { User } from '../entities/user';

export class BaseComponent {

    public user: User = null;

    constructor(protected userService: UserService) {

    }

    public initialize(): Observable<User> {
        return this.userService.info().do((user) => {
            this.user = user;
        });
    }
}

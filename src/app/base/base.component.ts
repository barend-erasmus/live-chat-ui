import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

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

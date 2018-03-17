import { Entity } from './entity';
import { TeamView } from '../entity-views/team';

export class Application extends Entity {

    constructor(
        id: number,
        public name: string,
        public team: TeamView,
    ) {
        super(id);
    }
}

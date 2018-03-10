import { Team } from './team';

export class Application {

    constructor(
        public id: number,
        public name: string,
        public team: Team,
    ) {

    }
}

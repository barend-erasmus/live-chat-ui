import { MetaDatum } from './meta-datum';
import { Application } from './application';

export class Chat {

    constructor(
        public application: Application,
        public id: number,
        public metaData: MetaDatum[],
        public numberofUnreadMessages: number,
        public owner: string,
        public sessionId: string,
    ) {

    }
}

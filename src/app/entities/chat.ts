import { ApplicationView } from '../entity-views/application';
import { MetaDatum } from '../value-objects/meta-datum';
import { ChatOwnerView } from '../entity-views/chat-owner';

export class Chat {

    constructor(
        public application: ApplicationView,
        public id: number,
        public metaData: MetaDatum[],
        public numberofUnreadMessages: number,
        public owner: ChatOwnerView,
        public sessionId: string,
    ) {

    }
}

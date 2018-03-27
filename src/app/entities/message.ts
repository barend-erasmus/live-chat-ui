import { Entity } from './entity';
import { ChatView } from '../entity-views/chat';

export class Message extends Entity {

    constructor(
        public chat: ChatView,
        id: number,
        public sender: string,
        public text: string,
        public timestamp: Date,
    ) {
        super(id);
    }
}

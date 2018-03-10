import PouchDB from 'pouchdb';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Application } from '../models/application';
import { Team } from '../models/team';
import { Chat } from '../models/chat';
import { MetaDatum } from '../models/meta-datum';

export class BaseService {

    protected liveChatDB = new PouchDB('live-chat');

    private n = 6;

    constructor() {
    }

    protected get(id: string): Observable<any> {
        return Observable.fromPromise(this.initialize()).mergeMap(() => {
            return Observable.fromPromise(this.liveChatDB.get(`${id}-${this.n}`));
        }).map((doc: { items: Application[] }) => {
            return doc.items;
        });
    }

    protected initialize(): Promise<void> {
        return this.liveChatDB.get(`info-${this.n}`).then((doc) => {
            if (!doc) {
                return Promise.all([
                    this.insertInfo(),
                    this.insertApplications(),
                    this.insertChats(),
                    this.insertTeams(),
                ]);
            }
        }).catch(() => {
            return Promise.all([
                this.insertInfo(),
                this.insertApplications(),
                this.insertChats(),
                this.insertTeams(),
            ]);
        });
    }

    private insertApplications(): Promise<void> {
        return this.liveChatDB.put({
            _id: `applications-${this.n}`,
            items: [
                new Application(1, 'Application 1', new Team(true, 1, 'Team 1', 'john-smith@example.com')),
                new Application(2, 'Application 2', new Team(true, 1, 'Team 1', 'john-smith@example.com')),
                new Application(3, 'Application 3', new Team(true, 1, 'Team 1', 'john-smith@example.com')),
                new Application(4, 'Application 4', new Team(true, 1, 'Team 1', 'john-smith@example.com')),
            ],
        });
    }

    private insertChats(): Promise<void> {
        return this.liveChatDB.put({
            _id: `chats-${this.n}`,
            items: [
               new Chat(new Application(1, 'Application 1', new Team(true, 1, 'Team 1', 'john-smith@example.com')), 1, [
                   new MetaDatum('userName', 'developersworkspace@gmail.com'),
                   new MetaDatum('billed-amount', '$45.86'),
               ], 5, 'john-smith@example.com', 'c573c609-37fd-4ba1-b927-21144b96cd5e'),
               new Chat(new Application(2, 'Application 2', new Team(true, 1, 'Team 1', 'john-smith@example.com')), 2, [], 6, 'john-smith@example.com', '208fcd77-9f85-4498-9d50-dbe8ea75d9c6'),
               new Chat(new Application(4, 'Application 4', new Team(true, 1, 'Team 1', 'john-smith@example.com')), 3, [], 9, 'john-smith@example.com', 'edb23ea5-8fd4-43a9-b411-90c554903a07'),
               new Chat(new Application(3, 'Application 3', new Team(true, 1, 'Team 1', 'john-smith@example.com')), 4, [], 2, 'john-smith@example.com', '24439f99-d991-4f75-ac8a-d43fb841e925'),
               new Chat(new Application(4, 'Application 4', new Team(true, 1, 'Team 1', 'john-smith@example.com')), 5, [], 4, 'john-smith@example.com', '1bf4b139-7114-4120-b0ea-a51be70423e5'),
            ],
        });
    }

    private insertInfo(): Promise<void> {
        return this.liveChatDB.put({
            _id: `info-${this.n}`,
        });
    }

    private insertTeams(): Promise<void> {
        return this.liveChatDB.put({
            _id: `teams-${this.n}`,
            items: [
                new Team(true, 1, 'Team 1', 'john-smith@example.com'),
                new Team(false, 2, 'Team 2', 'john-smith@example.com'),
                new Team(false, 3, 'Team 3', 'john-smith@example.com'),
            ]
        });
    }
}

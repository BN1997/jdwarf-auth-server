import { db } from '../../external/FirebaseExternal.js';

export default class BaseService {
    constructor(nameCollection) {
        this.db = db;
        this.collectionName = nameCollection;
    }

    getCollection() {
        return this.db.collection(this.collectionName);
    }
}
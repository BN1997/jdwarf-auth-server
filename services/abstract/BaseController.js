import { db } from '../../external/FirebaseExternal.js';

export default class BaseService {
    constructor(nameCollection) {
        this.db = db;
        this.collectionName = nameCollection;
    }

    getCollection() {
        return this.db.collection(this.collectionName);
    }

    getDocById(id) {
        return this.getCollection().doc(id);
    }

    getById(id) {
        try {
            return this.getDocById(id).get();
        } catch (error) {
            throw new Error('error found at getById')
        }
    }
}
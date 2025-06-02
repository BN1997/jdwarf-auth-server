import { db } from "../../external/firebase";

export class BaseService {
    constructor(nameCollection) {
        this.db = db;
        this.collectionName = nameCollection;
    }

    getCollection() {    
        return this.db.collection(this.collectionName);
    }
}
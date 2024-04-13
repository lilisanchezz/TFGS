const mongoose = require('mongoose');
const mongodb = mongoose.mongo;

class User {
	constructor(database) {
		this.db = database;
		this.collection = this.db.collection('users');
	}
	async create(user) {
		const result = await this.collection.insertOne(user);
		return result.insertedId.toString();
	}

	async getCites(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.cites_reb;
	}
	async getResultats(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.resultats_rebs;
	}

	async update(id, updates) {
		const result = await this.collection.updateOne({'_id': new mongodb.ObjectId(""+id)}, {$set: updates});
		return result.modifiedCount > 0;
	}

	
}

module.exports = User;

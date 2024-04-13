const mongoose = require('mongoose');
const mongodb = mongoose.mongo;

class Doctor {
	constructor(database) {
		this.db = database;
		this.collection = this.db.collection('doctor');
	}

	async getCites(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.cites_reb;
	}
	async getResultats(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.resultats_rebs;
	}
	//COM ES FAN????
	async postCites(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.cites_dono;
	}
	async postResultats(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result.resultats_dono;
	}

	async update(id, updates) {
		const result = await this.collection.updateOne({'_id': new mongodb.ObjectId(""+id)}, {$set: updates});
		return result.modifiedCount > 0;
	}

	
}

module.exports = User;

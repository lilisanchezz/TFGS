const mongoose = require('mongoose');
const mongodb = mongoose.mongo;

class Activities {
	constructor(database) {
		/**
		 * @type {import('mongodb').Db}
		 */
		this.db = database;
		this.collection = this.db.collection('activities');
	}

	async create({ newId, titol, data, descripcio }) {
		const activities = { newId, titol,data,descripcio};
		console.log(news);
		const result = await this.collection.insertOne(activities);
		return result.insertedId.toString();
	}
	async getOneActivity(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result;
	}
	async getAllActivities() {
		const result = await this.collection.find().toArray();
		return result;
	}
}

module.exports =Activities;

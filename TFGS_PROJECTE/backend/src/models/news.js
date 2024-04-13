const mongoose = require('mongoose');
const mongodb = mongoose.mongo;

class News {
	constructor(database) {
		/**
		 * @type {import('mongodb').Db}
		 */
		this.db = database;
		this.collection = this.db.collection('news');
	}

	async create({ newId, titol, data, descripcio }) {
		const news = { newId, titol,data,descripcio};
		console.log(news);
		const result = await this.collection.insertOne(news);
		return result.insertedId.toString();
	}
	async getOneNew(id) {
		const result = await this.collection.findOne({'_id': new mongodb.ObjectId(""+id)});
		return result;
	}
	async getAllNews() {
		const result = await this.collection.find().toArray();
		return result;
	}
}

module.exports = News;

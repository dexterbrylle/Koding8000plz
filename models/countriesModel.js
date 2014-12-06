var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = function () {
    this.collection = 'countries';

    this.schema = mongoose.Schema({
        name: {
            type: String
        },
        code: {
            type: String
        },
        native: {
            type: String
        },
        phone: {
            type: String
        },
        capital: {
            type: String
        },
        currency: {
            type: String
        },
        languages: {
            type: String
        }
    });

    this.schema.statics.toEntity = function (rawModel) {
        return {
            'name': rawModel.name,
            'code': rawModel.code,
            'native': rawModel.native,
            'phone': rawModel.phone,
            'capital': rawModel.capital,
            'currency': rawModel.currency,
            'languages': rawModel.languages
        };
    };

    this.schema.set('autoIndex', true);
    return this;
};
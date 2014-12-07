var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = function () {
    this.collection = 'afCountries';

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
        },
        povertyhcount_125_value: {
            type: String
        },
        povertyhcount_125_date: {
            type: String
        },
        povertyhcount_25_value: {
            type: String
        },
        povertyhcount_25_date: {
            type: String
        },
        povertyhcount_4_value: {
            type: String
        },
        povertyhcount_4_date: {
            type: String
        },
        povertygap_125_value: {
            type: String
        },
        povertygap_125_date: {
            type: String
        },
        povertygap_25_value: {
            type: String
        },
        povertygap_25_date: {
            type: String
        },
        povertygap_4_value: {
            type: String
        },
        povertygap_4_date: {
            type: String
        },

    });

    this.schema.statics.toEntity = function (rawModel) {
        return {
            'name': rawModel.name,
            'code': rawModel.code,
            'native': rawModel.native,
            'phone': rawModel.phone,
            'capital': rawModel.capital,
            'currency': rawModel.currency,
            'languages': rawModel.languages,
            'povertyhcount_125_value': rawModel.povertyhcount_125_value,
            'povertyhcount_125_date': rawModel.povertyhcount_125_date,
            'povertyhcount_25_value': rawModel.povertyhcount_25_value,
            'povertyhcount_25_date': rawModel.povertyhcount_25_date,
            'povertyhcount_4_value': rawModel.povertyhcount_4_value,
            'povertyhcount_4_date': rawModel.povertyhcount_4_date,
            'povertygap_125_value': rawModel.povertygap_125_value,
            'povertygap_125_date': rawModel.povertygap_125_date,
            'povertygap_25_value': rawModel.povertygap_25_value,
            'povertygap_25_date': rawModel.povertygap_25_date,
            'povertygap_4_value': rawModel.povertygap_4_value,
            'povertygap_4_date': rawModel.povertygap_4_date
        };
    };

    this.schema.set('autoIndex', false);
    return this;
};
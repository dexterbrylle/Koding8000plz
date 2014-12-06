var __ = require('underscore'),
    http = require('http'),
    https = require('https'),
    request = require('request'),
    async = require('async'),
    models = require('../models/index');
var countriesJson = require('../countries.json');

var tempCountry = [];
for (var x in countriesJson) {
    tempCountry.push(countriesJson[x]);
}

countries = tempCountry[1];

//Array of Countries per continent
var conAfrica = __.where(countries, {
    continent: "AF"
});
console.log("Africa " + conAfrica.length);
var conAntarctica = __.where(countries, {
    continent: "AN"
});
console.log("Antarctica " + conAntarctica.length);
var conAsia = __.where(countries, {
    continent: "AS"
});
console.log("Asia " + conAsia.length);
var conEurope = __.where(countries, {
    continent: "EU"
});
console.log("Europe " + conEurope.length);
var conNorthAmerica = __.where(countries, {
    continent: "NA"
});
console.log("North America " + conNorthAmerica.length);
var conOceania = __.where(countries, {
    continent: "OC"
});
console.log("Oceania " + conOceania.length);
var conSouthAmerica = __.where(countries, {
    continent: "SA"
});
console.log("South America " + conSouthAmerica.length);
console.log(conAfrica.length + conAntarctica.length + conAsia.length + conEurope.length + conNorthAmerica.length + conOceania.length + conSouthAmerica.length);
var apiURL = "http://api.worldbank.org/countries/indicators/",
    apiFormat = "?per_page=100&date=1960:2014&format=json";

exports.index = function (req, res, next) {
    countryModel = models.countriesModel;

    async.parallel([

    function (callback) {
            for (var i = 0, afLen = conAfrica.length; i < afLen; i++) {
                var country = new countryModel({
                    name: conAfrica[i].name,
                    native: conAfrica[i].native,
                    phone: conAfrica[i].phone,
                    continent: conAfrica[i].continent,
                    capital: conAfrica[i].capital,
                    currency: conAfrica[i].currency,
                    languages: conAfrica[i].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var j = 0, anLen = conAntarctica.length; j < anLen; j++) {
                var country = new countryModel({
                    name: conAntarctica[j].name,
                    native: conAntarctica[j].native,
                    phone: conAntarctica[j].phone,
                    continent: conAntarctica[j].continent,
                    capital: conAntarctica[j].capital,
                    currency: conAntarctica[j].currency,
                    languages: conAntarctica[j].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var k = 0, asLen = conAsia.length; k < asLen; k++) {
                var country = new countryModel({
                    name: conAsia[k].name,
                    native: conAsia[k].native,
                    phone: conAsia[k].phone,
                    continent: conAsia[k].continent,
                    capital: conAsia[k].capital,
                    currency: conAsia[k].currency,
                    languages: conAsia[k].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var l = 0, euLen = conEurope.length; l < euLen; l++) {
                var country = new countryModel({
                    name: conEurope[l].name,
                    native: conEurope[l].native,
                    phone: conEurope[l].phone,
                    continent: conEurope[l].continent,
                    capital: conEurope[l].capital,
                    currency: conEurope[l].currency,
                    languages: conEurope[l].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var m = 0, naLen = conNorthAmerica.length; m < naLen; m++) {
                var country = new countryModel({
                    name: conNorthAmerica[m].name,
                    native: conNorthAmerica[m].native,
                    phone: conNorthAmerica[m].phone,
                    continent: conNorthAmerica[m].continent,
                    capital: conNorthAmerica[m].capital,
                    currency: conNorthAmerica[m].currency,
                    languages: conNorthAmerica[m].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var n = 0, ocLen = conOceania.length; n < ocLen; n++) {
                var country = new countryModel({
                    name: conOceania[n].name,
                    native: conOceania[n].native,
                    phone: conOceania[n].phone,
                    continent: conOceania[n].continent,
                    capital: conOceania[n].capital,
                    currency: conOceania[n].currency,
                    languages: conOceania[n].languages
                });
                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    },
    function (callback) {
            for (var o = 0, saLen = conSouthAmerica.length; o < saLen; o++) {
                var country = new countryModel({
                    name: conSouthAmerica[o].name,
                    native: conSouthAmerica[o].native,
                    phone: conSouthAmerica[o].phone,
                    continent: conSouthAmerica[o].continent,
                    capital: conSouthAmerica[o].capital,
                    currency: conSouthAmerica[o].currency,
                    languages: conSouthAmerica[o].languages
                });

                country.save(function (err) {
                    if (!err) {
                        var entity = countryModel.toEntity(country);
                    } else {
                        console.log(err);
                    }
                });
            }
            callback();
    }
], function (error, results) {
        if (error) console.log(error);

        console.log("SAVED ALL COUNTRIES!");
        res.send("SAVED ALL COUNTRIES!");
    });
};

/**
 *Getting and saving of data from data.worldbank
 */
exports.PovertyHeadCount = function (req, res, next) {

    function povertyHeadCount125() {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.1.25usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }

    function povertyHeadCount25() {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.2.5usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }

    function povertyHeadCount4() {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.Poor4uds?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }

};
exports.PovertyGap = function (req, res, next) {
    function povertyGap125() {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.1.25usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }

    function povertyGap25() {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.2.5usd?per_page=100&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }

    function povertyGap4() {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.Poor4uds?per_page=100&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                console.log(result[0]);
                return result[1];
            }
        });
    }
};

/**
 * Route to use for ng-app
 */
exports.getPovertyHeadCount125 = function (req, res, next) {

};
exports.getPovertyHeadCount25 = function (req, res, next) {

};
exports.getPovertyHeadCount4 = function (req, res, next) {

};
exports.getPovertyGap125 = function (req, res, next) {

};
exports.getPovertyGap25 = function (req, res, next) {

};
exports.getPovertyGap4 = function (req, res, next) {

};
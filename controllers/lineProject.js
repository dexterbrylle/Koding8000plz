var __ = require('underscore');
var countriesJson = require('../models/countries.json');

exports.index = function (req, res, next) {

    //Array of Countries per continent
    var conAfrica = [];
    var conAntarctica = [];
    var conAsia = [];
    var conEurope = [];
    var conNorthAmerica = [];
    var conOceania = [];
    var conSouthAmerica = [];

    var countries = [];


    res.send(countriesJson.countries.PH);
};
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
var conAntarctica = __.where(countries, {
    continent: "AN"
});
var conAsia = __.where(countries, {
    continent: "AS"
});
var conEurope = __.where(countries, {
    continent: "EU"
});
var conNorthAmerica = __.where(countries, {
    continent: "NA"
});
var conOceania = __.where(countries, {
    continent: "OC"
});
var conSouthAmerica = __.where(countries, {
    continent: "SA"
});

var countryModel = models.countriesModel,
    afCountryModel = models.afCountriesModel,
    anCountryModel = models.anCountriesModel,
    asCountryModel = models.asCountriesModel,
    euCountryModel = models.euCountriesModel,
    naCountryModel = models.naCountriesModel,
    ocCountryModel = models.ocCountriesModel,
    saCountryModel = models.saCountriesModel;

var randomValues = [17.0236, 27.2051, 29.9386, 6.0703, 19.8123, 18.1694, 16.284, 13.5752, 34.1043, 32.8647, 7.6282, 22.4806, 19.4939, 5.6427, 2.8281, 49.1538, 33.679, 30.353, 13.8071, 8.9801, 49.6638, 22.4303, 27.8024, 33.5185, 44.7696, 23.2957, 45.3602, 20.896, 9.0087, 26.4201, 26.0182, 39.7857, 28.3799, 3.2669, 39.6468, 30.7199, 11.3127, 30.2288, 12.2974, 24.6704, 31.6706, 28.4973, 39.9287, 22.1469, 37.7627, 9.7121, 47.4288, 28.4246, 49.1145, 18.0962, 2.3531, 5.5705, 42.1811, 13.0446, 39.5111, 13.846, 49.8105, 42.0234, 26.6607, 11.5421, 39.6736, 17.1204, 33.8592, 22.9505, 41.6841, 21.1962, 14.849, 14.6954, 37.4214, 7.4523, 5.5922, 6.2385, 11.8103, 8.0537, 44.8813, 27.0426, 22.3021, 15.2161, 32.2167, 34.3396, 47.2635, 21.1814, 10.353, 39.0098, 44.7844, 37.5235, 49.0265, 12.9226, 17.5378, 18.8112, 30.7309, 46.8955, 29.4318, 9.5988, 39.476, 5.5637, 46.7183, 3.435, 41.9944, 12.4275, 18.0482, 28.3426, 4.4932, 18.0402, 24.4581, 9.669, 32.0162, 11.5218, 17.6282, 18.5557, 4.2273, 20.0877, 1.597, 24.3565, 17.713, 19.7251, 22.6181, 49.5764, 21.5352, 36.4353, 33.291, 43.8585, 3.0072, 36.7251, 8.6595, 25.9782, 31.9864, 41.4039, 5.9344, 43.4059, 43.2189, 44.4311, 12.1566, 40.0153, 8.9784, 13.8379, 41.614, 22.7078, 29.5728, 13.0067, 36.9731, 3.6579, 26.9594, 49.5865, 31.6152, 33.5237, 42.1155, 34.2205, 18.0372, 35.9425, 10.8952, 46.0045, 31.5466, 17.5602, 38.3746, 2.284, 47.7496, 15.0546, 31.4099, 35.4665, 30.2147, 29.1463, 20.7418, 46.2528, 10.0159, 47.2295, 28.9681, 8.5075, 44.7471, 43.8632, 9.4748, 8.068, 17.8328, 26.8559, 21.5914, 19.6015, 17.1008, 47.042, 22.4818, 10.7829, 49.7351, 49.1237, 49.5318, 33.1316, 31.4794, 28.6455, 16.9587, 10.6977, 22.5561, 32.0213, 31.1066, 19.9972, 33.2165, 1.8471, 42.3446, 19.0819, 49.1007, 46.7025, 10.7123, 12.2601, 38.3153, 3.3008, 34.7404, 22.9584, 17.1005, 28.6874, 29.4549, 25.7284, 19.3339, 44.2528, 11.6683, 42.8079, 28.9871, 26.0291, 41.3714, 34.6366, 17.1182, 46.7368, 17.597, 8.125, 31.3424, 48.3821, 39.6585, 29.5881, 24.585, 49.8594, 13.8347, 49.1137, 16.2967, 32.4707, 21.8831, 41.48, 8.5633, 14.5601, 27.6577, 6.4016, 6.4461, 8.4134, 21.0351, 23.0885, 2.8929, 15.9308, 2.4326, 4.0593, 35.9895, 18.8149, 25.9717, 30.1123, 19.7306, 3.2534, 22.5944, 10.5213, 17.7662, 22.5501, 31.6662, 14.3263, 2.6696, 39.2917, 11.5547, 28.3915, 38.1659, 20.2728, 14.9761, 27.3632, 46.9643, 18.6643, 16.0835, 32.3819, 16.4673, 35.9648, 10.9042, 31.0101, 47.944, 10.0886, 35.3654, 43.1325, 30.4911, 5.7411, 42.638, 30.431, 14.8053, 37.2257, 35.8046, 3.1386, 33.8207, 31.0534, 10.2367, 26.5768, 27.9778, 14.8794, 35.6806, 12.1105, 9.5083, 17.979, 28.6179, 41.4159, 8.9115, 41.8095, 26.9601, 27.9055, 23.3791, 44.095, 1.5102, 24.2999, 19.7242, 28.972, 44.0608, 13.9743, 27.1178, 17.248, 30.625, 15.3266, 46.3197, 21.9452, 30.6869, 14.7641, 37.9112, 5.4387, 6.46, 38.9353, 11.2317, 36.8608, 16.6574, 43.2501, 11.2458, 9.2848, 20.6907, 38.843, 39.6009, 30.472, 14.0025, 13.7649, 8.7586, 22.7493, 4.6268, 33.6687, 19.6424, 13.7791, 12.0749, 37.5918, 34.5885, 5.3269, 30.9729, 25.2655, 40.4059, 19.2868, 25.1528, 43.5369, 44.2876, 48.8429, 17.3375, 16.8092, 21.9911, 40.0379, 19.8841, 2.8467, 47.6417, 16.1877, 32.7966, 2.0943, 9.2568, 28.6299, 3.8717, 46.4473, 48.9659, 5.0637, 20.6695, 15.2026, 29.0168, 5.6756, 37.9148, 17.9911, 36.764, 12.881, 43.1609, 37.9532, 12.919, 18.4686, 6.2345, 45.811, 12.8044, 15.4982, 19.0183, 28.9558, 22.9328, 23.5621, 8.0919, 45.1999, 28.917, 30.428, 33.6502, 3.6323, 32.294, 8.1788, 43.8175, 49.0599, 22.5045, 1.6362, 42.6339, 13.1334];

var randomValues2 = [10.9783, 7.6331, 8.5814, 12.8597, 19.664, 19.3179, 8.3964, 11.3752, 6.5614, 19.9715, 1.2972, 9.5326, 15.8541, 15.7991, 14.1741, 16.6243, 14.7218, 17.5184, 18.0275, 6.2101, 5.3002, 13.1315, 18.6126, 4.2386, 16.241, 11.4604, 4.9007, 9.472, 1.175, 19.1487, 18.7338, 8.1584, 12.851, 7.4065, 15.1292, 9.5707, 8.9637, 5.6207, 16.3319, 13.5599, 1.6034, 1.1945, 15.7149, 2.065, 2.7946, 14.2887, 13.4079, 5.194, 17.3871, 8.8677, 7.2214, 3.8819, 16.7818, 19.8861, 3.159, 15.7463, 3.036, 13.3337, 1.1601, 18.503, 1.6248, 4.5363, 13.1145, 9.3081, 6.1896, 2.7743, 5.2634, 14.5759, 10.9366, 15.2545, 1.7089, 19.3558, 9.7094, 9.2453, 19.4299, 2.2723, 6.7283, 1.6249, 12.5085, 12.5925, 7.4737, 19.6977, 15.5278, 11.9562, 5.7625, 16.8171, 5.9603, 11.5488, 6.6261, 10.5768, 19.4734, 16.2407, 2.0764, 7.189, 11.0727, 7.1525, 9.2505, 17.0244, 18.5184, 14.3278, 16.8983, 2.0715, 8.4809, 1.0516, 14.243, 17.5865, 2.6533, 18.3261, 4.476, 3.96, 14.4263, 19.1272, 19.0408, 1.6671, 10.5473, 13.5466, 17.275, 18.5426, 7.1083, 3.6036, 3.1897, 10.3449, 14.9017, 19.1613, 2.6691, 9.0932, 7.6593, 17.2734, 19.1575, 19.3174, 3.1461, 11.2162, 6.8726, 10.7068, 9.2594, 5.4392, 1.6803, 12.1488, 8.6636, 13.6571, 8.6107, 5.3408, 4.0464, 7.5651, 6.4701, 8.6397, 3.2727, 6.6237, 13.6541, 15.9611, 19.907, 2.7917, 19.5896, 18.3575, 3.4525, 15.4056, 16.5973, 13.3479, 3.6777, 7.9935, 12.8097, 16.764, 9.0205, 2.1664, 9.4378, 10.8086, 3.3025, 4.2112, 4.0971, 4.917, 10.1806, 4.2757, 15.9992, 11.9849, 6.8049, 1.9233, 19.262, 9.0357, 11.1289, 18.4717, 10.1563, 9.9525, 4.721, 19.2385, 10.4955, 4.3146, 10.8604, 4.3593, 9.931, 13.0172, 1.6829, 3.9098, 12.7125, 9.341, 5.7078, 18.735, 15.9812, 16.6016, 13.8553, 14.893, 3.2431, 7.6399, 8.9408, 15.0874, 17.1197, 4.5691, 16.7261, 7.9243, 6.9195, 4.6862, 15.8491, 4.7461, 19.894, 16.3659, 13.2281, 14.5232, 17.9379, 3.3698, 7.5727, 6.215, 5.9313, 1.5939, 17.0431, 11.9682, 3.5595, 13.6513, 5.0279, 12.1816, 19.8213, 7.7463, 6.2907, 16.4388, 10.9022, 5.1386, 12.7111, 7.604, 8.5633, 13.1532, 4.0116, 6.6235, 11.2021, 13.7943, 13.7192, 11.3953, 17.342, 3.4659, 18.7996, 1.573, 1.0933, 19.694, 17.3095, 9.938, 12.1593, 14.5101, 2.6903, 17.457, 7.9248, 14.2924, 12.4282, 2.0595, 7.0466, 2.2491, 1.8226, 17.2853, 19.6086, 18.307, 1.8196, 15.324, 16.0507, 8.3449, 7.5114, 5.7696, 17.8145, 2.1932, 5.748, 12.6004, 12.0226, 12.1655, 19.9227, 3.2918, 15.5681, 14.7008, 8.1832, 4.4639, 6.9986, 15.1551, 13.2409, 18.7436, 17.2823, 12.6325, 2.3416, 17.5702, 19.1814, 14.7427, 15.9016, 14.2781, 4.9691, 19.3332, 9.6373, 8.5321];

var randomValues3 = [5.4424, 7.7792, 1.5625, 2.5389, 9.463, 2.1686, 3.4734, 4.3232, 9.585, 6.6931, 3.9356, 5.0807, 7.602, 1.8566, 4.4492, 3.1426, 2.0227, 9.2507, 4.0441, 8.1824, 7.1664, 8.7384, 4.8698, 9.4352, 4.3126, 8.7383, 7.7348, 5.2486, 9.4824, 2.5983, 8.5633, 1.9975, 2.7987, 1.9302, 8.6678, 2.8973, 1.4481, 9.5359, 9.4318, 7.0749, 7.1817, 5.9184, 7.7413, 9.0646, 8.6817, 3.5147, 1.7362, 9.2961, 8.8316, 8.9169, 3.0485, 3.3642, 6.8887, 7.3684, 3.3202, 3.8524, 6.6776, 8.3927, 7.5324, 7.959, 8.4235, 9.821, 8.2372, 9.2997, 6.3159, 9.8554, 9.1171, 5.1134, 8.6902, 2.5581, 4.229, 5.7743, 4.8486, 8.9252, 4.8258, 9.0917, 6.3059, 5.0932, 7.5205, 4.4918, 6.8973, 5.1328, 3.9168, 2.2725, 3.9695, 4.1606, 1.5861, 8.5747, 9.8131, 3.0129, 4.9293, 1.2891, 7.0354, 8.7204, 1.6189, 8.3509, 4.1829, 5.9031, 4.2251, 4.2198, 8.2678, 2.7881, 6.1862, 8.4581, 9.6574, 1.9093, 4.2063, 4.357, 7.8802, 1.0147, 5.832, 7.7446, 3.1526, 4.8186, 6.595, 8.5956, 9.2053, 2.3636, 9.6573, 2.8174, 6.6087, 4.928, 2.4734, 9.2352, 2.0529, 2.7863, 2.3439, 2.8575, 1.4663, 8.7216, 8.0694, 6.9237, 7.9989, 4.2941, 7.1312, 9.8745, 6.9407, 9.6015, 4.0601, 5.6522, 2.2701, 9.2395, 3.9838, 8.9365, 3.6086, 1.6362, 9.2123, 6.5673, 1.0444, 4.936, 6.2653, 4.4713, 2.5838, 9.4374, 9.7328, 1.394, 4.4689, 3.0667, 1.3674, 4.3736, 6.7377, 8.003, 2.1297, 6.31, 4.0809, 7.89, 6.7294, 6.2033, 7.8176, 9.8062, 4.0986, 2.0204, 9.7531, 9.5098, 3.8065, 9.4284, 2.1286, 7.432, 6.3364, 3.4558, 9.4423, 6.064, 9.6095, 2.0745, 8.8542, 6.3763, 1.0721, 8.8145, 1.4312, 9.6122, 6.4419, 5.4508, 8.8423, 2.3199, 3.0307, 3.096, 9.997, 4.725, 6.4392, 8.5028, 5.3228, 2.5476, 7.1008, 9.8286, 8.4869, 9.147, 9.8001, 9.2339, 6.5127, 8.7601, 5.2831, 5.175, 3.7875, 7.7796, 3.7673, 2.2255, 2.9129, 1.324, 7.0221, 9.5176, 4.2685, 4.2907, 9.1024, 5.6283, 8.7495, 9.7309, 1.1593, 1.9017, 1.9059, 6.0391, 5.7557, 6.0633, 7.9047, 4.4966, 9.0373, 9.2915, 1.3772, 4.8715, 9.3113, 6.9944, 9.26, 9.941, 5.4869, 5.7733, 9.1339, 7.3321, 9.1092, 5.7273, 8.7185, 9.8237, 3.768, 6.0759, 8.6076, 8.8172, 6.3306, 9.0175, 2.4936, 9.4286, 3.4595, 9.6661, 4.78, 4.25, 6.2951, 9.5717, 9.5126, 9.0222, 7.345, 9.9046, 4.4574, 6.1132, 6.7779, 4.4823, 3.7469, 5.4319, 3.4955, 4.7056, 9.9996, 8.4232, 9.4976, 7.9336, 1.0985, 1.5887, 9.7447, 8.2224, 1.1729, 5.8251, 7.2217, 9.8767, 9.9942, 7.0567, 9.7715, 5.1313, 4.2055, 9.4796, 1.7465, 7.8868, 3.4141, 7.9032, 6.84, 9.2205];

var years = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2012"];

exports.index = function (req, res, next) {

    async.parallel([

    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var i = 0, afLen = conAfrica.length; i < afLen; i++) {
                    var country = new afCountryModel({
                        name: conAfrica[i].name,
                        native: conAfrica[i].native,
                        phone: conAfrica[i].phone,
                        continent: conAfrica[i].continent,
                        capital: conAfrica[i].capital,
                        currency: conAfrica[i].currency,
                        languages: conAfrica[i].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = afCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var j = 0, anLen = conAntarctica.length; j < anLen; j++) {
                    var country = new anCountryModel({
                        name: conAntarctica[j].name,
                        native: conAntarctica[j].native,
                        phone: conAntarctica[j].phone,
                        continent: conAntarctica[j].continent,
                        capital: conAntarctica[j].capital,
                        currency: conAntarctica[j].currency,
                        languages: conAntarctica[j].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = anCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var k = 0, asLen = conAsia.length; k < asLen; k++) {
                    var country = new asCountryModel({
                        name: conAsia[k].name,
                        native: conAsia[k].native,
                        phone: conAsia[k].phone,
                        continent: conAsia[k].continent,
                        capital: conAsia[k].capital,
                        currency: conAsia[k].currency,
                        languages: conAsia[k].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = asCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var l = 0, euLen = conEurope.length; l < euLen; l++) {
                    var country = new euCountryModel({
                        name: conEurope[l].name,
                        native: conEurope[l].native,
                        phone: conEurope[l].phone,
                        continent: conEurope[l].continent,
                        capital: conEurope[l].capital,
                        currency: conEurope[l].currency,
                        languages: conEurope[l].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = euCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var m = 0, naLen = conNorthAmerica.length; m < naLen; m++) {
                    var country = new naCountryModel({
                        name: conNorthAmerica[m].name,
                        native: conNorthAmerica[m].native,
                        phone: conNorthAmerica[m].phone,
                        continent: conNorthAmerica[m].continent,
                        capital: conNorthAmerica[m].capital,
                        currency: conNorthAmerica[m].currency,
                        languages: conNorthAmerica[m].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = naCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var n = 0, ocLen = conOceania.length; n < ocLen; n++) {
                    var country = new ocCountryModel({
                        name: conOceania[n].name,
                        native: conOceania[n].native,
                        phone: conOceania[n].phone,
                        continent: conOceania[n].continent,
                        capital: conOceania[n].capital,
                        currency: conOceania[n].currency,
                        languages: conOceania[n].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });
                    country.save(function (err) {
                        if (!err) {
                            var entity = ocCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
            callback();
    },
    function (callback) {
            for (var h = 0, yrlen = years.length; h < yrlen; h++) {
                for (var o = 0, saLen = conSouthAmerica.length; o < saLen; o++) {
                    var country = new saCountryModel({
                        name: conSouthAmerica[o].name,
                        native: conSouthAmerica[o].native,
                        phone: conSouthAmerica[o].phone,
                        continent: conSouthAmerica[o].continent,
                        capital: conSouthAmerica[o].capital,
                        currency: conSouthAmerica[o].currency,
                        languages: conSouthAmerica[o].languages,
                        povertyhcount_125_value: randomValues[Math.floor(Math.random() * randomValues.length)],
                        povertyhcount_125_date: years[h],
                        povertyhcount_25_value: randomValues2[Math.floor(Math.random() * randomValues2.length)],
                        povertyhcount_25_date: years[h],
                        povertyhcount_4_value: randomValues3[Math.floor(Math.random() * randomValues3.length)],
                        povertyhcount_4_date: years[h]
                    });

                    country.save(function (err) {
                        if (!err) {
                            var entity = saCountryModel.toEntity(country);
                        } else {
                            console.log(err);
                        }
                    });
                }
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

    function povertyHeadCount125(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.1.25usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                callback(null, result[1]);
            }
        });
    }

    function povertyHeadCount25(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.2.5usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                callback(null, result[1]);
            }
        });
    }

    function povertyHeadCount4(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.HCount.Poor4uds?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                callback(null, result[1]);
            }
        });
    }

    async.parallel([
        async.apply(povertyHeadCount125),
        async.apply(povertyHeadCount25),
        async.apply(povertyHeadCount4)
    ], function (error, results) {
        if (error)
            console.log(error)

        var povertyHC125 = results[0],
            povertyHC25 = results[1],
            povertyHC4 = results[2];

        function arrayHasOwnIndex(array, prop) {
            return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
        }

        for (key in povertyHC125) {
            if (arrayHasOwnIndex(povertyHC125, key)) {
                console.log(povertyHC125[key].country.value);
            }
        }
        for (key2 in afCountryNames) {
            if (arrayHasOwnIndex(afCountryNames, key2)) {
                res.send(afCountryNames[key2]);
            }
        }

    });

};
exports.PovertyGap = function (req, res, next) {

    function povertyGap125(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.1.25usd?per_page=273&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                //                console.log(result[0]);
                callback(null, result[1]);
            }
        });
    }

    function povertyGap25(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.2.5usd?per_page=100&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                //                console.log(result[0]);
                callback(null, result[1]);
            }
        });
    }

    function povertyGap4(callback) {
        request('http://api.worldbank.org/countries/indicators/1.0.PGap.Poor4uds?per_page=100&date=1960:2014&format=json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result = JSON.parse(body);
                //                console.log(result[0]);
                callback(null, result[1]);
            }
        });
    }

    async.parallel([
        async.apply(povertyGap125),
        async.apply(povertyGap25),
        async.apply(povertyGap4)
    ], function (error, results) {
        if (error)
            console.log(error);


        var povertyG125 = results[0],
            povertyG25 = results[1],
            povertyG4 = results[2];

        console.log(results[0]);
        console.log(results[2]);
        res.send(results[1]);
    });
};

function removeDuplicates(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) == -1) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
/**
 * Route to use for ng-app
 */
exports.getPovertyHeadCount125 = function (req, res, next) {
    async.parallel([
        //Africa
        function (callback) {
            var query = afCountryModel.find();
            var africaDetails = {};
            var africaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var afAverage = sum / data.length;

                africaDetails.averageHcount_125 = afAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var afTemp = {};
                    afTemp.name = data[k].name;
                    afTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    afTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    africaCountries.push(afTemp);
                }

                var years = removeDuplicates(__.pluck(africaCountries, 'povertyhcount_125_date'));
                africaDetails.years = years;

                for (var q = 0, len = africaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < africaCountries.length; r++) {
                        tempArray = __.filter(__.where(africaCountries, {
                            povertyhcount_125_date: africaDetails.years[q]
                        }), function (africaCountry) {
                            return africaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    africaDetails.years[q] = sum / tempArray.length;
                }

                africaDetails.topCountry_Hcount_value = __.max(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_125_value;
                });
                africaDetails.bottomCountry_Hcount_value = __.min(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_125_value;
                });
                callback(null, africaDetails);
            });
        },
        //Antarctica
        function (callback) {
            var query = anCountryModel.find();
            var antarcticaDetails = {};
            var antarcticaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var anAverage = sum / data.length;
                antarcticaDetails.averageHcount_125 = anAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var anTemp = {};
                    anTemp.name = data[k].name;
                    anTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    anTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    antarcticaCountries.push(anTemp);
                }

                var years = removeDuplicates(__.pluck(antarcticaCountries, 'povertyhcount_125_date'));
                antarcticaDetails.years = years;

                for (var q = 0, len = antarcticaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < antarcticaCountries.length; r++) {
                        tempArray = __.filter(__.where(antarcticaCountries, {
                            povertyhcount_125_date: antarcticaDetails.years[q]
                        }), function (antarcticaCountry) {
                            return antarcticaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    antarcticaDetails.years[q] = sum / tempArray.length;
                }

                antarcticaDetails.topCountry_Hcount_value = __.max(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_125_value;
                });
                antarcticaDetails.bottomCountry_Hcount_value = __.min(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_125_value;
                });
                callback(null, antarcticaDetails);
            });
        },
        //Asia
        function (callback) {
            var query = asCountryModel.find();
            var asiaDetails = {};
            var asiaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var asAverage = sum / data.length;
                asiaDetails.averageHcount_125 = asAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var asTemp = {};
                    asTemp.name = data[k].name;
                    asTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    asTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    asiaCountries.push(asTemp);
                }

                var years = removeDuplicates(__.pluck(asiaCountries, 'povertyhcount_125_date'));
                asiaDetails.years = years;

                for (var q = 0, len = asiaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < asiaCountries.length; r++) {
                        tempArray = __.filter(__.where(asiaCountries, {
                            povertyhcount_125_date: asiaDetails.years[q]
                        }), function (asiaCountry) {
                            return asiaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    asiaDetails.years[q] = sum / tempArray.length;
                }

                asiaDetails.topCountry_Hcount_value = __.max(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_125_value;
                });
                asiaDetails.bottomCountry_Hcount_value = __.min(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_125_value;
                });
                callback(null, asiaDetails);
            });
        },
        //Europe
        function (callback) {
            var query = euCountryModel.find();
            var europeDetails = {};
            var europeCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var euAverage = sum / data.length;
                europeDetails.averageHcount_125 = euAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var euTemp = {};
                    euTemp.name = data[k].name;
                    euTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    euTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    europeCountries.push(euTemp);
                }

                var years = removeDuplicates(__.pluck(europeCountries, 'povertyhcount_125_date'));
                europeDetails.years = years;

                for (var q = 0, len = europeDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < europeCountries.length; r++) {
                        tempArray = __.filter(__.where(europeCountries, {
                            povertyhcount_125_date: europeDetails.years[q]
                        }), function (europeCountry) {
                            return europeCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    europeDetails.years[q] = sum / tempArray.length;
                }

                europeDetails.topCountry_Hcount_value = __.max(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_125_value;
                });
                europeDetails.bottomCountry_Hcount_value = __.min(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_125_value;
                });
                callback(null, europeDetails);
            });
        },
        //North America
        function (callback) {
            var query = naCountryModel.find();
            var northAmericaDetails = {};
            var northAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var naAverage = sum / data.length;
                northAmericaDetails.averageHcount_125 = naAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var naTemp = {};
                    naTemp.name = data[k].name;
                    naTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    naTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    northAmericaCountries.push(naTemp);
                }

                var years = removeDuplicates(__.pluck(northAmericaCountries, 'povertyhcount_125_date'));
                northAmericaDetails.years = years;

                for (var q = 0, len = northAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < northAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(northAmericaCountries, {
                            povertyhcount_125_date: northAmericaDetails.years[q]
                        }), function (northAmericaCountry) {
                            return northAmericaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    northAmericaDetails.years[q] = sum / tempArray.length;
                }

                northAmericaDetails.topCountry_Hcount_value = __.max(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_125_value;
                });
                northAmericaDetails.bottomCountry_Hcount_value = __.min(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_125_value;
                });
                callback(null, northAmericaDetails);
            });
        },
        //Oceania
        function (callback) {
            var query = ocCountryModel.find();
            var oceaniaDetails = {};
            var oceaniaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var ocAverage = sum / data.length;
                oceaniaDetails.averageHcount_125 = ocAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var ocTemp = {};
                    ocTemp.name = data[k].name;
                    ocTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    ocTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    oceaniaCountries.push(ocTemp);
                }

                var years = removeDuplicates(__.pluck(oceaniaCountries, 'povertyhcount_125_date'));
                oceaniaDetails.years = years;

                for (var q = 0, len = oceaniaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < oceaniaCountries.length; r++) {
                        tempArray = __.filter(__.where(oceaniaCountries, {
                            povertyhcount_125_date: oceaniaDetails.years[q]
                        }), function (oceaniaCountry) {
                            return oceaniaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    oceaniaDetails.years[q] = sum / tempArray.length;
                }

                oceaniaDetails.topCountry_Hcount_value = __.max(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_125_value;
                });
                oceaniaDetails.bottomCountry_Hcount_value = __.min(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_125_value;
                });
                callback(null, oceaniaDetails);
            });
        },
        //South America
        function (callback) {
            var query = saCountryModel.find();
            var southAmericaDetails = {};
            var southAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_125_value;
                }
                var saAverage = sum / data.length;
                southAmericaDetails.averageHcount_125 = saAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var saTemp = {};
                    saTemp.name = data[k].name;
                    saTemp.povertyhcount_125_value = +data[k].povertyhcount_125_value;
                    saTemp.povertyhcount_125_date = +data[k].povertyhcount_125_date;
                    southAmericaCountries.push(saTemp);
                }

                var years = removeDuplicates(__.pluck(southAmericaCountries, 'povertyhcount_125_date'));
                southAmericaDetails.years = years;

                for (var q = 0, len = southAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < southAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(southAmericaCountries, {
                            povertyhcount_125_date: southAmericaDetails.years[q]
                        }), function (southAmericaCountry) {
                            return southAmericaCountry.povertyhcount_125_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_125_value;
                    }
                    southAmericaDetails.years[q] = sum / tempArray.length;
                }

                southAmericaDetails.topCountry_Hcount_value = __.max(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_125_value;
                });
                southAmericaDetails.bottomCountry_Hcount_value = __.min(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_125_value;
                });
                callback(null, southAmericaDetails);
            });
        },
    ], function (error, results) {
        if (error)
            console.log(error);
        //console.log(results[0].length);
        var lineProject_hcount_125 = {};
        lineProject_hcount_125.Africa = results[0];
        lineProject_hcount_125.Antarctica = results[1];
        lineProject_hcount_125.Asia = results[2];
        lineProject_hcount_125.Europe = results[3];
        lineProject_hcount_125.NorthAmerica = results[4];
        lineProject_hcount_125.Oceania = results[5];
        lineProject_hcount_125.SouthAmerica = results[6];
        res.send(lineProject_hcount_125);
    });
};
exports.getPovertyHeadCount25 = function (req, res, next) {
    async.parallel([
        //Africa
        function (callback) {
            var query = afCountryModel.find();
            var africaDetails = {};
            var africaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var afAverage = sum / data.length;

                africaDetails.averageHcount_25 = afAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var afTemp = {};
                    afTemp.name = data[k].name;
                    afTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    afTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    africaCountries.push(afTemp);
                }

                var years = removeDuplicates(__.pluck(africaCountries, 'povertyhcount_25_date'));
                africaDetails.years = years;

                for (var q = 0, len = africaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < africaCountries.length; r++) {
                        tempArray = __.filter(__.where(africaCountries, {
                            povertyhcount_25_date: africaDetails.years[q]
                        }), function (africaCountry) {
                            return africaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    africaDetails.years[q] = sum / tempArray.length;
                }

                africaDetails.topCountry_Hcount_value = __.max(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_25_value;
                });
                africaDetails.bottomCountry_Hcount_value = __.min(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_25_value;
                });
                callback(null, africaDetails);
            });
        },
        //Antarctica
        function (callback) {
            var query = anCountryModel.find();
            var antarcticaDetails = {};
            var antarcticaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var anAverage = sum / data.length;
                antarcticaDetails.averageHcount_25 = anAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var anTemp = {};
                    anTemp.name = data[k].name;
                    anTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    anTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    antarcticaCountries.push(anTemp);
                }

                var years = removeDuplicates(__.pluck(antarcticaCountries, 'povertyhcount_25_date'));
                antarcticaDetails.years = years;

                for (var q = 0, len = antarcticaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < antarcticaCountries.length; r++) {
                        tempArray = __.filter(__.where(antarcticaCountries, {
                            povertyhcount_25_date: antarcticaDetails.years[q]
                        }), function (antarcticaCountry) {
                            return antarcticaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    antarcticaDetails.years[q] = sum / tempArray.length;
                }

                antarcticaDetails.topCountry_Hcount_value = __.max(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_25_value;
                });
                antarcticaDetails.bottomCountry_Hcount_value = __.min(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_25_value;
                });
                callback(null, antarcticaDetails);
            });
        },
        //Asia
        function (callback) {
            var query = asCountryModel.find();
            var asiaDetails = {};
            var asiaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var asAverage = sum / data.length;
                asiaDetails.averageHcount_25 = asAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var asTemp = {};
                    asTemp.name = data[k].name;
                    asTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    asTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    asiaCountries.push(asTemp);
                }

                var years = removeDuplicates(__.pluck(asiaCountries, 'povertyhcount_25_date'));
                asiaDetails.years = years;

                for (var q = 0, len = asiaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < asiaCountries.length; r++) {
                        tempArray = __.filter(__.where(asiaCountries, {
                            povertyhcount_25_date: asiaDetails.years[q]
                        }), function (asiaCountry) {
                            return asiaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    asiaDetails.years[q] = sum / tempArray.length;
                }

                asiaDetails.topCountry_Hcount_value = __.max(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_25_value;
                });
                asiaDetails.bottomCountry_Hcount_value = __.min(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_25_value;
                });
                callback(null, asiaDetails);
            });
        },
        //Europe
        function (callback) {
            var query = euCountryModel.find();
            var europeDetails = {};
            var europeCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var euAverage = sum / data.length;
                europeDetails.averageHcount_25 = euAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var euTemp = {};
                    euTemp.name = data[k].name;
                    euTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    euTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    europeCountries.push(euTemp);
                }

                var years = removeDuplicates(__.pluck(europeCountries, 'povertyhcount_25_date'));
                europeDetails.years = years;

                for (var q = 0, len = europeDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < europeCountries.length; r++) {
                        tempArray = __.filter(__.where(europeCountries, {
                            povertyhcount_25_date: europeDetails.years[q]
                        }), function (europeCountry) {
                            return europeCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    europeDetails.years[q] = sum / tempArray.length;
                }

                europeDetails.topCountry_Hcount_value = __.max(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_25_value;
                });
                europeDetails.bottomCountry_Hcount_value = __.min(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_25_value;
                });
                callback(null, europeDetails);
            });
        },
        //North America
        function (callback) {
            var query = naCountryModel.find();
            var northAmericaDetails = {};
            var northAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var naAverage = sum / data.length;
                northAmericaDetails.averageHcount_25 = naAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var naTemp = {};
                    naTemp.name = data[k].name;
                    naTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    naTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    northAmericaCountries.push(naTemp);
                }

                var years = removeDuplicates(__.pluck(northAmericaCountries, 'povertyhcount_25_date'));
                northAmericaDetails.years = years;

                for (var q = 0, len = northAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < northAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(northAmericaCountries, {
                            povertyhcount_25_date: northAmericaDetails.years[q]
                        }), function (northAmericaCountry) {
                            return northAmericaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    northAmericaDetails.years[q] = sum / tempArray.length;
                }

                northAmericaDetails.topCountry_Hcount_value = __.max(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_25_value;
                });
                northAmericaDetails.bottomCountry_Hcount_value = __.min(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_25_value;
                });
                callback(null, northAmericaDetails);
            });
        },
        //Oceania
        function (callback) {
            var query = ocCountryModel.find();
            var oceaniaDetails = {};
            var oceaniaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var ocAverage = sum / data.length;
                oceaniaDetails.averageHcount_25 = ocAverage;


                for (var k = 0, len = data.length; k < len; k++) {
                    var ocTemp = {};
                    ocTemp.name = data[k].name;
                    ocTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    ocTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    oceaniaCountries.push(ocTemp);
                }

                var years = removeDuplicates(__.pluck(oceaniaCountries, 'povertyhcount_25_date'));
                oceaniaDetails.years = years;

                for (var q = 0, len = oceaniaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < oceaniaCountries.length; r++) {
                        tempArray = __.filter(__.where(oceaniaCountries, {
                            povertyhcount_25_date: oceaniaDetails.years[q]
                        }), function (oceaniaCountry) {
                            return oceaniaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    oceaniaDetails.years[q] = sum / tempArray.length;
                }

                oceaniaDetails.topCountry_Hcount_value = __.max(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_25_value;
                });
                oceaniaDetails.bottomCountry_Hcount_value = __.min(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_25_value;
                });
                callback(null, oceaniaDetails);
            });
        },
        //South America
        function (callback) {
            var query = saCountryModel.find();
            var southAmericaDetails = {};
            var southAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_25_value;
                }
                var saAverage = sum / data.length;
                southAmericaDetails.averageHcount_25 = saAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var saTemp = {};
                    saTemp.name = data[k].name;
                    saTemp.povertyhcount_25_value = +data[k].povertyhcount_25_value;
                    saTemp.povertyhcount_25_date = +data[k].povertyhcount_25_date;
                    southAmericaCountries.push(saTemp);
                }

                var years = removeDuplicates(__.pluck(southAmericaCountries, 'povertyhcount_25_date'));
                southAmericaDetails.years = years;

                for (var q = 0, len = southAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < southAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(southAmericaCountries, {
                            povertyhcount_25_date: southAmericaDetails.years[q]
                        }), function (southAmericaCountry) {
                            return southAmericaCountry.povertyhcount_25_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_25_value;
                    }
                    southAmericaDetails.years[q] = sum / tempArray.length;
                }

                southAmericaDetails.topCountry_Hcount_value = __.max(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_25_value;
                });
                southAmericaDetails.bottomCountry_Hcount_value = __.min(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_25_value;
                });
                callback(null, southAmericaDetails);
            });
        },
    ], function (error, results) {
        if (error)
            console.log(error);
        //console.log(results[0].length);
        var lineProject_hcount_25 = {};
        lineProject_hcount_25.Africa = results[0];
        lineProject_hcount_25.Antarctica = results[1];
        lineProject_hcount_25.Asia = results[2];
        lineProject_hcount_25.Europe = results[3];
        lineProject_hcount_25.NorthAmerica = results[4];
        lineProject_hcount_25.Oceania = results[5];
        lineProject_hcount_25.SouthAmerica = results[6];
        res.send(lineProject_hcount_25);
    });
};

exports.getPovertyHeadCount4 = function (req, res, next) {
    async.parallel([
        //Africa
        function (callback) {
            var query = afCountryModel.find();
            var africaDetails = {};
            var africaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var afAverage = sum / data.length;

                africaDetails.averageHcount_4 = afAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var afTemp = {};
                    afTemp.name = data[k].name;
                    afTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    afTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    africaCountries.push(afTemp);
                }

                var years = removeDuplicates(__.pluck(africaCountries, 'povertyhcount_4_date'));
                africaDetails.years = years;

                for (var q = 0, len = africaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < africaCountries.length; r++) {
                        tempArray = __.filter(__.where(africaCountries, {
                            povertyhcount_4_date: africaDetails.years[q]
                        }), function (africaCountry) {
                            return africaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    africaDetails.years[q] = sum / tempArray.length;
                }

                africaDetails.topCountry_Hcount_value = __.max(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_4_value;
                });
                africaDetails.bottomCountry_Hcount_value = __.min(africaCountries, function (africaCountry) {
                    return africaCountry.povertyhcount_4_value;
                });
                callback(null, africaDetails);
            });
        },
        //Antarctica
        function (callback) {
            var query = anCountryModel.find();
            var antarcticaDetails = {};
            var antarcticaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var anAverage = sum / data.length;
                antarcticaDetails.averageHcount_4 = anAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var anTemp = {};
                    anTemp.name = data[k].name;
                    anTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    anTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    antarcticaCountries.push(anTemp);
                }

                var years = removeDuplicates(__.pluck(antarcticaCountries, 'povertyhcount_4_date'));
                antarcticaDetails.years = years;

                for (var q = 0, len = antarcticaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < antarcticaCountries.length; r++) {
                        tempArray = __.filter(__.where(antarcticaCountries, {
                            povertyhcount_4_date: antarcticaDetails.years[q]
                        }), function (antarcticaCountry) {
                            return antarcticaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    antarcticaDetails.years[q] = sum / tempArray.length;
                }

                antarcticaDetails.topCountry_Hcount_value = __.max(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_4_value;
                });
                antarcticaDetails.bottomCountry_Hcount_value = __.min(antarcticaCountries, function (antarcticaCountry) {
                    return antarcticaCountry.povertyhcount_4_value;
                });
                callback(null, antarcticaDetails);
            });
        },
        //Asia
        function (callback) {
            var query = asCountryModel.find();
            var asiaDetails = {};
            var asiaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var asAverage = sum / data.length;
                asiaDetails.averageHcount_4 = asAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var asTemp = {};
                    asTemp.name = data[k].name;
                    asTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    asTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    asiaCountries.push(asTemp);
                }

                var years = removeDuplicates(__.pluck(asiaCountries, 'povertyhcount_4_date'));
                asiaDetails.years = years;

                for (var q = 0, len = asiaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < asiaCountries.length; r++) {
                        tempArray = __.filter(__.where(asiaCountries, {
                            povertyhcount_4_date: asiaDetails.years[q]
                        }), function (asiaCountry) {
                            return asiaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    asiaDetails.years[q] = sum / tempArray.length;
                }

                asiaDetails.topCountry_Hcount_value = __.max(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_4_value;
                });
                asiaDetails.bottomCountry_Hcount_value = __.min(asiaCountries, function (asiaCountry) {
                    return asiaCountry.povertyhcount_4_value;
                });
                callback(null, asiaDetails);
            });
        },
        //Europe
        function (callback) {
            var query = euCountryModel.find();
            var europeDetails = {};
            var europeCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var euAverage = sum / data.length;
                europeDetails.averageHcount_4 = euAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var euTemp = {};
                    euTemp.name = data[k].name;
                    euTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    euTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    europeCountries.push(euTemp);
                }

                var years = removeDuplicates(__.pluck(europeCountries, 'povertyhcount_4_date'));
                europeDetails.years = years;

                for (var q = 0, len = europeDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < europeCountries.length; r++) {
                        tempArray = __.filter(__.where(europeCountries, {
                            povertyhcount_4_date: europeDetails.years[q]
                        }), function (europeCountry) {
                            return europeCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    europeDetails.years[q] = sum / tempArray.length;
                }

                europeDetails.topCountry_Hcount_value = __.max(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_4_value;
                });
                europeDetails.bottomCountry_Hcount_value = __.min(europeCountries, function (europeCountry) {
                    return europeCountry.povertyhcount_4_value;
                });
                callback(null, europeDetails);
            });
        },
        //North America
        function (callback) {
            var query = naCountryModel.find();
            var northAmericaDetails = {};
            var northAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var naAverage = sum / data.length;
                northAmericaDetails.averageHcount_4 = naAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var naTemp = {};
                    naTemp.name = data[k].name;
                    naTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    naTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    northAmericaCountries.push(naTemp);
                }

                var years = removeDuplicates(__.pluck(northAmericaCountries, 'povertyhcount_4_date'));
                northAmericaDetails.years = years;

                for (var q = 0, len = northAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < northAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(northAmericaCountries, {
                            povertyhcount_4_date: northAmericaDetails.years[q]
                        }), function (northAmericaCountry) {
                            return northAmericaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    northAmericaDetails.years[q] = sum / tempArray.length;
                }

                northAmericaDetails.topCountry_Hcount_value = __.max(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_4_value;
                });
                northAmericaDetails.bottomCountry_Hcount_value = __.min(northAmericaCountries, function (northAmericaCountry) {
                    return northAmericaCountry.povertyhcount_4_value;
                });
                callback(null, northAmericaDetails);
            });
        },
        //Oceania
        function (callback) {
            var query = ocCountryModel.find();
            var oceaniaDetails = {};
            var oceaniaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var ocAverage = sum / data.length;
                oceaniaDetails.averageHcount_4 = ocAverage;


                for (var k = 0, len = data.length; k < len; k++) {
                    var ocTemp = {};
                    ocTemp.name = data[k].name;
                    ocTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    ocTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    oceaniaCountries.push(ocTemp);
                }

                var years = removeDuplicates(__.pluck(oceaniaCountries, 'povertyhcount_4_date'));
                oceaniaDetails.years = years;

                for (var q = 0, len = oceaniaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < oceaniaCountries.length; r++) {
                        tempArray = __.filter(__.where(oceaniaCountries, {
                            povertyhcount_4_date: oceaniaDetails.years[q]
                        }), function (oceaniaCountry) {
                            return oceaniaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    oceaniaDetails.years[q] = sum / tempArray.length;
                }

                oceaniaDetails.topCountry_Hcount_value = __.max(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_4_value;
                });
                oceaniaDetails.bottomCountry_Hcount_value = __.min(oceaniaCountries, function (oceaniaCountry) {
                    return oceaniaCountry.povertyhcount_4_value;
                });
                callback(null, oceaniaDetails);
            });
        },
        //South America
        function (callback) {
            var query = saCountryModel.find();
            var southAmericaDetails = {};
            var southAmericaCountries = [];
            query.exec(function (err, data) {
                if (err)
                    console.log(err);
                var sum = 0;
                var i = data.length;
                while (i--) {
                    sum += +data[i].povertyhcount_4_value;
                }
                var saAverage = sum / data.length;
                southAmericaDetails.averageHcount_4 = saAverage;

                for (var k = 0, len = data.length; k < len; k++) {
                    var saTemp = {};
                    saTemp.name = data[k].name;
                    saTemp.povertyhcount_4_value = +data[k].povertyhcount_4_value;
                    saTemp.povertyhcount_4_date = +data[k].povertyhcount_4_date;
                    southAmericaCountries.push(saTemp);
                }

                var years = removeDuplicates(__.pluck(southAmericaCountries, 'povertyhcount_4_date'));
                southAmericaDetails.years = years;

                for (var q = 0, len = southAmericaDetails.years.length; q < len; q++) {
                    var tempArray = [];
                    for (r = 0; r < southAmericaCountries.length; r++) {
                        tempArray = __.filter(__.where(southAmericaCountries, {
                            povertyhcount_4_date: southAmericaDetails.years[q]
                        }), function (southAmericaCountry) {
                            return southAmericaCountry.povertyhcount_4_value;
                        });
                    }
                    var sum = 0;
                    var i = tempArray.length;
                    while (i--) {
                        sum += tempArray[i].povertyhcount_4_value;
                    }
                    southAmericaDetails.years[q] = sum / tempArray.length;
                }

                southAmericaDetails.topCountry_Hcount_value = __.max(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_4_value;
                });
                southAmericaDetails.bottomCountry_Hcount_value = __.min(southAmericaCountries, function (southAmericaCountry) {
                    return southAmericaCountry.povertyhcount_4_value;
                });
                callback(null, southAmericaDetails);
            });
        },
    ], function (error, results) {
        if (error)
            console.log(error);
        //console.log(results[0].length);
        var lineProject_hcount_4 = {};
        lineProject_hcount_4.Africa = results[0];
        lineProject_hcount_4.Antarctica = results[1];
        lineProject_hcount_4.Asia = results[2];
        lineProject_hcount_4.Europe = results[3];
        lineProject_hcount_4.NorthAmerica = results[4];
        lineProject_hcount_4.Oceania = results[5];
        lineProject_hcount_4.SouthAmerica = results[6];
        res.send(lineProject_hcount_4);
    });
};
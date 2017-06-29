/*controlador rotas*/


/*GET home page*/

module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find a place to work with near you!'
        }
    });
}

/*GET 'Location info' page*/

module.exports.locationInfo = function (req, res) {
    res.render('location-info', { title: 'Location Info' });
}

/*GET 'Add Review' page */

module.exports.addReview = function (req, res) {
    res.render('location-review-form', { title: 'Add Review' });
}
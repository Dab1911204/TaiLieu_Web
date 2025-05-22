class NewController {
    //[GET] /news
    index(req, res) {
        return res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        return res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewController(); //để xuất newController ra ngoài

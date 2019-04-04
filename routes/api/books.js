const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");



router.get("/", (req, res) => {
    axios   
        .get("https://www.googleapis.com/books/v1/volumes?q=" + {params: req.query} + "&orderBy=newest&key=yourAPIKey")
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));

});

router.route("/")
    .post(booksController.create);

router.route("/:id")
    .delete(booksController.remove);

module.exports = router;

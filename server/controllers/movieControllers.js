const Movie = require('../models/Movies')

const sortMovies = (sort, select) => {
    if (!sort) {
        return Movie.find({ genre: select })
    }
    else if (!select) {
        if (sort === "newest") {
            return Movie.find().sort({ year: - 1 })
        }
        else if (sort === "seen") {
            return Movie.find().sort({ seen: - 1 })
        }
        else if (sort === "rate") {
            return Movie.find().sort({ rate: - 1 })
        }
        else if (sort === "title") {
            return Movie.find().sort({ title: 1 })
        }
        else if (sort === "reverse") {
            return Movie.find().sort({ title: - 1 })
        }
    }
    else if (select) {
        if (sort === "newest") {
            return Movie.find({ genre: select }).sort({ year: - 1 })
        }
        else if (sort === "seen") {
            return Movie.find({ genre: select }).sort({ seen: - 1 })
        }
        else if (sort === "rate") {
            return Movie.find({ genre: select }).sort({ rate: - 1 })
        }
        else if (sort === "title") {
            return Movie.find({ genre: select }).sort({ title: 1 })
        }
        else if (sort === "reverse") {
            return Movie.find({ genre: select }).sort({ title: - 1 })
        }
    }
}


movies_get = async (req, res) => {
    Movie.find()
        .then(result => res.json(result))
}

search_get = async (req, res) => {
    await Movie.find()
        .then(result => res.json(result))
}


movies_post = (req, res) => {
    const { sorted, genre } = req.body

    if (!sorted && !genre) {
        Movie.find()
            .then(result => res.json(result))
    }
    else {
        sortMovies(sorted, genre)
            .then(result => res.json(result))
    }
}

movie_details = (req, res) => {
    const id = req.params.id
    Movie.findById(id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err)
        })
}

add_movie = (req, res) => {
    // const movie = new Movie(req.body)

    // console.log(movie)
    Movie.create(req.body)
    // .then(result => res.json(result))
    // .catch(err => console.log(err))
}

module.exports = {
    movies_get,
    movies_post,
    movie_details,
    add_movie,
    search_get
}
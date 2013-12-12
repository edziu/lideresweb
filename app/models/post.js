var mongoose    = require ('mongoose'),
    Schema      = mongoose.Schema,
    articleSchema,
    article;

articleSchema = new Schema({
    title: {
        type: String, 
        require: true
    },
    author: {
        type: String, 
        require: true
    },
    body: {
        type: String,
        require: true
    },
    comments: [{
        body: {
            type: String,
            require: true
        }, 
        date: {
            type: Date,
            require: true
        }
    }],
    date: {
        type: Date,
        default: Date.now
    },
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = article = mongoose.model('article', articleSchema);

import mongoose from 'mongoose';

const link_schema = new mongoose.Schema({
    original: String,
    short: String
});

const Links = mongoose.model('Links', link_schema);

export default Links
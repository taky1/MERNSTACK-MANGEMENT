import mongoose from 'mongoose';

const processuSchema = mongoose.Schema({
 titre : String,
 icone : String,
 couleur : String,
 forme : String,
 tache : [String],
});

const processus  = mongoose.model('processus', processuSchema);

export default processus;
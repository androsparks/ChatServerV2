const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendshipSchema = new Schema({

    from:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    to:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{
    timestamps: true
});

module.exports = mongoose.model("Friendship", friendshipSchema);
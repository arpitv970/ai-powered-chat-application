import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 6,
        },
        pic: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('User', userSchema);

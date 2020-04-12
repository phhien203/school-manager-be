import * as mongoose from 'mongoose';

export const StudentsSchema = new mongoose.Schema({
    fullName: String,
    dob: Date,
    email: String,
    address: String,
    tel: String,
    class: String
})

import mongoose, { Schema, Model, Document } from "mongoose";


export interface BookType extends Document {
    id: number;
    title: string;
    author: string;
    genre: string;
}

const schema = new Schema<BookType>({
    id: {  type: Number},
    title: { type: String },
    author: { type: String },
    genre: { type: String }
});


const modelName: string = 'Book';

export default mongoose.models[modelName] as Model<BookType> || mongoose.model<BookType>(modelName, schema);

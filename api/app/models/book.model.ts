import mongoose = require('mongoose');

export interface Book extends mongoose.Document {
  name: string;
  genre?: string;
  year: number;
  imageUrl?: string;
}

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: false },
  year: { type: Number, required: true },
  imageUrl: { type: String, required: false }
});

export default mongoose.model<Book>('Book', bookSchema);

import { Request, Response } from "express";
import Book, * as bookModel from '../Models/bookModel';



export const addBook = (req: Request, res: Response) => {
    res.render('pages/mybook', { BdBook });
};

const addSeqId = async () => {
    const lastBook = await Book.findOne({}, {}, { sort: { id: -1 } });
    const nextId = lastBook ? lastBook.id + 1 : 1;
    return nextId;
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const { title, author, genre } = req.body;
        const nextId = await addSeqId();


        const newBook: bookModel.BookType = new Book({
            id: nextId,
            title,
            author,
            genre
        });
        
        const savedBook = await newBook.save();
        console.log(savedBook);
        res.redirect('/');
    } catch (error) {
        console.log("Erro ao tentar salvar o livro:", error);
        res.status(500).send('Erro ao tentar salvar o livro.');
    }
};




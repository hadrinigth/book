import { Request, Response } from "express";
import Book from '../Models/bookModel';

export const getAllBooks = async () => {
    try {
        const books = await Book.find();
        return books;
    } catch (error) {
        throw new Error("Erro ao buscar livros armazenados");
    }
}

export const home = async (req: Request, res: Response) => {
    try {
        const BdBook = await getAllBooks();
        res.render('pages/home', { BdBook });
        console.log("Página renderizada com sucesso");
        console.log(BdBook); // Exibe a lista de livros no console
    } catch (error) {
        console.log("Erro ao tentar ler os dados de BdBook:", error);
        res.status(500).send('Erro ao buscar os livros.');
    }
};

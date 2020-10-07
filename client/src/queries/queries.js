import { gql } from 'apollo-boost'

export const getBooksQuery = gql`
{
    books {
        name
        id
    }
}`;

export const getBookQuery = gql`
    query Book($id:ID!){
        book(id:$id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
}`;

export const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}`;

// Mutations

export const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }`;




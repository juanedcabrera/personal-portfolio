import Header from '../../../components/Header/page.jsx';
import NavHorizontal from 'components/NavHorizontal/page';
import React from 'react';
import fs from 'fs';


const getBookMetaData = () => {
  const folder = './public/uploads/books';
  const files = fs.readdirSync(folder);
  const posts = files.map((file) => {
    const fileContent = fs.readFileSync(`${folder}/${file}`, 'utf8');
    const lines = fileContent.split('\n');
    const title = lines[0].replace('# ', '');
    const author = lines[2].replace('Author: ', '');
    const genre = lines[4].replace('Genre: ', '');
    const description = lines[8].replace('Description: ', '');
    const content = lines[10].replace('Thoughts: ', '');
    const slug = file.replace('.md', '');
    return {
      title,
      author,
      genre,
      description,
      slug,
      content,
    };
  });
  return posts;
};

const Readlist = () => {
  const books = getBookMetaData();
  const bookList = books.map((book) => (
    <div key={book.slug}>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <p>{book.content}</p>
    </div>
  ));

  return (
    <section>
      <Header />
      <NavHorizontal />
      {bookList}
    </section>
  );
};

export default Readlist;
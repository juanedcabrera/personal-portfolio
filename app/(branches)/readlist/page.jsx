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
    const image = lines [2].replace('Image: ', '');
    const author = lines[4].replace('Author: ', '');
    const genre = lines[6].replace('Genre: ', '');
    const review = lines[10].replace('Review: ', '');
    const thoughts = lines[12].replace('Thoughts: ', '');
    const slug = file.replace('.md', '');
    return {
      title,
      image,
      author,
      genre,
      review,
      thoughts,
      slug,
    };
  });
  return posts;
};

const Readlist = () => {
  const books = getBookMetaData();
  const bookList = books.map((book) => (
    <div key={book.slug} className="p-4 mb-6">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <img src={book.image} alt={'The cover for ' + (book.title)} width={200} height={50} className="mb-2"/>
      <p className="text-sm mb-2">Author: {book.author}</p>
      <p className="text-sm mb-2">Genre: {book.genre}</p>
      <p className="text-sm mb-2">Review: {book.review}</p>
      <p className="text-m">{book.thoughts}</p>
    </div>
  ));

  return (
    <section>
      <NavHorizontal />
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {bookList}
        </div>
      </div>
    </section>
  );
};

export default Readlist;

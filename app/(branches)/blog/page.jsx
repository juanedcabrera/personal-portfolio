import Header from '../../../components/Header/page.jsx';
import NavHorizontal from '../../../components/NavHorizontal/page.jsx';
import React from 'react';
import fs from 'fs';
import Link from 'next/link';

const getPostMetaData = () => {
  const folder = './public/uploads/posts';
  const files = fs.readdirSync(folder);
  const posts = files.map((file) => {
    const fileContent = fs.readFileSync(`${folder}/${file}`, 'utf8');
    const lines = fileContent.split('\n');
    const title = lines[0].replace('# ', '');
    const date = lines[1].replace('Date: ', '');
    const description = lines[3].replace('Description: ', '');
    const slug = file.replace('.md', '');
    return {
      title,
      date,
      description,
      slug,
    };
  });
  return posts;
};


const Blog = () => {
  const posts = getPostMetaData();
  const postsPreview = posts.map((post) => (
    <div key={post.slug}>
      <Link href={`/blog/${post.slug}`}>
      <h1>{post.title}</h1></Link>
      <p>{post.date}</p>
      <p>{post.description}</p>
    </div>
  ));

  return (
    <section>
      <Header />
      <NavHorizontal />
      <p>Blog</p>
      {postsPreview}
    </section>
  );
};

export default Blog;
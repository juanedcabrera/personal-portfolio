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

const normalDateFormatter = (date) => {
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
};

const Blog = () => {
  const posts = getPostMetaData();
  const postsPreview = posts.map((post) => (
    <div key={post.slug}>
      <Link href={`/blog/${post.slug}`}>
      <h1 className="text-2xl font-bold mb-2 cursor-pointer hover:text-gray-500">
          {post.title}
        </h1>
      </Link>
      <p>{normalDateFormatter(post.date)}</p>
      <p className="py-3" >{post.description}</p>
    </div>
  ));

  return (
    <section>
      <NavHorizontal />
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Musings</h2>
            <p className="mt-2 text-lg leading-8">
              Just some thoughts I've had over the years.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {postsPreview}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

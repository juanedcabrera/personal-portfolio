import React from 'react';
import Header from '../../../../components/Header/page.jsx';
import NavHorizontal from '../../../../components/NavHorizontal/page';
import Markdown from 'markdown-to-jsx';
import fs from 'fs';

const getPostContent = (slug) => {
    const folder = './public/uploads/posts';
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    return content;
    };


    const PostPage = ( props ) => {
        // if (!post) {
        //   return <div>Loading...</div>; // Add a loading state or error message
        // }
      const slug = props.params.slug;
        const content = getPostContent(slug);
        return (
          <section>
            <Header />
            <NavHorizontal />
            <Markdown>
            {(content)}
            </Markdown>
          </section>
        );
      };
      
      

export default PostPage;
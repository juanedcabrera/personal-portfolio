import Header from '../../../../components/Header/page.jsx';
import NavHorizontal from '../../../../components/NavHorizontal/page';
import React from 'react';
import fs from 'fs';
import { Remarkable } from 'remarkable';
import path from 'path';

const getPostContent = (slug) => {
  const folder = path.join(process.cwd(), 'public/uploads/posts');
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.splice(3, 1);
  lines.splice(1, 1);
  return lines.join('\n');
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  const renderMarkdown = (markdownContent) => {
    const remarkable = new Remarkable({
      html: true,
      breaks: true,
      heading: true,
    });

    remarkable.renderer.rules.heading_open = (tokens, idx) => {
      const tag = tokens[idx].hLevel === 1 ? 'h1' : 'h2';
      const classNames = tokens[idx].hLevel === 1 ? 'text-4xl font-bold mb-4' : 'text-2xl font-bold mb-4';
      return `<${tag} class="${classNames}">`;
    };

    remarkable.renderer.rules.heading_close = (tokens, idx) => {
      const tag = tokens[idx].hLevel === 1 ? 'h1' : 'h2';
      return `</${tag}>`;
    };

    remarkable.renderer.rules.paragraph_open = () => '<p class="mb-4">';
    remarkable.renderer.rules.hr = () => '<hr class="my-8 border-gray-300" />';
    remarkable.renderer.rules.blockquote_open = () =>
      '<blockquote class="border-l-4 pl-4 border-gray-300 italic my-4">';
    remarkable.renderer.rules.list_item_open = () => '<li class="list-disc ml-6 mb-2">';
    remarkable.renderer.rules.table_open = () => '<table class="border-collapse border border-gray-300 my-4">';
    remarkable.renderer.rules.table_close = () => '</table>';
    remarkable.renderer.rules.table_head = () => '<thead class="bg-gray-100">';
    remarkable.renderer.rules.table_body = () => '<tbody>';
    remarkable.renderer.rules.table_row = () => '<tr>';
    remarkable.renderer.rules.table_cell = (tokens, idx) => {
      const tag = tokens[idx - 1].content.startsWith('|') ? 'td' : 'th';
      const align = tokens[idx - 1].align || 'left';
      return `<${tag} class="border border-gray-300 px-4 py-2 text-${align}">`;
    };

    const html = remarkable.render(markdownContent);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <section>
      <NavHorizontal />
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 prose lg:prose-xl">
            {renderMarkdown(content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPage;

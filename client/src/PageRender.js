import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';

function generatePage(pageName) {
  const component = () => require(`./pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch {
    return <NotFound />;
  }
}

function PageRender() {
  const { page, id } = useParams();
  let pageName = "";

  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return generatePage(pageName);
}

export default PageRender;

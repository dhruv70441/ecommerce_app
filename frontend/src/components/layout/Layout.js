import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import { Helmet } from 'react-helmet';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />            
            <title>{title}</title>
        </Helmet>
        <Header />
            <main className="flex-grow">
                {children}
            </main>
        <Footer />
    </div>
  );
}


Layout.defaultProps = {
    title: 'Tech Buy',
    description: 'Tech Buy is your one-stop destination for the latest tech products at affordable prices. Browse our wide range of electronics today!',
    keywords: 'ecommerce, tech, electronics, gadgets, online shopping, MERN,REACT',
    author: 'Tech Buy Team',
  };
export default Layout;

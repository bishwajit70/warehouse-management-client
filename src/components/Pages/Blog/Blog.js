import React from 'react';

const Blog = () => {
    return (
        <div className='text-left px-5 py-20 bg-purple-50 md:px-2 lg:px-5 xl:px-36 '>
            <section className='mb-20 bg-purple-100 border rounded-lg p-5 shadow-xl'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl mb-5'>Difference between Nodejs and JavaScript: </h1>
                <h2 className='text-2xl md:text-2xl lg:text-3xl mb-5'>Answer:</h2>
                <article>
                    <p className='pb-4'> <b>NodeJS</b>   is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                    <p> <b>Javascript</b>  is a Scripting language. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
                    <br />
                    <ol>
                        <li>Javascript is a programming language that is used for writing scripts on the website. On the otherhand, NodeJS is a Javascript runtime environment.</li>
                        <li>Javascript can only be run in the browsers. But We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>Javascript is basically used on the client-side. NodeJs  is mostly used on the server-side.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.</li>

                        <li>Javascript is used in frontend development. Nodejs is used in server-side development.</li>
                    </ol>
                </article>
            </section>
            <section className='mb-20 bg-purple-100 border rounded-lg p-5 shadow-xl'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl mb-5'>When should you use NodeJs and when should you use Mongodb?</h1>
                <h2 className='text-2xl md:text-2xl lg:text-3xl mb-5'>Answer:</h2>
                <p>When should we use Nodejs?</p>
                <p>
                    Any project needs a programming environment and a runtime library that offers basic programming tools/support and can compile and/or interpret  code then Nodejs is such as tool for the Javascript programming language.
                    So, if we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it.
                </p>
                <p>When should we use MongoDB?</p>
                <p>If application needs the ability to persistently store data in a way that  can efficiently query or update it later, then we would typically use some form of database. MongoDB is one such database.</p>
            </section>
            <section className='mb-20 bg-purple-100 border rounded-lg p-5 shadow-xl'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl mb-5'>Differences between SQL and noSQL databases.</h1>
                <h2 className='text-2xl md:text-2xl lg:text-3xl mb-5'>Answer:</h2>
                <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.</p>
                <p>A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.</p>
                <p>SQL is Relational Database Management System (RDBMS). On the otherhand, NoSQL is Non-relational or distributed database system.</p>
                <p>SQL databases have fixed or static or predefined schema, but NoSQL have dynamic schema</p>
                <p>SQL databases are not suited for hierarchical data storage. But NoSQL  databases are best suited for hierarchical data storage.</p>
                <p>SQL databases are best suited for complex queries, NoSQL databases are not so good for complex queries</p>
                <p>SQL databases are hertically Scalable. NoSQL databases are horizontally scalable</p>
            </section>
            <section className='mb-20 bg-purple-100 border rounded-lg p-5 shadow-xl'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl mb-5'>What is the purpose of jwt and how does it work</h1>
                <h2 className='text-2xl md:text-2xl lg:text-3xl mb-5'>Answer:</h2>
                <p>A JWT is a system to verify the owner of some JSON data. It’s a prearraned, URL-safe string and is cryptographically signed.
                    When a server receives a JWT, it can guarantee the data it contains can be trusted because it’s signed by the source. No middleman can change a JWT once it’s sent.
                    The JWT is mainly composed of header, payload and signature. These three parts are separated by dots.
                    The JSON data you store into a JWT can be seen by anyone that intercepts the token because it’s just serialized, not encrypted.
                    In JWT authentication-based systems, when a user successfully logs in using their credentials, a JSON Web Token will be returned back to the calling client.
                    The server routes will have to check for the presence of a valid JWT in the Authorization header to grant a user access to a protected resource.
                    Even if JWTs are signed, the information is still exposed to users or other parties because the data is unencrypted. Therefore, users are encouraged to not include sensitive information like credentials within a JWT payload. Additionally, tokens should always have an expiry.
                </p>
            </section>
        </div>
    );
};

export default Blog;
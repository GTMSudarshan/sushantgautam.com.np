import React from 'react'
import './Home.css'
import backgroundimg from'../background.png'
const Home = () => {
    return (
        <main className='main-home'>
      <div className='HomeContainer'>
    <div className="container" id='home'>
      <div className="section-1">
        <img src={backgroundimg} alt="images" className='background-image' />
        <h1 className='sudarshan'><span>I am Sudarshan</span></h1>
      </div>
      </div>
      <div id="about">
      <h1>HEADING SECTION 2</h1>
      <p>
      Node.js and Express.js are popular choices for developing interesting and interactive web applications. 

Speed: Node.js is built on V8 JavaScript engine, which is the same engine that powers Google Chrome. This means that Node.js applications are fast and efficient, making them a great choice for real-time applications such as chat apps and online games.
Scalability: Node.js is designed to handle a large number of simultaneous connections, making it well-suited for building large-scale web applications. Express.js, a web framework built on top of Node.js, makes it easy to build scalable and maintainable web applications.
Full-stack JavaScript: With Node.js, developers can use JavaScript for both the front-end and back-end of their web applications. This eliminates the need to switch between different languages and frameworks, making development faster and more efficient.
Large community: Node.js has a large and active community of developers who contribute to its development and provide support to other developers. This means that developers can easily find answers to their questions and benefit from the work of other developers.
Wide range of modules: Node.js has a wide range of modules that can be easily integrated into web applications. This includes popular modules such as Socket.io for real-time communication, Passport for authentication and Mongoose for MongoDB object modeling.

While Node.js and Express.js have many advantages, its also important to note a few potential challenges that developers may encounter when using them.

Asynchronous programming: Node.js uses an asynchronous programming model, which can be a learning curve for developers who are not familiar with this type of programming. However, once mastered, it can lead to a more efficient and performant code.
Memory management: Node.js applications can suffer from memory leaks if not managed properly. However, with the right tools and techniques, developers can prevent and diagnose memory leaks to ensure the stability and performance of their applications.
JavaScript version support: Node.js only supports the latest version of JavaScript which can be a limitation for developers who need to support older browsers or devices. But, developers can use transpiler to convert their code and make it compatible.
Multi-threading support: Node.js is single-threaded, which means that it can only execute one task at a time. However, developers can use the “cluster” module to create a multi-threaded Node.js application.
Database support: Express.js doesnt have built-in support for relational databases. But developers can use additional libraries to integrate it with relational databases and make use of the best features of relational databases.
Security features: Express.js doesnt have inbuilt security features. But, developers can use additional libraries to secure the web application, this allows developers to choose the right security features that suits their needs.
Middleware: Express.js has a limited number of middleware in comparison to other web frameworks like Ruby on Rails or Django. However, developers can use additional middleware and also create custom middleware to extend the functionality of the framework.

In summary, while Node.js and Express.js may have some limitations, these can be overcome with the right tools and techniques. Additionally, the Node.js and Express.js communities are always working to improve the platform and address these issues.
      </p>
      <p>
      Node.js and Express.js are popular choices for developing interesting and interactive web applications. 

Speed: Node.js is built on V8 JavaScript engine, which is the same engine that powers Google Chrome. This means that Node.js applications are fast and efficient, making them a great choice for real-time applications such as chat apps and online games.
Scalability: Node.js is designed to handle a large number of simultaneous connections, making it well-suited for building large-scale web applications. Express.js, a web framework built on top of Node.js, makes it easy to build scalable and maintainable web applications.
Full-stack JavaScript: With Node.js, developers can use JavaScript for both the front-end and back-end of their web applications. This eliminates the need to switch between different languages and frameworks, making development faster and more efficient.
Large community: Node.js has a large and active community of developers who contribute to its development and provide support to other developers. This means that developers can easily find answers to their questions and benefit from the work of other developers.
Wide range of modules: Node.js has a wide range of modules that can be easily integrated into web applications. This includes popular modules such as Socket.io for real-time communication, Passport for authentication and Mongoose for MongoDB object modeling.

While Node.js and Express.js have many advantages, its also important to note a few potential challenges that developers may encounter when using them.

Asynchronous programming: Node.js uses an asynchronous programming model, which can be a learning curve for developers who are not familiar with this type of programming. However, once mastered, it can lead to a more efficient and performant code.
Memory management: Node.js applications can suffer from memory leaks if not managed properly. However, with the right tools and techniques, developers can prevent and diagnose memory leaks to ensure the stability and performance of their applications.
JavaScript version support: Node.js only supports the latest version of JavaScript which can be a limitation for developers who need to support older browsers or devices. But, developers can use transpiler to convert their code and make it compatible.
Multi-threading support: Node.js is single-threaded, which means that it can only execute one task at a time. However, developers can use the “cluster” module to create a multi-threaded Node.js application.
Database support: Express.js doesnt have built-in support for relational databases. But developers can use additional libraries to integrate it with relational databases and make use of the best features of relational databases.
Security features: Express.js doesnt have inbuilt security features. But, developers can use additional libraries to secure the web application, this allows developers to choose the right security features that suits their needs.
Middleware: Express.js has a limited number of middleware in comparison to other web frameworks like Ruby on Rails or Django. However, developers can use additional middleware and also create custom middleware to extend the functionality of the framework.

In summary, while Node.js and Express.js may have some limitations, these can be overcome with the right tools and techniques. Additionally, the Node.js and Express.js communities are always working to improve the platform and address these issues.
      </p>
      </div>
      </div>
      </main>
      )
    }
    
    export default Home
    
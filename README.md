<h1 align="center" id="title">Capstone Project - Layoff Warning System</h1>

<p align="center"><img src="https://socialify.git.ci/saksham1236/saksham-tandon-capstone-lws-front-end/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This application developed as part of my capstone project for the Software Engineering Diploma at BrainStation is meticulously crafted using TypeScript Node.js React Express and the Fluent UI React library. The application which currently scrapes layoff notices from Tennesse.gov is designed with adaptability in mind with plans to extend its capabilities to include additional websites in the future.
</p>

<h2>Initial Idea Proposal</h2>
<p> Every time a company has to lay off employees, they have to issue a WARN notice announcing cuts at least 60 days before the layoff occurs. These notices are available publicly accessible government websites. I am building a web scrapper to log those notices in a database. Which will be available to access on a react based frontend and potentially also have email subscription service.</p>

<p>After hearing about coworkers and experiencing first hand stories about layoffs, that too coming unannounced and affecting about 100,000 people this year alone. I have been thinking how can people know about upcoming layoffs. </p>

<p align="center"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" alt="shields"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="shields"><img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&amp;logo=supabase&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="shields"></p>

<h2>Project Screenshots:</h2>
<h3>Main Page</h3>
<img src="https://raw.githubusercontent.com/saksham1236/saksham-tandon-capstone-lws-front-end/master/demo/LWS-main.png" alt="project-screenshot" width="100%">

<h3>Search Page</h3>
<img src="https://raw.githubusercontent.com/saksham1236/saksham-tandon-capstone-lws-front-end/master/demo/LWS-search.png" alt="project-screenshot" width="100%">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Scrapes the target websites for layoff notices and log them into a database hosted on supabase
*   Can search through the master table using the company name
*   Built using Microsoft's Fluent UI2 React Components. <a href = "https://github.com/microsoft/fluentui">https://github.com/microsoft/fluentui</a>

<h2>🛠️ Installation Steps:</h2>

<p>1. Run Locally</p>

```
git clone https://github.com/saksham1236/saksham-tandon-capstone-lws-front-end
```

<p>2. Go to the project directory</p>

```
 cd /**folder that you cloned**/
```

<p>3. Install dependencies</p>

```
npm install
```

<p>4. Start the React Server</p>

```
npm start
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React
*   Node.js
*   Cheerio
*   Express
*   Supabase
*   Typescript

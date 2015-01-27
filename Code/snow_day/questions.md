# Answers to Crawfords Questions

### Q: What is the difference between an API and a server?

A: A server is used to accept HTTP requests and answer with HTTP responses. The response can be a number of things, including HTML, CSS, and JavaScript documents. An API is a special type of server that allows users to interact with information through CRUD operations and often sends JSON or XML style responses to clients so they can render information in the browser without having to refresh. 

### Q: What does a DNS server do when you type "www.google.com" into an address bar?

A: A DNS server, or domain name service server, changes plain text urls into IP addresses. When you type "www.google.com" into a browser, the request first goes to the DNS server, which looks up it's associated IP address, and redirects the request to the correct place.

### Q: What are some difference between a single page application and a multipage application? List one example of each. 

A: Single page applications, SPA's, and multipage applications, MPA's, are fundamentally different in both design and implementation. SPA's take advantage of using AJAX requests to interact with a server to update the DOM dynamically without a need for a refresh, as well as take advantage of new front-end MVC technologies that are becoming increasingly popular. MPA's take advantage of template rendering and interacting with a server through HTTP requests and redirects. Reddit is a prime example of a MPA, while Trello is a great example of a SPA.

### Q: Why do we use RESTful routes?

A: Ultimately, API's are meant to be easily useable to anyone who needs to use it. RESTful routes is a concept that aims to make the building of API's more standard and are important to use in order to make your API as explicit as possible. Whats the point of having an API if its confusing and ambigious?

### Q: What is an API key and why are they used?

A: An API key is like a personal password used to gain access to its associated API. They are used both to know where requests are comming from, as you often have to register in order to get them, and to throttle the amount of requests an API gets hit with. Keeping any API key that you use safe is of paramount importance.
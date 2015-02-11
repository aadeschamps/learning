
MVC: A tale of 3 Parts of a Greater Whole 

An MVC framework is a convenient way of organizing and modularizing (I think that is a word) your server code. It allows for quick prototyping and building, as well as easy maintainence. If you have a problem with a specific function, you know exactly where it is and fixing it usually won't break other parts of your code base. If it does happen to break another part, guess what? You can track down where the problem occured easily because your code is so organized. 

The M in MVC stands for Model. The model is an abstraction of your database, modeling the various tables that it might hold. Any interaction with the databse goes through your model code.

The V in MVC stands for Views. The views represent what is being seen by the viewer. They get data and render it (usually in a template) to show the user the data the way you want them to.

The C in MVC stands for controller. The controller is the middle man in the operation. It links the routes to the models and the views, updating the models, and calling the views to render the data. 

A typical MPA application form request would flow as such:
- The request comes in and through the route links to a controller
- The controller takes in the request and updates the model with the new data
- The controller then queries the model for the information needed to render the next page and hands this information to the views.
- The views accepts the data and renders the data (usually with a template)
- The response with the rendered data then gets sent back down to the user.

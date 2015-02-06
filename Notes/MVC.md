# MVC Architecture

## History

MVC architecture started around 1980 as a way to organize code based on presentation versus representation. Today, it is being used to do a similar, yet expaneded, role. That is: to differentiate between logic and presentation in a way that both increases readability and interopability.

The basic structure is such:
* the Model represents data in a very human way and informs its partners when it changes
* the views represents and renders the data from the model and listens for change.
* the controller handles user interaction for the views and model.

A lot of what the rest of this reading is geared towards front end JS applications.

## Models

Models are data states that represent a domain. They update their respective views when changed.

Models can has various methods that allow you to easily manage the change in the model. This is called collections in javascript front end.

## Views

Views represent the data (model) at any given time and are updated as the data changed (models get updated).

Views are often interactable.

### Templates

Templates, as much as they seem like views, are not views. They allow you to organize your html code in very readable ways

## Controller

Controllers take user action on the views and update the models accordingly.

Controllers, in terms of their traditional role, are much less used in front end MVC's. They call these MV*'s. 










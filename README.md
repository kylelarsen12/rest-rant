#Project REST-rant

REST-rant is an app where users can review restaurants

| Method | Path                     | Purpose                                         |
| ------ | ------------------------ | ----------------------------------------------- |
| GET    | /                        | Home page                                       |
| GET    | /places                  | Places index page                               |
| POST   | /places                  | Create new place                                |
| GET    | /places/new              | Form page for creating a new place              |
| GET    | /places/:id              | Deatils about a particular place                |
| PUT    | /places/:id              | Update a particular place                       |
| GET    | /places/:id/edit         | Form page for editing an existing place         |
| DELETE | /places/:id              | Delete a particular place                       |
| POST   | /places/:id/rant/:rantId | Create a rant(comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant(comment) about a particular place |
| GET    | \*                       | 404 page                                        |

Data needed for places

- [ ] Name
- [ ] city
- [ ] state
- [ ] cuisines
- [ ] picture

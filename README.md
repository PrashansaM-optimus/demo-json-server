# demo-json-server
This project demonstrate integration of json server with Angular project. It also shows how to call the json server fake API from Angular.

# Setup the project
- Clone project
- npm install
- Run json server: In cmd, type npm run watch-json-server. You can check its running on http://localhost:3000/
- Run Angular project: In cmd, type npm start. You can check its running on http://localhost:4200/

# Steps to test the project
Once both json server and angular project is running, On Angular project
1. Click on All Posts - Shows all the posts returned from API
2. Click on Add Post - A new post will be added with id=3. Check by clicking on all posts or manually by looking into the file data.json
3. Click on Delete Post - Post with id=3 will be deleted. Check by clicking on all posts or manually by looking into the file data.json

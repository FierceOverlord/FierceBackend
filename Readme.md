# Fierce's Backend

First structured the project: 

1. npm init for initialising node pacakge manager, configured package.json for "type": "module".

2. Created necessary folders - public, src, inside src - controllers, db, middlewares, models, utils, routes and files - db/index.js, root - app.js, constants.js, index.js, .env, .gitignore for the project.

3. Installed dev dependencies - prettier, nodemon.

4. Created Database on MongoDB atlas which provides cloud DB.

5. Installed dotenv, express and mongoose.

6. Connected to the database.

7. Created custom API error and response handling, used CORS and cookie-parser from node js for Cross Origin Resourse Sharing and cookie-parsing

8. Created user.model.js and video.model.js in Models folder which are basically schemas for database.

9. Added mongoose-aggregate-paginate-v2 which is a customised pagination library for Mongoose, inside video.model.js.

10. bcrypt for password encryption and decryption - used pre hook and created custom hook password comparison in user.model.js

11. jwt is a bearer token, we created access & refresh token generator in user.model.js


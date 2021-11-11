# This is a REST microservice that list the languages used by the 100 trending public repos on GitHub.

### For every language :

1. The list of repos using the language
2. Get 100 trending public repos on GitHub.

# How it works?

1. git clone https://github.com/MoEssam/Trending-Repos.git
2. npm i (to install all required dependencies)
3. duplicate dotenv file and rename to .env
4. run the project using npm start
5. go to http://localhost:3000/repos
6. a new file named 100 trending repos.json will be created containing the desired results

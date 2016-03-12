# Scripta.co blog

## Dev instructions

    npm install -g wintersmith
    git clone https://github.com/ScriptaGames/scripta-web scripta-web
    cd scripta-web
    npm install
    wintersmith preview

Now open [localhost:8080](http://localhost:8080) and start hacking away on the
`content/` dir!

LiveReload is enabled so you don't even have to refresh the browser when you
make changes.  They show up instantly. :D

## Deployment

    make deploy

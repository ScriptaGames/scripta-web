# Scripta Games blog

After cloning:

    npm install -g hexo-cli
    npm install

## Start a dev server

    hexo server

## Write a new post

    hexo new post "Hello World"

## Deploy to scripta.co

    hexo deploy -g

## Add a game or demo to scripta.co

Tracer is already set up this way, so it's a good example.  Here's how I added
Tracer.

Make a directory and copy the game/demo into it.

    mkdir source/tracer
    cp -r $TRACER_DIR/src/* source/tracer

Then tell hexo not to process those files:

  1. editing `_config.yml`
  2. find the `skip_render` section
  3. add `- "tracer/**/*"`

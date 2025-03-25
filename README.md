# Random Image API
A Node.js API that serves random images.

## Installation
- Clone the repository with Git or download the source.
- Put your desired images on ``images`` inside the ``src`` folder.
- Install all project dependencies with ``npm i`` or ``bun i``.
- Run the server with ``npm start`` or ``bun start``.

## Development: Personal tip
While testing, you can use ``nodemon`` to avoid restarting manually the server whenever you changed something.
- Install ``nodemon`` with ``npm i nodemon -g`` or ``bun i nodemon -g``
- Then run it with just ``nodemon``.
With this, you can avoid restarting your server manually. Do not worry. ``nodemon`` restarts the server whenever you changed some file.

## Notes
Please read this carefully if you are really going to use this:
- Images are being served on a 1:1 aspect ratio, with the resolution being 300x300 by default. Feel free to change this if you want.
- Ignore the sample images. These are only meant to be on my personal README.

## License
2025 Lucas Gabriel (lucmsilva) - BSD 3-Clause
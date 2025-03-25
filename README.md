# Random README Image API
A Node.js API that serves random images on your readme.

## Installation
- Clone the repository with Git or download the source.
- Put your desired images on ``images`` inside the ``src`` folder.
- Install all project dependencies with ``npm i`` or ``bun i``.
- Run the server with ``npm start`` or ``bun start``.

### Deploy with Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flucmsilva651%2Frandom-readme-image-api&project-name=random-readme-image-api&repository-name=random-readme-image-api&redirect-url=https%3A%2F%2Fgithub.com%2Flucmsilva651%2Frandom-readme-image-api%2F)

## Development: Personal tip
While testing, you can use ``nodemon`` to avoid restarting manually the server whenever you changed something.
- Install ``nodemon`` with ``npm i nodemon -g`` or ``bun i nodemon -g``
- Then run it with just ``nodemon``.
With this, you can avoid restarting your server manually. Do not worry. ``nodemon`` restarts the server whenever you changed some file.

## Notes
Please read this carefully if you are really going to use this:
- Images are being served on a 1:1 aspect ratio, with the resolution being 300x300 by default. Feel free to change this if you want.
- Ignore the sample images. These are only meant to be on my personal README.
- Only requests from GitHub's Camo service are allowed.

## License
2025 Lucas Gabriel (lucmsilva) - BSD 3-Clause

# Fullstack docker MERN starter

Project structure:
- api/
- client/

## Overall
Use `docker-compose build` on the main project to build both images for `api/` and `client/`, it also gets the `mongodb` image which is a dependency for the api project. Then use `docker-compose up -d` to run both containers on detached mode.

## Backend Web Api (api/)

### Development dependencies
- Typescript
  - Used for compile-time type-checking and other great benefits such as using next-gen javascript features.
- Eslint
  - Requires a little bit of setup on vscode, but it is fully integrated with both prettier and typescript.
- Webpack
  -  Used to minify and remove innecessary comments and code from the final build product of typescript.
- Prettier
  - Used for code auto-formatting

### Production dependencies
- Express
  - We all know what express does
- Mongoose
  - MongoDB ORM-Like mapper


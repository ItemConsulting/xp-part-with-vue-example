# XP Part with VueJS

An example of using VueJS with enonic XP

## Building and deploying

To generate new frontend JS files use

```bash
cd src-client
npm install
npm run build
```

To deploy application use

```bash
./gradlew deploy
```

Right now generated filenames with hashes are used, and references needs to be updated.

## Frontend

Frontend files can be found in the [src-client](src-client) directory.
The entry point of the application is [main.js](src-client/src/main.js)

## Backend

### Helper library

Some helper utils can be found at "[item/vue](src/main/resources/lib/item/vue.js)", which uses this
[Thymeleaf template](src/main/resources/lib/item/vue.html)

### Example part

An example part (*hello-vue*) can be seen [here](src/main/resources/site/parts/hello-vue).

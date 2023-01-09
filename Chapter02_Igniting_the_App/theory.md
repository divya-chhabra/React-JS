What is npm?

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages. 

What is Parcel/Webpack? Why do we need it?

Parcel/Webpack is a bundler which do a lot of things like Image Optimization, Minification, Compression, Tree Shaking, Hot Module Replacement, clearing the console logs etc. and builds the App ready for Production.

What is .parcel-cache?

Parcel is a bundler which do a lot of things and it needs space for doing all the things. So, the .parcel-cache is folder where Parcel performs all the tasks.

What is npx?
npx means the execution of script.

What is difference between dependencies and devDependencies?

dependencies are the packages required to perform particular functionality at development as well as production. 

But devDependencies are those packages required at the time of development only and not at the time of production.

What is Tree Shaking?

In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.

What is Hot Module Replacement?

As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

List any 5 superpowers of Parcel and describe any 3 of them

- Hot Reloading using HMR
- Manages Port Number
- Zero Configuration
- Clearing Consoles
- Minification
- Image Optimization
- Compression
- Built-In Dev Server
- Caching
- Auto Install


Hot Reloading - As you make changes in the code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the whole page but in some cases, it perform HMR. HMR improves the development experience by updating the modules in the browser at runtime, without needing a whole page refresh.

CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

Dev Server

Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used.

Minification

Parcel includes minifiers for JavaScript, CSS, HTML, and SVG. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.
Parcel uses terser to minify JavaScript, lightningcss for CSS, htmlnano for HTML, and svgo for SVG.

- What is .gitignore? What should we add and not add into it?

A .gitignore file specifies intentionally the untracked files that git should ignore. Files already tracked by GIT are not affected.

We should add all the regenerative files or folders to it, as these can be regenerated at server.

What is the difference between the package.json and package.lock.json?

package.json consists of the project details like Package Name, version, entry point, author etc. including the names and versions of dev dependencies and global dependencies.

However, the package.lock.json has complete details of dependencies of dependencies. It lock the file and keep the major version as it is to make the app compatible in all the environments.

Why should I not modify package.lock.json?

Because it is the only file that keeps a check on the version of dependencies and lock the file. Through the package.lock.json, during production, the same version of the package will be installed to run the app smoothly.

What is node_modules? Is it good idea to push that on git?

node_modules is a folder consists of all the dependencies required to build the app. It is never a good idea to push it on the git because of its huge size and regenerative feature.

What is the dist folder?

dist folder contains the build files of the app, may it be a development build or production build.

What is browserlists?

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

During development we want to use the latest javascript features (e.g ES6) as it makes our jobs easier, leads to cleaner code, possibly better performance.

As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles, for example:

Legacy Bundle: Contains polyfills, larger bundle size, compatible with old browsers without ES6 support.
Modern Bundle: Smaller bundle size, optimized for modern browsers.

So our entrypoint (e.g index.html) is generated in a way that it'll load the required bundles according to current browser being used by a user.








 
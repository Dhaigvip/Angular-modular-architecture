# How to compile and run modular solution locally

We have four independently  developed angular modules integrated to form a complete web application.
The four modules are  -
* SharedModule - Contains shared components used by all the modules.
* ModuleA      - A functional module with its own functionality & components.
* ModuleB      - A functional module with its own functionality & components.
* ModuleContainer - A complete angular application intergrating above mentioned modules.

## How to build
For this demo purpose we do not publish our modules to any public or private repositories. We will use the modules locally by copying them to npm_modules directory.
(Generally you will have your own private / public repository, where you publish and reference you modules from).

### Build SharedModule, ModuleA, ModuleB
Inside your "module" folder run following commands
```javascript
* npm install
* npm run lib-build
```
Running 'lib-build' command will build your module as a "Library". The compiled contents can be found in "LibraryDist" folder at root level.

Build all ModuleA, ModuleB same as above. 


ModuleA and ModuleB references **"SharedModule"**. Create a folder _sharedmodule_ inside npm_modules directory of both ModuleA and ModuleB and copy content of "LibraryDist" from SharedModule  

### Build Container Module
Container module integrates all three funcational modules and creates complete web application.

Create a folder _sharedmodule_ , _moduleA_, _moduleB_ folders inside npm_modules directory of ContainerModule and copy content of "LibaryDist" folder from respective modules.

Run Application by executing start command.
```javascript
* npm start
```

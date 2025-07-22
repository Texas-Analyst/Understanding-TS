# This project is just for experimenting with managing Typescript

It uses the 'Live Server' extension to enable testing of code. Use the
scripts section in package.json to start 'Live Server'.

## Typescript compilation

## Typescript Compiler (tsc) and its various options

Typescript, a superset of Javascript, transpiles
typescript(.ts) => javascript(.js). The typescript
compiler is referenced as 'tsc' on the command line.
A typescript project ALWAYS relies on a  tsconfig.json to
configure its environment variables that includes
compiler options, the locations of the tsconfig.json
source files and the final output directory for the build.
Use tsc --project 'path to tsconfig.json' on command line.
Where the real path MUST be used. The path may be '.' to
signify that the current directory is to be used. Whenever
the project option (tsc --project) is specified, only
the path to the tsconfig.json file is allowed. All
configuration values just mentioned will manage compilation
and build output, how the code is built.
NOTE: tsc without a source file name, compiles every .ts
file that it finds.

## tsconfig.json

This file contain all of the environmental variables,
parameters and setings used to configure/control the
project envirnoment. In particular the locations of
the project root directory, base url used for relative
addressing,  the source files and the output destination
file locations can be set. Environmental variables MUST
be configured early in the project to get the desired
expectations. Typically the 'target', 'moduleResolution',
'module', 'rootDir', 'sourceMap, 'noEmitOnError' and
'outDir' parameters should be VERIFIED.The 'target'
can be used to set all of the environmental variable
and APIs associated with a platform; ES6, ESNext,
ES2019 and so on. The target allows avoiding to
having to see platform options individually.
As opposed to setting the 'lib', will require each
choice of options to be named + set individually.

## tsconfig.app.json

A tsconfig.app.json often supplements the main 'tsconfig.json'.
When used,  it can be included within 'tsconfig.json'.

## tsconfig.xxx.json

Other file(s) that supplements the main compiler file (tsconfig.json)
will be named so that 'xxx' is replaced as to serve as part of the name

## Packaged Libraries

The package.json has all of the library modules that are
used by the typescript project. In the 'scripts' section
of package.json is where automated compiles and builds
can be introduced. For example; where the 'lite-server
has been installed via npm install lite-server.
"scripts": {
        "build": "tsc --project .",
        "start": "lite-server",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    These scripts are executed using 'npm run' followed by "script name".
    Do not include any  quotes. For an example:
    'npm run build', 1st locates the 'tsconfig.json' file
    within the current directory (because of the --project flag),
    then compiles all source files (.tsc files) and send all output
    to the  directory location shown as the 'dist' compiler key option.
    All compiler options are available with the main tsconfig.json.  

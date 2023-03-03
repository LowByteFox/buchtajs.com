# Buchta CLI Usage

<br>

## Not only Buchta is powerful but its CLI is as well
### Buchta's CLI can be configured by plugins just like Buchta

<br>

# init

<br>

### This command launches project creation wizard

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Description</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Name of the project</div>
    </div>
</div>

<br>

# bootstrap

<br>

### Ideal bootstrapping minimalistic project
### This can help people that develop custom plugins with their own project template
### So they can bootstrap the project, let user configure the plugin and finish project creation

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Description</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Name of the project</div>
    </div>
</div>

<br>

# finish

<br>

### Command for finishing bootstrapped project

<br>

# serve

<br>

### Start built-in buchta server

<br>

# build

<br>

### Export your finished web application
### After buchta has finished exporting, you should check whether the project
### Was exported right and if everything works just fine
### Minified version of `Buchta` is called `Buchticka` ( diminutive )
### With file `server.ts` which is node_modules-less

<br>

# add

<br>

### Create file from file type template
### Simple boilerplate generator

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Description</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">type</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">File type templates: template, plugin, api, middleware, composable</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Name or Path for the template</div>
    </div>
</div>

<br>
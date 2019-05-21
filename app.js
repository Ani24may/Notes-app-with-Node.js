const yargs=require("yargs");
const notes=require("./notes");


//customize yargs version
yargs.version("1.1.0");


//add, remove, read, list

//add
debugger
yargs.command({
    command:"add",
    description:"add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body);
    }
})

//remove
yargs.command({
    command:"remove",
    description: "remove a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:"read",
    description:"read a note",
    builder:{
        title:{
            description:"note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command:"list",
    description:"list all notes",
    handler()
    {
        notes.listNotes();
    }
})

// console.log(yargs.argv);
yargs.parse();
const fs=require("fs");
const chalk=require("chalk");

const addNotes=(title,body)=>
{
    const notes=loadNotes();
    // const duplicateNotes=notes.filter((note)=>note.title==title); //filter will look into each and every elemt of notes to find duplicate, what if we have 1000 element in notes, it will loook for all
                                                                    //duplicateNotes will be empty arry if no duplicate title found or if found duplicateNotes will contain the duplicate title
    const duplicateNote=notes.find((note)=>note.title===title);
    //find method will stop at that point where it find a duplicate note and will not go on checking further

    //find method return "undefine" if we don;t find a match
    // if(duplicateNotes.length==0)
    // debugger
    if(!duplicateNote) //or we can check if(duplicateNote==undefined)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.bold("New note added !"));
    }
    else
    {
        console.log(chalk.red.bold("note Title taken !"));
    }
}

const removeNote=(title)=>
{
    const notes=loadNotes();
    const exceptGivenTitle=notes.filter((note)=> note.title!==title);
    if (notes.length > exceptGivenTitle.length)
    {
        saveNotes(exceptGivenTitle);
        console.log(chalk.red.bold("Note removed!"));
    }
    else
    {
        console.log(chalk.red.inverse("no note found!"))
    }
    
   
    
}

const getNotes=()=> loadNotes();
// {
//     const notes=loadNotes();
// }
const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse("your notes"));
    notes.forEach((note)=>{
        console.log(note.title);
    })
}
const saveNotes=(notes)=>
{
    const dataJson=JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJson);
}
const loadNotes=()=>
{
    try{
        const dataBuffer=fs.readFileSync("notes.json");
        const dataJson=dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e)
    {
        return [];
    }
    
}

const readNote=(title)=>
{
    const notes=loadNotes();
    const note=notes.find((note)=>note.title===title);
    if(note)
    {
        console.log(chalk.inverse("title: "+note.title));
        console.log("body: "+note.body);
    }
    else
    {
        console.log(chalk.red.bold("no note found"));
    }
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
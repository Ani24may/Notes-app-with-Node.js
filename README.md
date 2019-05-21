A simple notes application which uses command line interface to create ,remove, read and list notes.
This application is written in Node.js.


To use this application:
1) clone the repo.
2) navigate to the directory
3) open the terminal and type "npm install"

To add a note:
-> node app.js add --title="Birthday list" --body="sam=12/05/1994 , henry=13/07/1996, maulin=14/09/1990" click enter
->this will be added to "notes.json" file which will serve as a db for storing all the notes.

To remove a note:
-> node app.js remove --title="Birthday list"
-> the note with given title will be removed.

To read a specific note:
-> node app.js read --title="Birthday List"
-> you can get the title and body of the given note.

To list all the note:
-> node app.js list
-> this will return the title of all the notes.

const chalk = require('chalk')
const { command, describe, string } = require('yargs')
const yargs = require('yargs')

yargs.version("1.0.1")

yargs.command({
    command : 'Add',
    describe : 'adding notes..',
    builder:{
        title:{
            describe: 'My title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe:'My body',
            demandOption: true,
            type: 'string'
        }
    },
    handler :function(argv){
        console.log('title:' + argv.title+ '\nBody: ' + argv.body)
    }
}
)
yargs.command({
    command:'remove',
    describe:'Removing Notes',
    handler: function(){
        console.log('running remove command')
    }
})

yargs.command({
    command:'Read',
    describe:'read the notes',
    handler: function(){
        console.log('Read the notes')
    }
})

yargs.command({
    command:'list',
    describe:'listing the notes',
    handler: function(){
        console.log('listing the notes')
    }
})
 
yargs.parse()


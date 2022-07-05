import(Users\pc\desktop\projects\readmegen\develop\index.js)


const fs = require('fs');
const { message } = require('statuses')

inquirer.prompt(
    [
        {
            type: 'input',
            message:'What is the project title?',
            name:'title',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'How would you describe your app',
            name:'Description',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'How do you install your app?',
            name:'install',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'How is your app used?',
            name:'instructions',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'Contribution guidelines',
            name:'contributions',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'Test instructions',
            name:'Testing',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:'How do you use your app',
            name:'Usage',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'list',
            message:'What license did you use?',
            name:'License',
            Choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'git',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        }
    ]
).then(({
    title,
    Description,
    install,
    instructions,
    contributions,
    Testing,
    Usage,
    License,
    git,
    email
})=>{

const template =`# ${title}
${title}

* [Description](#description)
* [install](#install)
* [instructions](#instructions)
* [contributions](#contributions)
* [Testing](#Testing)
## Usage
${Usage}
## License
${License}


# Contact
* Github :${git}
* E-mail :${email}`;
createNewFile(title,template);

}
);

function createNewFile(fileName,template){

fs.writeFile(`./${fileName.tolowercase().split(' ').join(' ')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');
})
}
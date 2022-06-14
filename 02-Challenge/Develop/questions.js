module.exports = [
    {
        type: 'input',
        name: 'title',
        message: "Enter Title of Project",

    },
    {
        type: 'input',
        name: 'description',
        message: "Enter Description of Project",

    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter Installation Instructions",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter Usage Information",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Enter Contribution Guidlines",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter Test Instructions",
    },
    {
        type: 'rawlist',
        name: 'license',
        message: "Choose a License",
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter Your Github Username",

    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Your Email Address",

    },
];




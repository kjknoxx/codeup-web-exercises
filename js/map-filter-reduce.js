// Array of user objects
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to get users with at least 3 languages
const usersWith3Languages = users.filter(user => user.languages.length >= 3);

// Use .map to get an array of email addresses
const userEmails = users.map(user => user.email);

// Use .reduce to get the total years of experience
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

// Calculate the average years of experience
const averageYearsOfExperience = totalYearsOfExperience / users.length;

// Use .reduce to get the longest email
const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, '');

// Use .reduce to get a single string of user names
const userNamesString = users.reduce((namesString, user, index, array) => {
    if (index === array.length - 1) {
        return `${namesString}and ${user.name}.`;
    }
    return `${namesString}${user.name}, `;
}, 'Your instructors are: ');

console.log('Users with at least 3 languages:', usersWith3Languages);
console.log('User emails:', userEmails);
console.log('Total years of experience:', totalYearsOfExperience);
console.log('Average years of experience:', averageYearsOfExperience);
console.log('Longest email:', longestEmail);
console.log(userNamesString);

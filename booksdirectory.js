// codescript19@gmail.com

const books = [
    {
    title: 'Good omens',
    authors:  'Neil Gaiman',
    year: 2000,
    genre: 'romance'
    },
    {
    title: 'Bone: The Complete Edition',
    authors: 'Jeff Smith',
    year: 2002,
    genre: 'adventure'
},
{
    title:'American Gods',
    authors: 'Neil Gaiman',
    year: 2004,
    genre: 'Action'
},
{
    title: 'A Gentleman in Moscow',
    authors: 'Amor Towles',
    year: 2006,
    genre: 'Historical'
},

{
    title: 'Change your thinking, change your life',
    authors: 'Brian Tracy',
    year: 2008,
    genre: 'adventure'
},

{
    title: 'At the heart of Leadership',
    authors: 'Joshua Freedman',
    year: 2008,
    genre: 'Thriller'
},

{
    title: 'The Smart Money Woman',
    authors: 'Arese Agwu',
    year: 2005,
    genre: 'Horror'
},

{
    title: 'Change your thinking, change your life',
    authors: 'Brian Tracy',
    year: 2007,
    genre: 'Wildlife'
},

{
    title: 'The Catch',
    authors: 'Joseph Teller',
    year: 2005,
    genre: 'Historical'
},

{
    title: 'The GUardian',
    authors: 'Scoff Fineman',
    year: 2003,
    genre: 'Thriller'
},

{
    title: 'Well Read',
    authors:'Glory Edim',
    year: 2001,
    genre: 'Romance'
},

{
    title: 'Outsiders',
    authors: 'Lynda Doreom',
    year: 2002,
    genre: 'Action'
},

{
    title: 'Looking for Lorraine',
    authors: 'Amani Perry',
    year: 2004,
    genre: 'Wildlife'
},

{
    title: 'The Leader who had no Title',
    authors: 'Robin Sharma',
    year: 2006,
    genre: 'Adventure'
},

{
    title: 'The Night She Disappeared',
    authors: 'Lisa Jewell',
    year: 2008,
    genre: 'Historical'
},

{
    title: 'The Power of Focus',
    authors: 'Jack Chandelier',
    year: 2010,
    genre: 'Horror'
},

{
    title: 'The Power Of Positive Thinking',
    authors: 'Norman Vincent Peace',
    year: 2012,
    genre: 'Thriller'
},

{
    title: 'Effortless Change',
    authors: 'Andrew Wommack',
    year: 2014,
    genre: 'Romance'
},

{
    title: 'Welcome to Lagos',
    authors: 'Chibundu Onuzo',
    year: 2016,
    genre: 'Action'
},

{
    title: 'My sister, the serial killer',
    authors: 'Oyinkan Braithwaite',
    year: 2018,
    genre: 'wildlife'
},

{
    title: 'Call me by your name',
    authors: 'Andre Aciman',
    year: 2020,
    genre: 'adventure'
},

{
    title: 'The Promise',
    authors: 'Damon Galgut',
    year: 2022,
    genre: 'Romance'
} 
]


const prompt = require('prompt-sync')({sigint:false});;
const query = prompt('Enter your search query:');
const result = books.filter(b =>{
    let title = b.genre.toLowerCase();
    let genre = b.title.toLowerCase();
    let authors = b.authors.toLowerCase();
    return title.includes(query.toLowerCase()) || genre.includes(query.toLowerCase()) || authors.includes(query.toLowerCase())
});

console.log(result);


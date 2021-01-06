# brightspace-assignment-scraper

Scrapes assignments from a brightspace class incrementally by url

## Dependencies

- puppeteer (NPM)[https://www.npmjs.com/package/puppeteer]

### Example Usage

```js
const { scrapeAssignments } = require("brightspace-assignment-scraper");

scrapeAssignments(
  "user",
  "pass",
  "https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231830",
  "db"
).then(assignments => {
  console.log(assignments);
});
```

### Example Output

```js
Loading browser...
scraped: A1
scraped: A2
scraped: A3
scraped: A4
scraped: A5
scraped: A6
scraped: A7
scraped: A8
scraped: A9
scraped: A10
scraped: A11
scraped: A12
scraped: A13
scraped: A14
scraped: A15
scraped: A16
[ { title: 'A1',
    content:
     'Hide Folder InformationInstructionsWeekly report per "End-Of-Project Requirements"\nBy this time you have made groups and have an idea of what capstone you want.  So there is little otherwise to document.\nNext week, you will start to flesh in material, as you get started.\nDue DateJan 7, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231830' },
  { title: 'A2',
    content: 'Hide Folder InformationDue DateJan 14, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231831' },
  { title: 'A3',
    content: 'Hide Folder InformationDue DateJan 21, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231832' },
  { title: 'A4',
    content: 'Hide Folder InformationDue DateJan 28, 2021 8:00 AM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231833' },
  { title: 'A5',
    content: 'Hide Folder InformationDue DateFeb 4, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231834' },
  { title: 'A6',
    content: 'Hide Folder InformationDue DateFeb 11, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231835' },
  { title: 'A7',
    content: 'Hide Folder InformationDue DateFeb 18, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231836' },
  { title: 'A8',
    content: 'Hide Folder InformationDue DateFeb 25, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231837' },
  { title: 'A9',
    content: 'Hide Folder InformationDue DateApr 1, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231838' },
  { title: 'A10',
    content: 'Hide Folder InformationDue DateApr 8, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231839' },
  { title: 'A11',
    content: 'Hide Folder InformationDue DateApr 15, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231840' },
  { title: 'A12',
    content: 'Hide Folder InformationDue DateApr 22, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231841' },
  { title: 'A13',
    content: 'Hide Folder InformationDue DateApr 29, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231842' },
  { title: 'A14',
    content: 'Hide Folder InformationDue DateMay 6, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231843' },
  { title: 'A15',
    content: 'Hide Folder InformationDue DateApr 24, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231844' },
  { title: 'A16',
    content: 'Hide Folder InformationDue DateMay 1, 2021 11:30 PM',
    url:
     'https://nscconline.desire2learn.com/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=185109&db=231845'
  }
]
```

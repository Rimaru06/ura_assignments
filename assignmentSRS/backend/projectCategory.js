const reader = require('xlsx');

const file = reader.readFile('./myFile.xlsx')

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
    {
       const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
       temp.forEach((res) => {
          data.push(res)
       })
    }
    

let projectCategories = {};

data.forEach((project) => {
    let category = project['Project Categories'] || project['__EMPTY']
    if(category)
    {
        projectCategories[category] = (projectCategories[category] || 0) + 1;
    }
})


module.exports = projectCategories;

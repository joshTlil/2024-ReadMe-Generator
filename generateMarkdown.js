function licenseBadge(data){
    if(data === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }else if(data === "ISC"){
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    }
    return data
}

function licenseLink(data){
    if (data === "MIT"){
        return `(https://opensource.org/licenses/MIT)`
    }else if(data === "ISC"){
        return `(https://opensource.org/licenses/ISC)`
    }
    return data
}

function licenseSection(data){
    return `${licenseBadge(data)}${licenseLink(data)}`
}

function generateMarkdown(data){
    return `# ${data.name},
# ${data.description},
# ${data.instruction},
${licenseSection(data.license)}
`
}

export default generateMarkdown;
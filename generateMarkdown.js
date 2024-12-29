function licenseBadge(data){
    if(data === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }
    return data
}

function licenseLink(data){
    if (data === "MIT"){
        return `(https://opensource.org/licenses/MIT)`
    }
    return data
}

function licenseSection(data){
    return `#${licenseBadge(data), licenseLink(data)}`
}

function generateMarkdown(data){
    return `# ${data.name},
    # ${data.description},
    # ${data.instruction}
    ${licenseBadge(data.license)}
    ${licenseLink(data.license)}
    `
}

export default generateMarkdown;
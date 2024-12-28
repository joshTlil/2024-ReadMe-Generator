function greeting(data){
    if(data === "MIT"){
        return "www.google.com"
    }
    return data
}

function generateMarkdown(data){
    return `# ${data.name},
    # ${data.description},
    # ${data.instruction}
    ${greeting(data.license)}
    `
}

export default generateMarkdown;
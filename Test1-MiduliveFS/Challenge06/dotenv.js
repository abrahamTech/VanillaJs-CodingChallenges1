import fs from "node:fs";

function parseEnv(env) {
    // Separate the lines from the .env file
    const lines = env.split(`\n`)
    /* TIP
    Array -> string with .join()
    string -> Array with .split()
    */

    //Read the lines
    lines.forEach(line => {
        //First separete the KEY from its value
        const [key, ...value] = line.split("=");
        //In case there is a "=" inside the key value
        const joinedValue = value.join("=")

        //Remove the quotes ("") if there are any.
        //True->Have Quotes / False-> Don't have
        const hasQuotes = joinedValue.startsWith('"') && joinedValue.endsWith('"')
        //OR -> const hasQuotes2 = joinedValue[0] === '"' && joinedValue[joinedValue.length - 1]

        //If it's TRUE removes quotes ""
        const valueToStore = hasQuotes ? joinedValue.slice(1, -1) : joinedValue

        process.env[key] = valueToStore;
    })
}

//We pass it the path and if we do not pass it any, the default is .env
export function config ( { path = ".env" } = {}) {

    //Read the .env file content
    try {
        //It has to be synchronous
        // IMPORTANT!!
        // It doesn't matter if it is synchronous because this is only executed once in the application. When we start it
        const env = fs.readFileSync(path, "utf8")

        parseEnv(env)

    } catch (error) {
        //console.error(error)
    }
}

//Support for ECMAScript and Common JS modules

// const dotenv = {
//     config
// }

// export default dotenv;
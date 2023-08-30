interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here
    return user
}

console.log(processUser({ id: 1, name: "Dave" }))
// console.log(processUser({ name: "Dave" }))
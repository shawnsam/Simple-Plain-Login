export const isValidEmail = (email:string)=>{
    const emailRegex = /.*@.*[\.com]/
    return emailRegex.test(email)
}

export const isValidLogin = (email:string, password:string)=>{
    return email==="test@test.com" && password === "password"
}
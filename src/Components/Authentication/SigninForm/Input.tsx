

interface IInput{
    label:string
    name:"email"|"password"
    type:"email"|"password"
    placeholder:string


}

let SigninData:IInput[] = [
    {
        label:"Email",
        name:"email",
        type:"email",
        placeholder:"Email"
    },
    {
        label:"Password",
        name:"password",
        type:"password",
        placeholder:"Password"
    },
]
export default SigninData
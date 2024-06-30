

interface IInput{
    label:string
    name:"email"|"password"|"cPassword"|"userName"
   
    placeholder:string


}

let SignupData:IInput[] = [
    {
        label:"UserName",
        name:"userName",
        placeholder:"UserName"
    },
    {
        label:"Email",
        name:"email",
        placeholder:"Email"
    },
    {
        label:"Password",
        name:"password",
        placeholder:"Password"
    },
    {
        label:"cPassword",
        name:"cPassword",
        placeholder:"cPassword"
    }
]
export default SignupData
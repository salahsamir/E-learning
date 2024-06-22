

export const DescSlice=(desc)=>{
    if(desc.length>100){
        return desc.slice(0,150)+"..."
    }
    return desc
}
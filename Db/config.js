
export const A = (verticalLineNumber,data)=>{
    const sayilar = []
    const mainArray =[];


for(let i = 0; i<verticalLineNumber; i++){
    mainArray.push([]);
    sayilar.push(i);
}


    data.map((eleman,i)=>{
 
            if(i % verticalLineNumber === sayilar[i % verticalLineNumber]){
                 mainArray[sayilar[i % verticalLineNumber]] = [...mainArray[sayilar[i % verticalLineNumber]],eleman]
            }
        
    })

    return mainArray;

}

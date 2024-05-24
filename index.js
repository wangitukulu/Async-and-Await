//Using async/await to fetch data from a url

async function apiFunction() {
  try {
    const randomGenerate = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
    if(!randomGenerate){
      console.log("bad request")
    }
    const imageOutPut = randomGenerate.url
  
    console.log(imageOutPut);
    
  } catch (error) {
    console.log(error)
  }
 
}
apiFunction();
//window.addEventListener("load",apiFunction)

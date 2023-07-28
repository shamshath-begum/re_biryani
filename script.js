// function randomImage(){
//     let parent= document.createElement('img')
//     let outEl=document.getElementById('out')
//     fetch('https://biriyani.anoram.com/get')
//     .then(response =>{
//         return response.json();
//     }).then(val=>{
//         console.log(val)

//         document.getElementById('out').src=val;
//     }).catch(reason=>{
//         document.getElementById('out').alt="Not found";
//     });
// document.body.append(outEl)
// }
// randomImage()
let searchButton = document.getElementById("btn");
searchButton.addEventListener('click', () => {
let apiurl = "https://biriyani.anoram.com/get"
async function biryani() {
        let output = document.getElementById("output")
        output.innerHTML = ""
        let res = await fetch(apiurl)
        let data = await res.json()
        console.log(data);
        console.log(data.image);
        let parent = document.createElement('img')
        parent.classList.add("imageclass")
        parent.src = data.image
        document.getElementById("output").append(parent);


    }
    biryani()
})

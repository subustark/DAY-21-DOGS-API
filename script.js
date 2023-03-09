//function for get data

async function foo(){
    let url=await fetch("https://api.thedogapi.com/v1/breeds")
    let res=await url.json()
    res.forEach((e) => {
      try {
  
        //creat element to display data
        let div=document.createElement("div")
        div.className="box"
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
        </div>
        <img src="${e.image.url}" class="card-img-top" alt="image loading..">
        <div><span><b>Breed-Group  :</b> </span> ${e.breed_group}</div><br>
        <div><span><b>Life-Span  :</b> </span>  ${e.life_span}</div><br>
        <div><span><b>Bred-For : </b></span> ${e.bred_for}</div><br>
      </div>`
  
      //finally append the data
      document.body.append(div)
      } catch (error) {
        alert(error)
      }
    });
  }
  
  //function call
  
  foo()
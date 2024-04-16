let searchInput=document.getElementById("searchInput");

let searchButton=document.getElementById("searchButton");
let avatar=document.getElementById("avatar");
let username=document.getElementById("username");
let image=document.getElementById("image");
var x = document.getElementsByTagName("BODY")[0];
let main=document.getElementById("main");

searchButton.addEventListener('click',fetchData);


async function fetchData(e)
{
e.preventDefault();
    
console.log(searchInput.value);
    let data=await fetch(`https://api.github.com/users/${searchInput.value}`);
    // console.log(data);
    // console.log(data.body);
    let result=await data.json();
    console.log(result);
    let url=result.avatar_url;
    console.log(url);
    let toAppend=document.createElement('div');

    
    // username.innerText=result.name;
    toAppend.innerHTML=`<div class="container">
    <div class="row">
      <div class="col-6">
        <div class="details d-flex">
          <img src="${result.avatar_url}" id="image">
          <div class="name d-flex flex-column">
            <h3>${result.name}</h3>
            <a href="https://github.com/${searchInput.value}">@${result.login}</a>
          </div>
        </div>


      </div>
      <div class="col-6 f-flex flex-column">
        <h4 style="margin-left:80%;">Joined</h4>
        <h5 style="margin-left:80%;">${result.created_at.slice(0,10)}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex flex-column ">
        <h4>Repos</h4>
        <h5>${result.public_repos}</h5>
      </div>
      <div class="col-4 d-flex flex-column ">
        <h4>Follower</h4>
        <h5>${result.followers}</h5>
      </div>
      <div class="col-4 d-flex flex-column ">
        <h4>Following</h4>
        <h5>${result.following}</h5>
      </div>
    </div>

  </div>`
  main.append(toAppend);

}


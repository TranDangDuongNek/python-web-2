// function update data on UI
function updateUI(name,img,bio){
    // get html
    const name_element = document.getElementById("pokemon_name");
    const img_element = document.querySelector("pokemon_img");
    const bio_element = document.getElementById("pokemon_bio");
    // update data

    name_element.textContent = name.toUpperCase();
    img_element.scr = img;
    bio_element.innerText = bio;
}

// function tìm kiếm
function search_pokemon(pokemon_name){
    // set root url
    const root_url = "https://pokeapi.co/api/v2/pokemon/"
    // call API
    fetch(root_url + pokemon_name.tolowerCase(),{
        method: "GET",
    });

    Promise
    .then(function(json){
        // chuyển dữ liệu josn -> js  
        return json.json();
    }).then(function(json){
        const name = pokemonData.name;
        const image = pokemonData.sprites.other["official-artwork"].front_default;
        const bio = `Weight: ${pokemonData.weight}`;
  
        // để dữ liệu  vào UI
        updateUI(name,image,bio);
    })
    .catch(function(error){
        alert(" ko thấy ")
    })
}

// bat su kien button search
document
.getElementById("search_btn")
.addEventListener("click",function(event){
    //  ko cho web load theo mac dinh
    const pokemon_name = document.getElementById("search_inp").value.trin();
    // nếu ko co du lieu
    if (!pokemon_name){
        alert("vui lòng nhập tên")
    } else {
        search_pokemon(pokemon_name)
    }
})
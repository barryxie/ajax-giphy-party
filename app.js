
const form = document.querySelector('form');
const remove = document.querySelector('#remove');
const row = document.querySelector('.row');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    let term = document.querySelector('#search').value;
     
     const resource = await axios.get(`http://api.giphy.com/v1/gifs/search`, {params:{q:term, api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
     makeGift(resource.data);
     form.reset();
    
});

function makeGift(res){
    console.log(res)
    const imagelenght = res.data.length;
    const resIdx = Math.floor(Math.random() * imagelenght);
    const imageUrl = res.data[resIdx].images.original.url;
    
    
    let col = document.createElement('div');
    col.classList.add("col-4");
    let image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    image.classList.add('w-100')
    col.append(image);
    row.append(col)
}

remove.addEventListener('click', function(){
    row.innerHTML ='';
})




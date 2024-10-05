//console.log('hello')

function getTimeString(time){
    const hour = parseInt(time / 3600);
    //const day =parseInt(time / 86400);
    let remainingSecond = time % 3600;
    const minute = remainingSecond % 60;
    remainingSecond =parseInt(remainingSecond % 60);
    return `${hour} hrs ${minute} min ${remainingSecond} sec`
}

const removeActiveClass = () => {
    const button = document.getElementsByClassName('category-btn');
    for(let btn of button){
        btn.classList.remove('active');
    }
}

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json() )
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

const loadVideos = (searchText = '') => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
}

const loadCategoriesVideo = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
//sobaike remove kro
        removeActiveClass();
        //id er class k active korao
        const activebtn = document.getElementById(`btn-${id}`)
        console.log(activebtn)
        activebtn.classList.add('active')
        displayVideos(data.category)
    })
}

const loadDetails = async (videoId) => {
    console.log(videoId);
    const url=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url);
    const data = await res.json();
   displayDetails(data.video);
};

const displayDetails = (video) =>{
    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `
    <img src=${video.thumbnail} />
    <P>${video.description}</P>
    `

    document.getElementById('showModalData').click();
}



const displayVideos = (videos) =>{
   const videosContainer = document.getElementById("videos")
    videosContainer.innerHTML ='';
if(videos.length == 0){
    videosContainer.classList.remove('grid')
    videosContainer.innerHTML = `
    <div class="min-h-[600px] flex flex-col gap-5 justify-center items-center">
    <img class="w-[100px]" src="img/Icon.png"/>
    <h2 class="font-bold text-xl text-center">Oops!! Sorry, There is no <br>content here</h2>
    </div>
    `
}else{
    videosContainer.classList.add('grid')
}


   videos.forEach((video) => {
   // console.log(video)
    const card = document.createElement('div');
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />

      ${video.others.posted_date.length ==0 ? "" :` <span class="absolute right-2 bottom-2 p-1 bg-black rounded text-white text-xs">${getTimeString(video.others.posted_date)}</span>`}

  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 object-cover rounded-full" src=${video.authors[0].profile_picture}/>
    </div>

    <div">
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400 text-xs">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true ?'<img class="w-4" src= "https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>':' '}
    </div>

    <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">details</button></p>
    </div>
  </div>
    `;
    videosContainer.append(card);
   })


}


const displayCategories = (x) => {

    const categoryContainer = document.getElementById('btnDiv');
    x.forEach((item) => {
        //console.log(item);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML= `
        <button id="btn-${item.category_id}" onclick="loadCategoriesVideo(${item.category_id})" class="btn category-btn">${item.category}</button>
        `
        categoryContainer.append(buttonContainer);

    });
}

document.getElementById('search-input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value);
})


loadCategories();
loadVideos();
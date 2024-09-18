const reTro = async(category)=>{
       const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category?category:""}`);
       const data = await res.json();
       const servays = data.posts;
       displayData(servays)
}
const displayData = (servays) =>{
       // console.log(category)
       const servayContainer = document.getElementById("Servay-Conntainer");
       servayContainer.textContent = "";
       servays.forEach((servay) =>{
              console.log(servay)
              // const statusClass = servay.isActive ? "online" : "offline";
              const statusClass = servay.isActive ? "online" : "offline"
              const servayCard = document.createElement("div")
              servayCard.classList = "bg-[#F3F3F5] mb-5 rounded-xl";
              servayCard.innerHTML = `
                     <div class="">
                            <div class="flex justify-center items-center gap-5 lg:gap-10 py-10 px-5 lg:px-10">
                                   <div class="avatar w-16 h-16 lg:w-24 lg:h-24 ${statusClass}">
                                          <div class="w-24 rounded-full">
                                          <img class="" src="${servay.image}" />
                                   </div>
                            </div>
                            <div class="w-4/5">
                                   <div class="pb-1">
                                          <span class="mr-5">#${servay.category}</span>
                                          <span>Author: ${servay.author.name}</span>
                                   </div>
                                   <h2 class="pb-1">${servay.title}</h2>
                                   <p class="pb-3">${servay.description}</p>
                                   <hr class="border-[1px] border-dotted border-white">
                                   <div class="flex flex-row pt-2 justify-between">
                                          <div class="flex flex-row gap-3">
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-envelope"></i>${servay.comment_count}</span>
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-eye"></i> ${servay.view_count}</span>
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-clock"></i> ${servay.posted_time}</span>
                                          </div>
                                          <div onclick="handleClick('${servay.title}', '${servay.view_count}')"><i class="fa-regular fa-envelope-open bg-green-700 p-2 rounded-full"></i></div>
                                   </div>
                            </div>
                     </div>
              `;
              servayContainer.appendChild(servayCard)
       })
};
const handleClick = (title, view)=>{
       const readCount = document.getElementById("read-Count")
       const readCountText = readCount.innerText;
       let readCountTextNumber = parseInt(readCountText)
       readCountTextNumber = readCountTextNumber + 1;
       readCount.innerText = readCountTextNumber;
       const titleDivContainer = document.getElementById("Title-Div-Container")
       const titleDiv = document.createElement("div")
       titleDiv.classList = "bg-white flex justify-between p-5 my-3 rounded-md"
       titleDiv.innerHTML = `
              <div class="flex w-full justify-between">
                     <h2 class="font-semibold">${title}</h2>
                     <p class="text-sm flex justify-center items-center"><i class="fa-regular fa-eye"></i> ${view}</p>
              </div>
       `;
       titleDivContainer.appendChild(titleDiv)
}
document.getElementById("Search-Button").addEventListener("click", function(){
       const inputField = document.getElementById("Input-Text")
       const category = inputField.value;
       reTro(category)
})
reTro()
const LoadLetestPost = async() =>{
       const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
       const data = await res.json();
       const letestPosts = data;
       displayLetestPost(letestPosts)
}
const displayLetestPost = (letestPosts) =>{
       // console.log(letestPosts)
       const letestCardsContainer = document.getElementById("Letest-Cards-Container")
       letestPosts.forEach(letestPost =>{
              console.log(letestPost)
              const LetestCarddiv = document.createElement("Letest-Cards-Container")
              LetestCarddiv.classList = "card bg-base-100 w-full lg:w-80 shadow-xl p-5"
              LetestCarddiv.innerHTML = `
                     <figure>
                            <img
                            src="${letestPost.cover_image}"
                            alt="Shoes"/ class="rounded-b-2xl">
                     </figure>
                     <div class="card-body p-0">
                     <p class="mt-3"><i class="fa-solid fa-calendar-days"></i>  ${letestPost.author?.posted_date || "No publish date"}</p>
                     <h2 class="card-title">${letestPost.title}</h2>
                     <p>${letestPost.description}</p>
                     <div class="flex gap-3">
                            <div><img class="w-12 h-12 rounded-full" src="${letestPost.profile_image}" alt=""></div>
                            <div>
                                   <h2 class="font-bold">${letestPost.author.name}</h2>
                                   <p>${letestPost.author?.designation || "Unknown"}</p>
                            </div>
                     </div>
              `;
              letestCardsContainer.appendChild(LetestCarddiv)
       })
}
LoadLetestPost()
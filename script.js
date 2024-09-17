const reTro = async()=>{
       const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
       const data = await res.json();
       const servays = data.posts;
       // console.log(data)
       displayData(servays)
}
const displayData = (servays) =>{
       // console.log(servays[0].id)
       // console.log(category)
       const servayContainer = document.getElementById("Servay-Conntainer");
       servays.forEach((servay) =>{
              // console.log(category)
              const servayCard = document.createElement("div")
              servayCard.classList = "bg-gray-300 mb-5";
              servayCard.innerHTML = `
                     <div class="flex gap-5 py-5 pl-5">
                            <div class="">
                                   <img class="w-16 h-16 rounded-full" src="${servay.image}" alt="" srcset="">
                            </div>
                            <div>
                                   <span class="mr-5">#${servay.category}</span>
                                   <span>Author: ${servay.author.name}</span>
                                   <h2>${servay.title}</h2>
                                   <p>${servay.description}</p>
                                   <hr class="border-1 border-dotted border-white">
                                   <div class="flex flex-row justify-between">
                                          <div class="flex flex-row gap-3">
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-envelope"></i>${servay.comment_count}</span>
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-eye"></i> ${servay.view_count}</span>
                                                 <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-clock"></i> ${servay.posted_time}</span>
                                          </div>
                                          <div onclick="handleShowAll('${servay.title}', '${servay.view_count}')"><i class="fa-regular fa-envelope-open bg-green-700 p-2 rounded-full"></i></div>
                                   </div>
                            </div>
                     </div>
              `;
              servayContainer.appendChild(servayCard)
       })
}
const handleShowAll = (title, view)=>{
       const readCount = document.getElementById("read-Count")
       const readCountText = readCount.innerText;
       let readCountTextNumber = parseInt(readCountText)
       readCountTextNumber = readCountTextNumber + 1;
       readCount.innerText = readCountTextNumber;
       const titleDivContainer = document.getElementById("Title-Div-Container")
       const titleDiv = document.createElement("div")
       titleDiv.classList = "bg-white flex justify-between p-5 my-3 rounded-md"
       titleDiv.innerHTML = `
              <h2 class="font-semibold">${title}</h2>
              <p class="text-sm"><i class="fa-regular fa-eye"></i> ${view}</p>
       `;
       titleDivContainer.appendChild(titleDiv)
}

document.getElementById("Search-Button").addEventListener("click", function(){
       const inputField = document.getElementById("Input-Text")
       const category = inputField.value;
       console.log(category)
})
reTro()   




// const reTro = async (category = '') => {
//        try {
//            // If a category is provided, append it to the API endpoint 
//            const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `/${category}` : ''}`);
//            const data = await res.json();
   
//            // Check if the 'posts' array exists
//            const servays = data?.posts || [];
//            displayData(servays);
//        } catch (error) {
//            console.error("Error fetching data:", error);
//        }
//    };
   
//    const displayData = (servays) => {
//        const servayContainer = document.getElementById("Servay-Conntainer");
//        servayContainer.innerHTML = ''; // Clear previous content
   
//        // Check if there are any posts
//        if (servays.length === 0) {
//            servayContainer.innerHTML = "<p>No posts found</p>";
//            return;
//        }
   
//        // Display each post
//        servays.forEach(servay => {
//            const servayCard = document.createElement("div");
//            servayCard.classList = "bg-gray-300 mb-5";
//            servayCard.innerHTML = `
//                <div class="flex gap-5 py-5 pl-5">
//                    <div class="">
//                        <img class="w-16 h-16 rounded-full" src="${servay.image}" alt="" srcset="">
//                    </div>
//                    <div>
//                        <span class="mr-5">#${servay.category}</span>
//                        <span>Author: ${servay.author.name}</span>
//                        <h2>${servay.title}</h2>
//                        <p>${servay.description}</p>
//                        <hr class="border-1 border-dotted border-white">
//                        <div class="flex flex-row justify-between">
//                            <div class="flex flex-row gap-3">
//                                <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-envelope"></i>${servay.comment_count}</span>
//                                <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-eye"></i> ${servay.view_count}</span>
//                                <span class="flex flex-row items-center gap-1"><i class="fa-regular fa-clock"></i> ${servay.posted_time}</span>
//                            </div>
//                            <div onclick="handleShowAll('${servay.title}', '${servay.view_count}')">
//                                <i class="fa-regular fa-envelope-open bg-green-700 p-2 rounded-full"></i>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            `;
//            servayContainer.appendChild(servayCard);
//        });
//    };
   
//    const handleShowAll = (title, view) => {
//        const readCount = document.getElementById("read-Count");
//        const readCountText = readCount.innerText;
//        let readCountTextNumber = parseInt(readCountText);
//        readCountTextNumber = readCountTextNumber + 1;
//        readCount.innerText = readCountTextNumber;
   
//        const titleDivContainer = document.getElementById("Title-Div-Container");
//        const titleDiv = document.createElement("div");
//        titleDiv.classList = "bg-white flex justify-between p-5 my-3 rounded-md";
//        titleDiv.innerHTML = `
//            <h2 class="font-semibold">${title}</h2>
//            <p class="text-sm"><i class="fa-regular fa-eye"></i> ${view}</p>
//        `;
//        titleDivContainer.appendChild(titleDiv);
//    };
   
//    document.getElementById("Search-Button").addEventListener("click", function () {
//        const inputField = document.getElementById("Input-Text");
//        const category = inputField.value.trim(); // Get the category from the input field
//        reTro(category);  // Call reTro with the category
//    });
   
//    // Initial call to load posts without a specific category
//    reTro();
   
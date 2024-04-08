const sectionBox= document.querySelector("#second-grid")

const myEventsApi = `https://fakerapi.it/api/v1/books?_quantity=4`;
const eventHeaders = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${user.token}`,
  },
};
fetch(myEventsApi, eventHeaders)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  })
  .then((res) => {
    console.log(res)
    const responses = res.data
    
    
    for (const response of responses) {
      console.log(response)
      const blogContent =document.createElement("div")
      blogContent.classList.add("blog-contents")
      blogContent.style.width="100%"
      const image = document.createElement("img")
      image.src="../assets/unsplash_IF9TK5Uy-KI.jpg"
      image.classList.add("blog-desk-img")
      blogContent.appendChild(image)
      const otherSects = document.createElement("div")
      otherSects.classList.add("other-sects")
      const firstPara = document.createElement("p")
      firstPara.classList.add("section")
      firstPara.textContent= response.genre
      otherSects.appendChild(firstPara)
      const secondPara = document.createElement("p")
      secondPara.classList.add("headline")
      secondPara.textContent= response.title
      otherSects.appendChild(secondPara)
      
      let descWords = response.description
      let bigWords= descWords.slice(0,120)
      const thirdPara = document.createElement("p")
      thirdPara.classList.add("about")
      
      thirdPara.textContent=bigWords
      otherSects.appendChild(thirdPara)
      const buttonDiv =document.createElement("div")
      
      const readBtn = document.createElement("button")
      readBtn.classList.add("read-btn")
      readBtn.textContent="Read more"
      buttonDiv.appendChild(readBtn)
      otherSects.appendChild(buttonDiv)
      blogContent.appendChild(otherSects)
      sectionBox.appendChild(blogContent)
    }
    
  });

  // numberOfCreatedEvents.textContent = `${json.doc.length} events created`
  // events = json.doc.splice(0,3)
//   <div class="blog-contents">
//   <img src="assets/Rectangle 7.jpg" alt="" class="blog-desk-img">
//   <div class="other-sects">
//       <p class="section">Food</p>
//       <p class="headline">Faith has finally gone global</p>
//       <p class="about">With unwavering determination, Faith rose through the ranks of the culinary world.....</p>
//       <div>
//           <button class="read-btn">Read more</button>
//          </div>
//   </div>
// </div>
let dataBlog = []

function addBlog(event) {

    // method preventDefault()
    event.preventDefault()

    let title = document.getElementById("inputName").value
    let startDate = document.getElementById("inputStart").value
    let endDate = document.getElementById("inputEnd").value
    let description = document.getElementById("deskrip").value
    let node = document.getElementById("inputNode").checked
    let react = document.getElementById("inputReact").checked
    let golang = document.getElementById("inputGo").checked
    let angular = document.getElementById("inputAngular").checked
    let image = document.getElementById("inputImage").files


    if(node){
        node = document.getElementById("inputNode").value
    } else {
        node = ""
    }

     console.log(node);

    if(react){
        react = document.getElementById("inputReact").value
    } else {
        react = ""
    }
            console.log(react);

    if(golang){
        golang = document.getElementById("inputGo").value
    } else {
        golang = ""
    }
            console.log(golang);

    if(angular){
        angular = document.getElementById("inputAngular").value
    } else {
        angular = ""
    } 
        console.log(angular)


    // method URL.createObjectURL
    image = URL.createObjectURL(image[0])
 

    let blog = {
        title,
        startDate,
        endDate,
        description,
        node,
        react,
        golang,
        angular,
        image,
        duration: distanceTime((startDate),(endDate))
    }

    
    
    dataBlog.push(blog)
    renderBlog()
    // console.log(dataBlog);
}

function renderBlog() {

    console.log(dataBlog)

    document.getElementById("blog").innerHTML = ""

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("blog").innerHTML += `
        <div class="cardProject">
        <img class="imgPost" src="${dataBlog[index].image}" alt="">
        <a class="projectTitle" href="/project-detail.html">${dataBlog[index].title}</a>
        
        <p class="duration">Durasi: ${dataBlog[index].duration}</p>
        <div>
            <p class="contentProject">${dataBlog[index].description}</p>
        </div>

        <div>
            <div class="iconProject">
                <i class="fa-brands ${dataBlog[index].node}"></i> 
                <i class="fa-brands ${dataBlog[index].react}"></i> 
                <i class="fa-brands ${dataBlog[index].golang}"></i>
                <i class="fa-brands ${dataBlog[index].angular}"></i>
            </div>
        </div>

        <div class="btn-project">
            <button class="btnProject">edit</button>
            <button class="btnProject">delete</button>
        </div>
    </div>`

    }
}

function distanceTime(startDate, endDate){
    let start = new Date(startDate)
    let end = new Date(endDate)

    let duration = end - start
    
    //miliseconds  1000
    //second in hours 3600 
    // hours in day 23 (karena ketika sudah sampai jam 23.59 akan kembali ke 00.00)
    // day in month 31

    let distanceDay = Math.floor(duration / (1000 * 3600 * 23));
    let distanceMonth = Math.floor(distanceDay / 31);
    let distanceMore = Math.floor(distanceDay % 31 - 1)

    
    if (distanceMonth <= 0) {
        return distanceDay + " Hari"
    } else 
        return distanceMonth + " Bulan " + distanceMore + " Hari"
    
}

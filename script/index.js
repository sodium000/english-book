
const loadLessons = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response)=>response.json())
    .then((json)=>displayLesson(json.data))

}

const displayLesson = (lesson)=>{
    //1. get empty div
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "" ;
    // 2 get into every lesson 
    for(let lessons of lesson){
        const level = lessons.level_no;
        // 3 create element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML= `<button class="flex gap-1 border min-w-[100px] justify-center items-center rounded-sm h-[40px] font-semibold text-[14px] poppins-regular text-[#422AD5] border-[#422ad5] p-3 hover:bg-[#5c49d9] hover:text-[#e8e1e1] "><img src="./assets/fa-book-open.png" alt=""><h1>Lesson - ${level}</h1></button`

            // 4 append child 
            levelContainer.append(btnDiv)

            

    }
}

loadLessons()
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayLesson(json.data));
};


const removeActive = () =>{
const lessonbutton = document.querySelectorAll(".lesson-btn")
    lessonbutton.forEach((btn)=>{
        btn.classList.remove("active")
    })
}

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((word) =>{ 
        removeActive();
        const clickbtn = document.getElementById(`lesson-btn-${id}`)
        clickbtn.classList.add("active")
        desplayLevleWord(word.data)
    });
};

const desplayLevleWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
        <div class="text-center mt-15 col-span-full">
        <img class="mx-auto" src="./assets/alert-error.png">
        <p class="hind-siliguri-regular text-[13px] text-[#79716B] mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="hind-siliguri-regular text-[34px] text-[#292524] mb-3">নেক্সট Lesson এ যান</h1>
    </div>
        `;
    return;
  }
  // {
  //     "id": 5,
  //     "level": 1,
  //     "word": "Eager",
  //     "meaning": "আগ্রহী",
  //     "pronunciation": "ইগার"
  // }

  words.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="px-5 py-10 space-y-4 text-center bg-white shadow-sm rounded-xl">
            <h1 class="text-2xl font-bold">${
              element.word ? element.word : "শব্দ পাওয়া যায়নি"
            }</h1>
            <p class="font-semibold">Meaning/pronounciation</p>
            <div class="text-2xl font-medium hind-siliguri-regular">
                "${element.meaning ? element.meaning : "অর্থ পাওয়া যায়নি"} / ${
      element.pronunciation
        ? element.pronunciation
        : "pronunciation পাওয়া যায়নি"
    }"
            </div>
            <div class="flex items-center justify-between">
                <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF15] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF15] hover:bg-[#1A91FF80]"><i class="fa-solid fa-play"></i></button>
            </div>
        </div>`;

    wordContainer.append(card);
  });
};

const displayLesson = (lesson) => {
  //1. get empty div
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // 2 get into every lesson
  for (let lessons of lesson) {
    const level = lessons.level_no;
    // 3 create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button id="lesson-btn-${level}" onclick=loadLevelWord(${level}) class="flex gap-1 lesson-btn border min-w-[100px] justify-center items-center rounded-sm h-[40px] font-semibold text-[14px] poppins-regular text-[#422AD5] border-[#422ad5] p-3 hover:bg-[#5c49d9] hover:text-[#e8e1e1] "><img src="./assets/fa-book-open.png" alt=""><h1>Lesson - ${level}</h1></button`;

    // 4 append child
    levelContainer.append(btnDiv);
  }
};

loadLessons();

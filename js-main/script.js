const refTyped = document.getElementById("typed");
const refButtonClicked = document.getElementById("buttonClick");
const refparent = document.getElementById("parent");

refButtonClicked.addEventListener("click", (e) => {
    e.preventDefault();
    const typedData = refTyped.value;

    if (typedData.trim() === "") {
        alert("Type somthing");
        return;
    }

    const div = document.createElement("div");
    div.className = "toodo";
    div.innerHTML = ` <div class="content">
                ${typedData}
            </div>
             <div class="btn">
                 <button class="button1 editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
                <button class="button1"><i class="fa-solid fa-trash"></i></button>
                
            </div>
            `
    refparent.appendChild(div)
    refTyped.value = "";


    // Events...

    const content = div.querySelector(".content");
    const editBtn = div.querySelector(".editBtn");

    let textEdit = false;
    editBtn.addEventListener("click", () => {
        if (!textEdit) {
            content.contentEditable = true;
            content.focus();
            editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
            textEdit = true;
        } else {
            content.contentEditable = false;
            editBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
            textEdit = false;
        }
    });


    content.addEventListener("click", () => {
        content.classList.toggle("strike");
    });
    // DeletButton
    let deltButton = div.getElementsByClassName("button1");
    deltButton[1].addEventListener("click", () => {
        div.remove();
    })
})
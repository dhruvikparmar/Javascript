let title = document.getElementById("title");
let price = document.getElementById("price");
let category = document.getElementById("category");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

let editIndex = null;

btn.addEventListener("click", () => {
    if(title.value=="" && price.value=="" && category.value=="")
    {
        alert("Please Fill all the fields");
    }
    else
    {

    
    list.style.border="1px solid black";
    list.style.boxShadow="5px 5px 5px black";
  let oldRecord = JSON.parse(localStorage.getItem("Products")) || [];
  if (editIndex == null) {
    let obj = {
      id: Date.now(),
      title: title.value,
      price: price.value,
      category: category.value,
    };
    oldRecord = [...oldRecord, obj];
  } else {
    oldRecord.forEach((item)=>{
      if(item.id == editIndex){
        item.title = title.value
        item.price = price.value
        item.category = category.value
      }else{
        item
      }
    })

    let singleData = oldRecord.find((item) => item.id == editIndex);
    singleData.title = title.value;
    singleData.price = price.value;
    singleData.category = category.value;
  }
  localStorage.setItem("Products", JSON.stringify(oldRecord));

  title.value = "";
  price.value = "";
  category.value = "";
  editIndex = null;
  btn.innerHTML = "Add Data";

  getData();
}
});

function getData() {
  let allData = JSON.parse(localStorage.getItem("Products"));
  list.innerHTML = "";

  allData.forEach((item, index) => {
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let del = document.createElement("button");
    let edit = document.createElement("button");

    del.setAttribute("data-id", item.id);
    edit.setAttribute("data-id", item.id);

    li1.innerText = index + 1;
    li2.innerText = item.title;
    li3.innerText = item.price;
    li4.innerText = item.category;
    del.innerHTML = "Delete";
    edit.innerHTML = "Edit";
    del.classList = "delete-btn";
    edit.classList = "edit-btn";
    del.style.border="1px solid black"
    del.style.padding="5px";
    del.style.borderRadius="5px";
    edit.style.border="1px solid black"
    edit.style.padding="5px";
    edit.style.paddingLeft="15px";
    edit.style.paddingRight="15px";
    edit.style.borderRadius="5px";

    list.append(li1);
    list.append(li2);
    list.append(li3);
    list.append(li4);
    list.append(del);
    list.append(edit);
  });

  let deleteBtns = document.querySelectorAll(".delete-btn");
  

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let allData = JSON.parse(localStorage.getItem("Products"));
      let btnId = btn.getAttribute("data-id");

      let newRecord = allData.filter((item) => item.id != btnId);

      localStorage.setItem("Products", JSON.stringify(newRecord));
      getData();
      list.style.border="none";
    });
  });

  let editBtns = document.querySelectorAll(".edit-btn");

  editBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let allData = JSON.parse(localStorage.getItem("Products"));
      let btnId = btn.getAttribute("data-id");

      let singleData = allData.find((item) => item.id == btnId);
      title.value = singleData.title;
      price.value = singleData.price;
      category.value = singleData.category;
      document.getElementById("btn").innerHTML = "Update Data";
      editIndex = btnId;     
    });
  });
}

getData();

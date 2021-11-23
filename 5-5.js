//Add item
var listEl = document.getElementById("list-item");
var inputEl = document.getElementById("input-add");
var btnEl = document.getElementById("btnAdd");
function addItem() {
  const newItem = document.createElement("li");
  newItem.classList = "list-group-item";
  newItem.innerText = inputEl.value;
  listEl.appendChild(newItem);
  btnEl.addEventListener("click", addItem);
}
//Change color
function changeColor(color, id) {
  $(`#item-${id} .card-body`).removeClass(`black white gold`);
  $(`#item-${id} .card-body`).addClass(`${color}`);
}


//Call API
const callAPI = () => {
  console.log(123);
  $.ajax({
    url: "https://619caf8168ebaa001753caf3.mockapi.io/users",
    method: "GET", // GET or POST or PUT or DELETE
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    success: (result) => {
      // hide page content
      $(".main-page .card-row").fadeOut(1000);

      // show new content
      for (let item of result) {
        $(".main-page").append(`
            <p style="background:#bfe8a5; width:50%; border-radius:10px; padding-left:30px"> 
            <span>Id: ${item.id}</span></br>
            <span>Name: ${item.name}</span></br>
            <span>Avatar: ${item.avatar}</span></br>
            <span>Address: ${item.address}</span></br>
            </p>
        `);
      }
    },
    error: (xhr, textStatus, errorThrown) => {
      console.log(textStatus);
    },
  });
};

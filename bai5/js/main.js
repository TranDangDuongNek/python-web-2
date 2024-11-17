const tasks = [
  {id:1, task: "abc"},
  {id:2, task: "axq"},
  {id:3, task: "qbc"},
  {id:4, task: "wbc"},
  {id:5, task: "aec"}
];

function addTask() {
  // lấy dữ liệu từ input field
  const task_name = document.querySelector("#task_input");

  // nếu task_name rỗng, hiển thị thông báo
  if (!task_name.value.trim()) {
    alert("Please add content!");
    return;
  }

  // tạo id mới
  const id = tasks.length;

  // tạo object task
  const objectTask = {id: id, task: task_name.value };

  // thêm vào danh sách
  tasks.push(objectTask);

  // cập nhật giao diện
  showTaskList();
}

function editTask(id) {}

function deleteTask(id) {
  // get index of object in list
  const ind = -1;
  tasks.map(element, (index) => {
    if (element.id == id) {
      ind = index;
      return;
    }
  });
  if (ind != -1) {
    // delete trong danh sach
    tasks.splice(ind, 1);
    // show lai list moi
  } else {
    alert("Phan tu khong ton tai");
  }
}

function showTaskList() {
  // lấy danh sách các nhiệm vụ
  const taskList = document.getElementById("task_list");

  // xóa nội dung cũ của danh sách
  taskList.innerHTML = "";

  // lặp qua từng nhiệm vụ và thêm vào danh sách
  tasks.forEach((taskItem) => {
    const taskElement = document.createElement("li");
    taskElement.id = taskItem.id;
    taskElement.textContent = taskItem.task;

    // thêm các nút chức năng
    const buttonClass = "del_btn";
    taskElement.innerHTML += `<button class="${buttonClass}">Edit</button><button class="${buttonClass}">Delete</button>`;

    // thêm nhiệm vụ vào danh sách
    taskList.appendChild(taskElement);
  });
}
showTaskList();
// add event cho button add
document.getElementById("add_btn")
.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

const tasks = [
    { id: 1, task: "python" },
    { id: 2, task: "java Script" },
    { id: 3, task: "css" },
    { id: 4, task: "game" },
    { id: 5, task: "model" }
  ];
  
  function addTask() {
    // Lấy dữ liệu từ input field
    const task_name = document.querySelector("#task_input");
  
    // Nếu task_name rỗng, hiển thị thông báo
    if (!task_name.value.trim()) {
      alert("Please add content!");
      return;
    }
  
    // Tạo id mới
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  
    // Tạo object task
    const objectTask = { id: id, task: task_name.value };
  
    // Thêm vào danh sách
    tasks.push(objectTask);
  
    // Cập nhật giao diện
    showTaskList();
  
    // Xóa nội dung input field sau khi thêm
    task_name.value = "";
  }
  
  function editTask(id) {
    const newTask = prompt("Đổi tên hả chú em:");
  
    if (newTask) {
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.task = newTask;
        showTaskList();
      } else {
        alert("ko giòn!");
      }
    }
  }
  
  function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
  
    if (index !== -1) {
      tasks.splice(index, 1);
      showTaskList();
    } else {
      alert("ko giòn!");
    }
  }
  
  function showTaskList() {
    // Lấy danh sách các nhiệm vụ
    const taskList = document.getElementById("task_list");
  
    // Xóa nội dung cũ của danh sách
    taskList.innerHTML = "";
  
    // Lặp qua từng nhiệm vụ và thêm vào danh sách
    tasks.forEach((taskItem) => {
      const taskElement = document.createElement("li");
      taskElement.id = taskItem.id;
      taskElement.textContent = taskItem.task;
  
      // Thêm các nút chức năng
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit_btn";
      editButton.onclick = () => editTask(taskItem.id);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "del_btn";
      deleteButton.onclick = () => deleteTask(taskItem.id);
  
      taskElement.appendChild(editButton);
      taskElement.appendChild(deleteButton);
  
      // Thêm nhiệm vụ vào danh sách
      taskList.appendChild(taskElement);
    });
  }
  
  showTaskList();
  
  // Thêm sự kiện cho button add
  document.getElementById("add_btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      addTask();
    });
  
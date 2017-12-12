let taskList = $("#pendingList")
let taskListDone = $("#completedList")

$("#addItem").click(function(){
    let task = $("#task").val()
    if (task === ""){
        alert("You must enter a task.")
    } else {
          addItem(task)
    $("#task").val("")
    }
    
})


function addItem(item){
    let box = $('<div>')
    box.addClass("card section list-group-item holder")
    let li = $('<li>')
    li.addClass("liStyle")
    let checkbox = $('<input type="checkbox">')
    checkbox.addClass("checkbox")
    let remove = $('<button>')
    remove.addClass("remove_button").html("Remove")
    li.html(item)
    box.append(checkbox,li,remove)
    taskList.append(box)

}

$("#mainCardP").on('click','button',function(){
    let button = $(this)
    let parent = button.parent()
    parent.remove()
})


$("#mainCardP").on('change','.checkbox',function(){
    let thisBox = $(this)
    let value = thisBox.is(':checked')
    if (value){
        let parentDiv = thisBox.parent()
        parentDiv.remove()
        taskListDone.append(parentDiv)
    } else if (value===false){
        let parentDiv2 = thisBox.parent()
        parentDiv2.remove()
        taskList.append(parentDiv2)
    }
})

export class TodolistService {

    todolist = ["todo1","todo2","todo3"];

    getJsonTodoList(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data:this.todolist.map((value,index)=>{
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(request, response){
        response.write(this.getJsonTodoList());
        response.end();
    }

    createTodo(request,response){
        request.addListener("data", (data) =>{
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonTodoList());
            response.end();
        })
    }

}
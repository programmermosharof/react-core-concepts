export default  function Todo({task, isDone}) {
if(isDone === true){
    return <li>Done : {task}</li>
}else{
    return <li>Pending: {task}</li>
}
}


// export default  function Todo({task, isDone}) {
// if(isDone === true){
//     return <li>Done : {task}</li>
// }else{
//     return <li>Pending: {task}</li>
// }
// }

// export default function Todo({task, isDone, time = 0}){
//     return isDone ?
//      <li>Done: {task} Time : {time}</li> : <li>Not Done: {task}</li>
// }

// export default function Todo({task, isDone, time = 0}){
//     return isDone  &&
//      <li>Done: {task} Time : {time}</li> 
// }

// export default function Todo({task, isDone, time = 0}){
//     return isDone ||
//      <li>Not Done: {task} Time : {time}</li> 
// }


export default function Todo({task, isDone, time = 0}){
    let lisItem ;
    if(isDone === true) {
        lisItem= <li>Done: {task}</li>
    }
    else{
        lisItem= <li>Pending: {task}</li>
    }
    return lisItem;
}
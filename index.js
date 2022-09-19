const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const deletedBtn2 = document.getElementById('deletedBtn2')
const list = document.getElementById('list')


function render(){
    let htmlStr = ''
    listContent.forEach(function(item,i){
        htmlStr += `
        <div class="item">
        <div>
        <h2>待辦 ${i+1}</h2>
        <p>內容：${item.content}</p>
        <p>時間：${item.date} ${item.time}</p>
        </div>
        </div>
        `
    })
    if(htmlStr == '') list.innerHTML = '<p>暫無待辦事項</p>'
    else list.innerHTML = htmlStr
}

let listContent = null;

function InitListContent(){
    listContent = localStorage.getItem("listContent");
    if(listContent == null) listContent = [];
    else{
        listContent = JSON.parse(listContent);
        render()
    }    
}

function SetEventListener(){
    addedBtn.addEventListener('click',function(){
        listContent.push({
            content: content.value,
            date: date.value,
            time: time.value
        })
        localStorage.setItem( "listContent",JSON.stringify(listContent))
        render()
    })
    deletedBtn.addEventListener('click',function(){
        listContent.shift()
        localStorage.setItem( "listContent",JSON.stringify(listContent))
        render()
    })
    deletedBtn2.addEventListener('click',function(){
        listContent.pop()
        localStorage.setItem( "listContent",JSON.stringify(listContent))
        render()
    })
}
InitListContent();
SetEventListener();
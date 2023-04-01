
const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");
const clearBtn = document.querySelector(".clear");
const sendBtn = document.querySelector(".send");
const statusMessage = document.querySelector("#status");


function createList() {
  if (input.value !== '') {

      const li = document.createElement("li");
      const spanElement = document.createElement("span");
      const icon = document.createElement("i");
      const checkBox = document.createElement("input");
      checkBox.type = 'checkbox';

      icon.innerText = input.value;

      spanElement.append(icon);
      spanElement.append(checkBox);
      ul.appendChild(li).append(spanElement);

      input.value = '';
      statusMessage.innerText = '';
  }
};

sendBtn.addEventListener ('click', createList);
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    createList();
  }
});


clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
  statusMessage.innerText = 'Нет текущих задач';
});


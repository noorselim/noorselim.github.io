var ul = document.querySelector("ul");

async function getTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos"
  );
  let data = response.json();
  return data;
}

getTodos().then((response) => {
    console.log(response);
    var text="";
    response.forEach(element => {
        var tag = document.createElement ("li");
        var text = document.createTextNode (element.title);
        if (element.completed != true) {
            tag.style.color = "#FF71C5";
        }

        var el = document.getElementById("list");
        tag.appendChild(text);
        el.appendChild(tag);
        });
    })

getTodos();
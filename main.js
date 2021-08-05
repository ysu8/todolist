const main = document.getElementById("main")
const button = document.getElementById("button")
const textarea = document.getElementById("textarea")

function addTask(){
	const liElement = document.createElement("li")
	const liButton = document.createElement("button")
	liElement.textContent = textarea.value
	liButton.innerHTML = "削除"
	main.appendChild(liElement)
	main.appendChild(liButton)

        function rmTask(){
          liElement.remove()
          liButton.remove()
        }

        liButton.addEventListener("click", rmTask)
}

button.addEventListener("click", addTask)
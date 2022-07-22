function doGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

//cria os elementos do html
function createLine(user){
   line = document.createElement("tr")
   tdName = document.createElement("td")
   tdNickname = document.createElement("td")
   tdPortrayed = document.createElement("td")

   tdName.innerHTML = user.name
   tdNickname.innerHTML = user.nickname
   tdPortrayed.innerHTML = user.portrayed

   line.appendChild(tdName)
   line.appendChild(tdNickname)
   line.appendChild(tdPortrayed)

   return line
}

//manipulação das variáveis que recebem os dados da api
function main(){
    let data = doGet("https://www.breakingbadapi.com/api/characters")
    let user = JSON.parse(data)
    let table = document.getElementById("tabela")
    console.log(user)

    //para cada personagem
        //criar uma linha
        //add na tabela

        user.forEach(element => {
            let line = new createLine(element)
            table.appendChild(line)
        });
}

main()
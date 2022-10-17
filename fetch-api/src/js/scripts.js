const url ="https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading');
const postContainer = document.querySelector('#post-container');

// Get all posts

async function getAllPosts () {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post) => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";
        link.setAttribute("href", `/post.html?id=${post.id}`);
        link.classList.add("primary-btn")
        div.classList.add("container");

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postContainer.appendChild(div);
    })
}

getAllPosts();
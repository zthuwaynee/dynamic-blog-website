const postList = document.getElementById('post-list');

const posts = JSON.parse(localStorage.getItem('posts')) || [];

posts.forEach((post, index) => {
  const div = document.createElement('div');

  div.innerHTML = `
    <a href="post.html?id=${index}">
      <h2>${post.title}</h2>
      <p>${post.content.slice(0, 100)}...</p>
    </a>
    <hr/>
  `;

  postList.appendChild(div);
});

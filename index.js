const postList = document.getElementById('post-list');
const posts = JSON.parse(localStorage.getItem('posts')) || [];

posts.forEach((post, i) => {
  const div = document.createElement('div');
  div.innerHTML = `<a href="post.html?id=${i}"><h2>${post.title}</h2></a>`;
  postList.appendChild(div);
});

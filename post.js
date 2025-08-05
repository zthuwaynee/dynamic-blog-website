const id = new URLSearchParams(window.location.search).get('id');
const posts = JSON.parse(localStorage.getItem('posts')) || [];
const post = posts[id];
document.getElementById('edit-title').value = post.title;
document.getElementById('edit-content').value = post.content;

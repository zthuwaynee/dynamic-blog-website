const id = new URLSearchParams(window.location.search).get('id');
const posts = JSON.parse(localStorage.getItem('posts')) || [];
const post = posts[id];
document.getElementById('edit-title').value = post.title;
document.getElementById('edit-content').value = post.content;
document.getElementById('saveBtn').onclick = () => {
  posts[id].title = document.getElementById('edit-title').value;
  posts[id].content = document.getElementById('edit-content').value;
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Saved!');
};

window.onload = function () {
  const id = new URLSearchParams(window.location.search).get('id');
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  if (!posts[id]) {
    alert("Post not found.");
    window.location.href = "index.html";
    return;
  }

  const titleInput = document.getElementById('edit-title');
  const contentInput = document.getElementById('edit-content');
  const saveBtn = document.getElementById('saveBtn');
  const deleteBtn = document.getElementById('deleteBtn');

  titleInput.value = posts[id].title;
  contentInput.value = posts[id].content;

  saveBtn.onclick = () => {
    posts[id].title = titleInput.value;
    posts[id].content = contentInput.value;
    localStorage.setItem('posts', JSON.stringify(posts));
    alert("Post updated!");
  };

  deleteBtn.onclick = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      posts.splice(id, 1);
      localStorage.setItem('posts', JSON.stringify(posts));
      window.location.href = "index.html";
    }
  };
};

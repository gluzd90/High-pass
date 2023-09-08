const blog = document.querySelector('.contacts__blog');
const btn = document.querySelector('.contacts__blog-closed');
btn.addEventListener('click', function (e) {
  e.stopPropagation();
  e.preventDefault();
  blog.classList.add('contacts__blog--active');

})

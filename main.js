document.addEventListener("DOMContentLoaded", function(event) {
  let fade = document.querySelector('.fade');

  function fadeOut(el){
    el.style.opacity = .1;
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(el, fade){
    if (el.classList.contains('is-hidden')){
      el.classList.remove('is-hidden');
    }
    el.style.opacity = -3.5;
    el.style.display = "flex";

    (function fade() {
      let val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }


  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('toggle')) return;
    event.preventDefault();
    
    // Hides any visible blogs
    let allBlogs = document.getElementsByClassName("blog");
    for(i=0; i<allBlogs.length; i++){
      allBlogs[i].style.display = "none";
    }

    // Fades between navigation
    let targetId = document.getElementById(event.target.id);
    let buttonClasses = document.getElementsByTagName('nav')[0].children;
    let targetDisplay = document.getElementById(event.target.hash.slice(1, event.target.hash.length));
    let allDisplays = document.getElementsByClassName("fade");
    for(var i = 0; i < allDisplays.length; i++){
      buttonClasses[i].classList.remove('active')
      if(allDisplays[i] !== targetDisplay){
        fadeOut(allDisplays[i]);
      }
      fadeIn(targetDisplay);
      targetId.classList.add('active');
    }
  }, false);

  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('blog-item')) return;
    event.preventDefault();

    let targetBlog = document.getElementById(event.target.id) || document.getElementById(event.srcElement.parentElement.id);
    let currentBlog = document.getElementsByClassName(targetBlog.id)[0];
    let allBlogs = document.getElementsByClassName("blog");

    for(i=0; i<allBlogs.length; i++){
      allBlogs[i].style.display = "none";
    }

    currentBlog.style.display = "block";
  })
});

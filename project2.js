     
let postsData = [
    { id: 1, author: 'Jaipur:"The Pink City"', content: 'Skies drapped in clouds', likes: 100, comments: ['Great post!', 'Nice photo!'], image: 'jaipur1.jpg' },
    { id: 2, author: 'JaipurBuzz', content: 'The mountains are calling and I must go', likes: 115, comments: [], image: 'jaipur2.jpg' },
    { id: 3, author: 'BeautifulJaipur', content: 'The place that I have choosen..water water!!', likes: 98, comments: [], image: 'jaipur3.jpg' },
    { id: 4, author: '', content: 'The moment to remember', likes: 102, comments: [], image: 'jaipur4.jpg' },
    { id: 5, author: '', content: 'Season that engages the whole world in a conspiracy of love', likes: 200, comments: [], image: 'jaipur5.jpg' },
    { id: 6, author: '', content: 'If you truly love nature, you will find beauty everywhere', likes: 120, comments: [], image: 'jaipur6.jpg' },
    { id: 7, author: '', content: 'Night silences the crowd', likes: 220, comments: [], image: 'jaipur7.jpg' },
    { id: 8, author: '', content: 'Mirror Mirror on the wall\n,I refuse to be at your beck and call\n,No you dont show the best of me\n,For I am more than the eyes can see', likes: 250, comments: [], image: 'jaipur8.jpg' },
    { id: 9, author: '', content: 'Ho-Ho-Hold on there', likes: 130, comments: [], image: 'jaipur9.jpg' },
    { id: 10, author: '', content: 'There is silence in the darkness', likes: 120, comments: [], image: 'jaipur10.jpg' },
    { id: 11, author: '', content: 'Check out this photo!', likes: 260, comments: [], image: 'jaipur11.jpg' },
    { id: 12, author: '', content: 'Peace!', likes: 280, comments: [], image: 'jaipur12.jpg' },
  
  
  ];
  const likedPosts = new Set();
  function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
  
    postsData.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const authorElement = document.createElement('h3');
      authorElement.textContent = post.author;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
  
      const imageElement = document.createElement('img');
      imageElement.src = post.image;
      imageElement.alt = 'Post Image';
  
      const likeButton = document.createElement('button');
      likeButton.textContent = `Like`;
      likeButton.classList.add('like-button');
      likeButton.addEventListener('click', () => {
        if (!likedPosts.has(post.id)) {
            likePost(post.id);
            likedPosts.add(post.id);
            likeButton.disabled = true;  
            for(let ind of likedPosts){
                const button = document.querySelectorAll('.like-button')[ind-1];
                button.style.backgroundColor = 'red';
        
            }
    }
  });
  
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Write a comment...';
  
      const commentButton = document.createElement('button');
      commentButton.textContent = 'Comment';
      commentButton.classList.add('comment-button');
      commentButton.addEventListener('click', () => {
        addComment(post.id, commentInput.value);
        commentInput.value = '';
      });
  
      const postFooter = document.createElement('div');
      postFooter.classList.add('post-footer');
      postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
  
      const commentsContainer = document.createElement('div');
      commentsContainer.classList.add('comments-container');
      commentsContainer.style.display = 'none';
  
      post.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
  
      postElement.appendChild(authorElement);
  
      postElement.appendChild(imageElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(likeButton);
      postElement.appendChild(commentInput);
      postElement.appendChild(commentButton);
      postElement.appendChild(postFooter);
      postElement.appendChild(commentsContainer);
  
      postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
          commentsContainer.style.display = 'block';
        } else {
          commentsContainer.style.display = 'none';
        }
      });
  
      postsContainer.appendChild(postElement);
    });
  }
  
  // Function to handle post liking
  function likePost(postId) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.likes++;
      renderPosts();
    }
  }
  
  // Function to handle adding a comment
  function addComment(postId, comment) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
      post.comments.push(comment);
      renderPosts();
    }
  }
  
  // Initial rendering                      
  renderPosts();
const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submitMessage');
submitButton.addEventListener('click', addComment);

function transformName(name) {
  const trimmedName = name.trim().replace(/\s+/g, ' ');
  const transformedName = trimmedName.toLowerCase().replace(/\b\w/g, function(l) { return l.toUpperCase(); });
  return transformedName;
};

nameInput.addEventListener('input', function(event) {
  const name = event.target.value;
  const transformedName = transformName(name);
  nameInput.value = transformedName;
});

const messageInput = document.getElementById('message');
messageInput.addEventListener('input', () => {
  const message = messageInput.value;
  const cleanMessage = checkSpam(message);
  messageInput.value = cleanMessage;
});

function addComment() {
  const name = transformName(document.getElementById('name').value.trim());
  const avatarUrl = document.getElementById('avatar').value.trim() || defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
  const message = checkSpam(document.getElementById('message').value.trim());

  if (!name || !message) {
    alert('Заполните все поля');
    return;
  };
  
  const commentBox = document.createElement('div');
  const img = document.createElement('img');
  const commentInfo = document.createElement('div');
  const commentHeader = document.createElement('h3');
  const commentBody = document.createElement('p');
  const commentDate = document.createElement('span');
  
  commentBox.classList.add('comment-box');
  img.setAttribute('src', avatarUrl);
  img.setAttribute('alt', name);
  img.classList.add('comment-avatar');
  commentInfo.classList.add('comment-info');
  commentHeader.classList.add('comment-header');
  commentBody.classList.add('comment-body');
  commentDate.classList.add('comment-date');
  
  commentHeader.textContent = name;
  commentBody.textContent = message;
  commentDate.textContent = getFormattedDate();
  
  commentBox.appendChild(img);
  commentInfo.appendChild(commentHeader);
  commentInfo.appendChild(commentBody);
  commentBox.appendChild(commentInfo);
  commentBox.appendChild(commentDate);
  
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.appendChild(commentBox);
  
  document.getElementById('name').value = '';
  document.getElementById('avatar').value = '';
  document.getElementById('message').value = '';

  function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
};

const defaultAvatars = [
  'https://example.com/avatar1.jpg',
  'https://example.com/avatar2.jpg',
  'https://example.com/avatar3.jpg',
  'https://example.com/avatar4.jpg',
  'https://example.com/avatar5.jpg',
];

let avatarUrl = document.getElementById('avatar').value.trim() || defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];

  const message = document.getElementById('message').value.trim();

  if (!message) {
    alert('Заполните все поля');
    return;
  };
  
let avatarUrl = document.getElementById('avatar').value.trim();
if (!avatarUrl) {
  avatarUrl = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
};



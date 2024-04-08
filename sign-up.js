const registerForm = document.querySelector('#form');
const fname = document.querySelector('#fname');
const em = document.querySelector('#email');
const pwd = document.querySelector('#password');
const pnm = document.querySelector('#pnumber');

registerForm.addEventListener('submit', function (event) {
  // prevent the page from reloading;
  event.preventDefault();
  const signPayload = {
    name: fname.value,
    email: em.value,
    password: pwd.value,
    phonenumber: pnm.value
  };
  const apiURL = 'https://crm-ai.onrender.com/api/v1/users/signup';
  const headers = {
    method: 'post',
    body: JSON.stringify(signPayload),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  console.log(signPayload);
  fetch(apiURL, headers)
    .then(function (res) {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
    .then(function (json) {
      window.location = '/index.html';
    })
    .catch(function (error) {
      console.log(error);
    });
});
{/* <form action="">
<div>
   <label class="block-label" for="name">Name</label>
<input type="text" id="name" placeholder="Name">
</div>
<div>
   <label class="block-label" for="email">Email or Phone number</label>
<input type="text" id="email" placeholder="Email or Phone number">
</div>
<div>
   <label class="block-label" for="user">User</label>
<!-- <input type="text" id="user" placeholder="Pick an option"> -->

<select name="user" id="user" >
   <option value="" disabled selected >Pick an option</option>
   <option value="bloggers">Bloggers</option>
   <option value="content creator">Content creator</option>
   <option value="reader">Reader</option>
   <option value="community Member">Community Member</option>
   <option value="small business owner">Small business owner</option>
   <option value="educator">Educator</option>
   <option value="student">Student</option>
   <option value="hobbyist">Hobbyist</option>
   <option value="journalist">Journalist</option>
   <option value="writer">Writer</option>
   <option value="influencer">Influencer</option>
   <option value="other">Other</option>
</select>
</div>
<div>
   <label class="block-label" for="password">Password</label>
<input type="password" id="password" placeholder="Password here">
</div>
<div>
   <label class="block-label" for="confirm" >Confirm Password</label>
<input type="password" id="confirm" placeholder="Confirm password">
</div>
<div class="submit-div">
   <input type="submit" value="SignUp" class="submit-button">
   <p>already have an account? <span class="highlight-text"><a href="login.html">Log in</a></span></p>
</div>
</form> */}
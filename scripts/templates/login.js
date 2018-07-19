const loginTemplate = () => {
  return `
    <h3>Login</h3>
    <hr>
    <form id="login">
      <div class="form-group">
        <label for="login-email">Email address</label>
        <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter Email" required>
      </div>
      <div class="form-group">
        <label for="login-password">Password</label>
        <input type="password" class="form-control" id="pword" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-primary" id="sumbit-login">Login</button>
    </form>`
}

module.exports = loginTemplate

export const authTemplate = `
<div class="container">
  <div class="d-flex flex-column">
    <!-- login card -->
    <div class="card mt-5">
      <div class="card-header">
        <h5 class="card-title">Admin Login</h5>
      </div>
      <div class="card-body">
        <form id="admin-login-form">
          <div class="mb-3">
            <label for="username" class="form-label"
              >Username</label
            >
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>

`

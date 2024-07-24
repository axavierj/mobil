export const appMenuTemplate = `
 <aside
  class="offcanvas offcanvas-start d-print-none"
  tabindex="-1"
  id="offcanvasExample"
  aria-labelledby="offcanvasExampleLabel"
>
  <div class="offcanvas-header border-bottom">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">LRCC</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <section class="offcanvas-body">
    <ul class="nav flex-column">
      <li class="nav-item">
        <div class="d-flex align-content-center">
          <div class="place-content-center">
            <i class="bi bi-circle-fill"></i>
          </div>
          <a class="nav-link" href="index.html"> Home </a>
        </div>
      </li>
      <li class="nav-item">
        <div class="d-flex align-content-center">
          <div class="place-content-center">
            <i class="bi bi-circle-fill"></i>
          </div>
          <a class="nav-link" href="recipes.html"> recipes </a>
        </div>
      </li>
      <li class="nav-item">
        <div class="d-flex align-content-center">
          <div class="place-content-center">
            <i class="bi bi-circle-fill"></i>
          </div>
          <a class="nav-link" href="menus.html"> menu </a>
        </div>
      </li>
      <li class="nav-item">
        <div class="d-flex align-content-center">
          <div class="place-content-center">
            <i class="bi bi-circle-fill"></i>
          </div>
          <a class="nav-link" href="order.html"> orders </a>
        </div>
      </li>
      <li class="nav-item">
        <div class="d-flex align-content-center">
          <div class="place-content-center">
            <i class="bi bi-circle-fill"></i>
          </div>
          <a class="nav-link" href="contact.html"> contact </a>
        </div>
      </li>
    </ul>
  </section>
</aside>
      `

export const appNavTemplate = `
<nav class="navbar navbar-expand-lg bg-primary d-print-none">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 text-white">LRCC</span>
  </div>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    <i class="bi bi-list text-white"></i>
  </button>
</nav>
      `

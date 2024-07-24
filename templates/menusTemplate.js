export const menuTemplate = `
<section class="d-flex justify-content-between p-2">
  <h2>Menus</h2>
  <div class="d- gap-2">
    <a class="btn btn-primary" href="menu_create.html" >
      <i class="bi bi-plus-circle-fill"></i>
    </a>
    <a class="btn btn-success" href="index.html">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </div>
</section>
<menu-table></menu-table>
`

export const menuTableTemplate = `
<div class="table-responsive p-2">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>index</th>
        <th>title</th>
        <th>date</th>
        <th>active</th>
        <th>items</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
`
export const menuSingleTemplate = `
<div class="container d-flex justify-content-between p-2">
  <div id="title" class="h2">menu</div>
  <div class="d- gap-2 d-print-none">
    <a class="btn btn-primary" href="menus.html">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </div>
</div>
<div class="container d-print-none">
  <h3>Active: <span id="active">true</span></h3>
</div>
<div class="container">
  <h3>Date: <span id="Date">2024-02-03</span></h3>
</div>
<menu-accordion></menu-accordion>
`

export const menuAccordionTemplate = `
<div class="container">
  <button class="btn btn-primary mb-2 d-print-none" id="openAll">
    <i class="bi bi-arrow-down"></i>
  </button>
  <details class="border p-4">
    <summary>Monday</summary>
    <p class="p-3" id="monday-description">Menu items</p>
  </details>
  <details class="border p-4">
    <summary>Tuesday</summary>
    <p class="p-3" id="tuesday-description">Menu items</p>
  </details>
  <details class="border p-4">
    <summary>Wednesday</summary>
    <p class="p-3" id="wednesday-description">Menu items</p>
  </details>
  <details class="border p-4">
    <summary>Thursday</summary>
    <p class="p-3" id="thursday-description">Menu items</p>
  </details>
  <details class="border p-4">
    <summary>Friday</summary>
    <p class="p-3" id="friday-description">Menu items</p>
  </details>
</div>
`

export const menuCreateTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Create Menu</h2>
  
    <div class="d- gap-2">
      <a class="btn btn-primary" href="menus.html">
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <form id="menuForm">
    <div class="form-check form-switch mb-3">
      <input class="form-check-input" type="checkbox" id="activeSwitch" name="active">
      <label class="form-check-label" for="activeSwitch" name="active">active</label>
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">title</label>
      <div>
        <input type="text"  class="form-control" id="title" name="title" required>
      </div>
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">date</label>
      <div>
        <input type="date"  class="form-control" id="date" name="date" required>
      </div>
    </div>
    <fieldset>
      <legend>items</legend>
      <div class="mb-3 p-2 border-bottom">
        <div>
          <input type="text" readonly="true" value="monday"  class="form-control" id="day-monday" data-itemid name="day-monday" required>
        </div>
        <label for="description-monday" class="form-label">description</label>
        <div>
          <input type="text"  class="form-control" id="description-monday" name="description-monday" required>
        </div>
      </div>
      <div class="mb-3 p-2 border-bottom">
        <div>
          <input type="text" readonly="true" value="tuesday"  class="form-control" id="day-tuesday" data-itemid name="day-tuesday" required>
        </div>
        <label for="description-tuesday" class="form-label">description</label>
        <div>
          <input type="text"  class="form-control" id="description-tuesday" name="description-tuesday" required>
        </div>
      </div>
      <div class="mb-3 p-2 border-bottom">
        <div>
          <input type="text" readonly="true" value="wednesday"  class="form-control" id="day-wednesday" data-itemid name="day-wednesday" required>
        </div>
        <label for="description-wednesday" class="form-label">description</label>
        <div>
          <input type="text"  class="form-control" id="description-wednesday" name="description-wednesday" required>
        </div>
      </div>
      <div class="mb-3 p-2 border-bottom">
        <div>
          <input type="text" readonly="true" value="thursday"  class="form-control" id="day-thursday" data-itemid name="day-thursday" required>
        </div>
        <label for="description-thursday" class="form-label">description</label>
        <div>
          <input type="text"  class="form-control" id="description-thursday" name="description-thursday" required>
        </div>
      </div>
      <div class="mb-3 p-2 border-bottom">
        <div>
          <input type="text" readonly="true" value="friday"  class="form-control" id="day-friday" data-itemid name="day-friday" required>
        </div>
        <label for="description-friday" class="form-label">description</label>
        <div>
          <input type="text"  class="form-control" id="description-friday" name="description-friday" required>
        </div>
      </div>
    </fieldset>
    <button type="submit" class="btn btn-primary">
      <i class="bi bi-send"></i>
    </button>
    </form>
</div>
`

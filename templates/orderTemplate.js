export const orderTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Order</h2>
    <div class="d-flex gap-2">
      <a class="btn btn-primary" href="order_create.html" >
        <i class="bi bi-plus-circle"></i>
      </a>
     <a class="btn btn-success" href="index.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <app-order-table></app-order-table>
</div>
`

export const orderCreateTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Create Order</h2>
    <div class="d-flex gap-2">
      <a class="btn btn-success" href="order.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <app-order-form></app-order-form>
</div>
`

export const orderFormTemplate = `
<form>
  <div id="editData" class="d-none">
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="paid" name="paid">
      <label class="form-check-label" for="paid">paid</label>
    </div>
    <select class="form-select mt-2" id="status" name="status">
      <option value="pending" selected>pending</option>
      <option value="completed">completed</option>
      <option value="canceled">canceled</option>
    </select>    
  </div>
  <fieldset>
    <legend>client</legend>
    <label for="client" class="form-label">select contact</label>
    <select class="form-select" id="client" name="client">
    </select>
    <div>
    </div>
  </fieldset>
  <fieldset>
    <legend>menu</legend>
    <div class="d-flex flex-column gap-4">
      <app-order-day-input day="Monday"></app-order-day-input>
      <app-order-day-input day="Tuesday"></app-order-day-input>
      <app-order-day-input day="Wednesday"></app-order-day-input>
      <app-order-day-input day="Thursday"></app-order-day-input>
      <app-order-day-input day="Friday"></app-order-day-input>
    </div>
  </fieldset>
  <button class="btn btn-primary mt-3" type="submit">
    <i class="bi bi-send"></i>
  </button>
</form>
`
export const orderDayInputTemplate = `
<div>
  <input type="text" class="form-control" data-dayId="day" readonly value="Monday" disabled="" >
  <div class="input-group mt-2">
    <span class="input-group-text" >Quantity</span>
    <input type="number" class="form-control" min="0" value="0" data-quantityid="quantity">
    <button class="btn btn-outline-secondary" type="button" aria-label='up'>
      <i class="bi bi-caret-up-fill"></i>
    </button>
    <button class="btn btn-outline-secondary" type="button" aria-label='down'>
      <i class="bi bi-caret-down-fill"></i>
    </button>
  </div>
  <div>
    <select class="form-select mt-2" data-typeid="type">
      <option value="regular" selected>Regular</option>
      <option value="lowCarb">low carb</option>
      <option value="vegan">vegan</option>
      <option value="keto">keto</option>
      <option value="paleo">paleo</option>
      <option value="family">family</option>
    </select>
  </div>
</div>
`

export const orderTableTemplate = `

<div class="table-responsive p-2">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>client</th>
        <th>items</th>
        <th>paid</th>
        <th>status</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
`

export const orderSingleTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Order</h2>
    <div class="d-flex gap-2">
      <a class="btn btn-success" href="order.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <section class="card" id="orderCard">
  </section>
</div>
`

export const orderEditTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Edit Order</h2>
    <div class="d-flex gap-2">
      <a class="btn btn-success" href="order.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <app-order-form mode="edit"></app-order-form>
</div>
`

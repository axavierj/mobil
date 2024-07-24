export const contactTemplate = `
<div class="container d-flex justify-content-between p-2">
  <div id="title" class="h1">Contact</div>
  <div class="d-flex gap-2">
    <a class="btn btn-primary" href="contact_create.html" >
      <i class="bi bi-plus-circle-fill"></i>
    </a>
    <a class="btn btn-success" href="index.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
  </div>
</div>
<section class="d-flex flex-wrap gap-2 align-items-center container justify-content-center" id="contact-container">
</section>
`
export const contactCardTemplate = `

<div class="card contact-card" style="min-width: 400px">
    <div class="card-body">
      <h2 class="card-title" id="title">Contact</h2>
      <address class="card-text">
      address:
      <br/>
        <span id="address">
        </span>
      </address>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">email: <span id="email"></span></li>
      <li class="list-group-item">phone: <span id="phone"></span></li>
      <li class="list-group-item">additional info: <span id="additionalInfo"></span></li>
    </ul>
    <div class="card-body">
      <button class="btn btn-info" data-id="edit" data-element="editcontact">
        <i class="bi bi-pencil-fill"></i>
      </button>
      <button class="btn btn-danger" data-id="delete">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  </div>
`
export const contactCreateTemplate = `
<div class="container">
  <section class="d-flex justify-content-between mt-2">
    <div class="h1">Create Contact</div>
    <a class="btn btn-primary" href="contact.html">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </section>
  <app-contactform></app-contactform>
</div>
`

export const contactFormTemplate = `
<form>
  <div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <div>
      <input type="text"  class="form-control" id="firstName" name="firstName" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="lastName" class="form-label">Last Name</label>
    <div>
      <input type="text"  class="form-control" id="lastName" name="lastName" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Address</label>
    <div>
      <input type="text"  class="form-control" id="address" name="address" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="city" class="form-label">City</label>
    <div>
      <input type="text"  class="form-control" id="city" name="city" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="state" class="form-label">State</label>
    <div>
      <input type="text"  class="form-control" id="state" name="state" readonly value="FL">
    </div>
  </div>
  <div class="mb-3">
    <label for="zip" class="form-label">Zip Code</label>
    <div>
      <input type="text"  class="form-control" id="zip" name="zip" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="telephone" class="form-label">Telephone</label>
    <div>
      <input type="tel"  class="form-control" id="telephone" name="telephone" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <div>
      <input type="email"  class="form-control" id="email" name="email" required>
    </div>
  </div>
  <div class="mb-3">
    <label for="additionalInfo" class="form-label">Additional Info</label>
    <div>
      <textarea class="form-control" id="additionalInfo" name="additionalInfo"></textarea>
    </div>
  </div>
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-info"><i class="bi bi-send"></i></button>
    <button type="reset" class="btn btn-danger"><i class="bi bi-x-octagon-fill"></i></button>    
  </div>
  
</form>
`
export const contactEditTemplate = `
<div class="container">
 <section class="d-flex justify-content-between mt-2">
    <div class="h1">Edit Contact</div>
    <a class="btn btn-primary" href="contact.html">
      <i class="bi bi-house-door-fill"></i>
    </a>
  </section>
  <app-contactform></app-contactform>
</div>
`

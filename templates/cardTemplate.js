export const template = `
<div class="card" style="width: 16rem">
  <div class="card-body">
    <h2 class="card-title" id="day">monday</h2>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Regular:</strong>
        <div>
          <span class="badge bg-primary rounded-pill" id="regular">0</span>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Keto:</strong>
        <div>
          <span class="badge bg-primary rounded-pill" id="keto">0</span>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Paleo:</strong>
        <div>
          <span class="badge bg-primary rounded-pill" id="paleo">0</span>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Low Carb:</strong>
        <div>
          <span class="badge bg-primary rounded-pill" id="lowCarb">0</span>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <strong>Vegan:</strong>
        <div>
          <span class="badge bg-primary rounded-pill" id="vegan">0</span>
        </div>
      </div>
    </li>
  </ul>
</div>

`

// Service worker
//handel the install event
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.")
})

//handel the activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.")
})

//handel the fetch event
self.addEventListener("fetch", (event) => {})

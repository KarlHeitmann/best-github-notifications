import { Controller } from "@hotwired/stimulus"

async function fetchNotifications(token) {
  const resp = await fetch('https://api.github.com/notifications', {
      headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${token}`
      }
    })
  const data = await resp.json()
  return data
}

export default class extends Controller {
    static targets = [ "name", "output", "tok", "url" ]
  /*
    static targets = {
      "name": Object,
      "output": Object,
      "tok": Object,
      "url": Object,
    }
    */


  connect() {
    const fetch_data = async () => {
      const r = await fetchNotifications(this.data.get('token'))
      console.log(r)
    }
    fetch_data()
  }

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}

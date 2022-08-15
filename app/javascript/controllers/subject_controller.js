import { Controller } from "@hotwired/stimulus"

async function fetchNotification(url, token) {
  const resp = await fetch(url, {
      headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${token}`
      }
    })
  const data = await resp.json()
  return data
}


export default class extends Controller {
  connect() {
    console.log("Oh, it works!")
  }

  fetchData() {
    console.log("bla bla bla, URL: ", this.data.get("url"))
    const fetch_data = async () => {
      const r = await fetchNotification(this.data.get('url'), this.data.get('token'))
      console.log(r)
    }
    fetch_data()
  }
}

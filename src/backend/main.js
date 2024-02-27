import '../app.css'
import Backend from './Backend.svelte'

const backend = new Backend({
  target: document.getElementById('backend')
})

export default backend

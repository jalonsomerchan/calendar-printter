import { mount } from 'svelte'
import './app.css'
import WizardApp from './WizardApp.svelte'

const app = mount(WizardApp, {
  target: document.getElementById('app')!,
})

export default app

import { mount } from 'svelte'
import './app.css'
import WizardLocalizedApp from './WizardLocalizedApp.svelte'

const app = mount(WizardLocalizedApp, {
  target: document.getElementById('app')!,
})

export default app

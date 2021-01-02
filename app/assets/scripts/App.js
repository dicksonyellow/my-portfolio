import '../styles/styles.css'
import RevealOnScroll from './modules/Reveal-on-scroll'

new RevealOnScroll(document.querySelectorAll('.skills'), 70)
new RevealOnScroll(document.querySelectorAll('.c-info'), 60)

if (module.hot) {
    module.hot.accept()
}
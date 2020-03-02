import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'
export const setTitle: DirectiveOptions = {
  bind(el, binding) {

  },
  inserted(el, binding) {
    if (binding.value) {
      document.title = binding.value
    } else if (binding.value == '') {
      document.title = 'CD的博客小窝'
    }
  },
  update(el, binding, vnode, oldVnode) {
    const { value } = binding
    if (value) {
      document.title = value
    } else if (value == '') {
      document.title = 'CD的博客小窝'
    }
  },
  unbind(el, binding) {
  }

}
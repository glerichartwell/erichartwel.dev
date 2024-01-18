import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
// import component

describe(/*component name as string*/'', () => {
  it('renders properly', () => {
    const wrapper = mount(/* imported component*/ () => {/* this is a placeholder for a component */}, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

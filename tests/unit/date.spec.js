import DateComponent from '@/components/HelloWorld'

import { shallowMount } from '@vue/test-utils'

describe('test date', () => {
  it('props title', () => {
    const input = 'props title test'
    const wrapper = shallowMount(DateComponent, {
      propsData: {
        title: input
      }
    })
    expect(wrapper.find('h3').text()).toEqual(input)
  })

  it('props date', () => {
    const input = '2019-10-18 17:10:25'
    const wrapper = shallowMount(DateComponent, {
      propsData: {
        date: input
      }
    })
    expect(wrapper.find('.date').text()).toEqual(input)
  })

  // it('test click 1', () => {
  //   const input = '2019-10-18 17:10:25'
  //   const output = 'Friday, October 18, 2019 5:10 PM'
  //   const wrapper = shallowMount(DateComponent, {
  //     propsData: {
  //       date: input
  //     }
  //   })
  //   wrapper.find('button').trigger('click')
  //   Vue.nextTick(() => {
  //     expect(wrapper.vm.$data.americanDate).toEqual(output)
  //   })
  // })

  it('test click', () => {
    const jestFn = jest.fn()
    const wrapper = shallowMount(DateComponent)
    wrapper.setMethods({
      insertDate: jestFn
    })
    wrapper.find('button').trigger('click')
    expect(jestFn).toBeCalled()
  })
})
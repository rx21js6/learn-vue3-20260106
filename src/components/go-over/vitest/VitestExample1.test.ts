import { mount } from '@vue/test-utils'
import VitestExample1 from '@/components/go-over/vitest/VitestExample1.vue'

describe('VitestExample1.vue', () => {
  test('レンダリングのテスト', () => {
    const wrapper = mount(VitestExample1)
    expect(wrapper.text()).toContain('Vitestの例コンポーネント1')
    expect(wrapper.text()).toContain('Value 1')
    expect(wrapper.text()).toContain('Value 2')
    expect(wrapper.text()).not.toContain('Result:')

    // 入力フィールド
    const inputs = wrapper.findAll('input[type="number"]') ?? []
    expect(inputs.length).toBe(2)
    if (inputs.length === 2) {
      expect(inputs[0]?.attributes('placeholder')).toBe('Enter first number')
      expect((inputs[0]?.element as HTMLInputElement).value).toBe('0')
      expect(inputs[1]?.attributes('placeholder')).toBe('Enter second number')
      expect((inputs[1]?.element as HTMLInputElement).value).toBe('0')
    }
    // ボタン
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Calculate Sum')
  })

  test('合計計算のテスト', async () => {
    const wrapper = mount(VitestExample1)

    const inputs = wrapper.findAll('input[type="number"]') ?? []
    const button = wrapper.find('button')

    // 初期状態の確認
    // expect(resultDisplay.text()).toBe('Result: 0')

    // 入力値を設定
    if (inputs.length === 2) {
      await inputs[0]?.setValue('5')
      await inputs[1]?.setValue('10')
    }

    // ボタンをクリックして合計を計算
    await button.trigger('click')

    // 結果の確認
    expect(wrapper.text()).toContain('Result: 15')
  })
})

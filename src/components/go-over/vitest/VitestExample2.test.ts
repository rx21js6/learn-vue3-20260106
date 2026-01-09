import { mount } from '@vue/test-utils'
import axios, { type AxiosStatic } from 'axios'

import VitestExample2 from '@/components/go-over/vitest/VitestExample2.vue'

import type { Mocked } from 'vitest'

describe('VitestExample2.vue', () => {
  vi.mock('axios')

  beforeEach(() => {
    vi.resetAllMocks()
  })

  test('レンダリングのテスト', () => {
    const wrapper = mount(VitestExample2)
    expect(wrapper.text()).toContain('Vitestの例コンポーネント2')
    expect(wrapper.text()).toContain('ID: ')
    expect(wrapper.text()).not.toContain('Response:')

    // 入力フィールド
    const inputs = wrapper.findAll('input[type="number"]') ?? []
    expect(inputs.length).toBe(1)
    if (inputs.length === 1) {
      expect((inputs[0]?.element as HTMLInputElement).value).toBe('1')
    }

    // ボタン
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)

    if (buttons.length === 2) {
      expect(buttons[0]?.text()).toBe('Fetch Data')
      expect(buttons[1]?.text()).toBe('Reset')
    }
  })

  test('データ取得のテスト～リセット', async () => {
    const mockedAxios = axios as Mocked<AxiosStatic>

    const mockData = {
      userId: 1,
      id: 2,
      title: 'delectus aut autem',
      completed: false,
    }
    mockedAxios.get.mockResolvedValue({ data: mockData })

    const wrapper = mount(VitestExample2)
    const input = wrapper.get<HTMLInputElement>('#id-field')
    const buttons = wrapper.findAll('button')

    // 入力値を設定
    await input.setValue('2')

    // 「Fetch Data」ボタンをクリックしてデータを取得
    if (buttons.length === 2) {
      await buttons[0]?.trigger('click')
    }

    // 送信先のURLが正しいことを確認
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos/2',
    )

    // 結果の確認
    expect(wrapper.text()).toContain('Response:')
    expect(wrapper.text()).toContain('"id": 2,')
    expect(wrapper.text()).toContain('"title": "delectus aut autem",')

    // 「Reset」ボタンをクリックしてリセット
    if (buttons.length === 2) {
      await buttons[1]?.trigger('click')
    }

    // リセット後の確認
    expect(wrapper.text()).not.toContain('Response:')
    expect(input.element.value).toBe('1')
  })

  test('データ取得のテスト～エラーハンドリング', async () => {
    const mockedAxios = axios as Mocked<AxiosStatic>

    mockedAxios.get.mockRejectedValue(new Error('Network Error'))

    const wrapper = mount(VitestExample2)
    const buttons = wrapper.findAll('button')

    // 「Fetch Data」ボタンをクリックしてデータを取得
    if (buttons.length === 2) {
      await buttons[0]?.trigger('click')
    }

    // エラーメッセージの確認
    expect(wrapper.text()).toContain('Error fetching data')
  })
})

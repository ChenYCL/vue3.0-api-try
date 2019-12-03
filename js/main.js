const { createApp, createComponent } = Vue

const Counter = createComponent({
  template: `
    <div class="counter-display">
        <span class="counter-label">恭喜你，你已经写了</span>
        <span class="counter-text">{{ count }}</span>
        <span class="counter-label">斤代码！</span>
    </div>
    <div class="counter-btns">
        <button class="btn" @click="increase">写一斤</button>
        <button class="btn" @click="reset">删库啦</button>
    </div>
`,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
})

// 根组件
const App = createComponent({
  components: { Counter },
  template: `
        <div class="container">
            <h3>计数器示例</h3>
            <Counter />
        </div>
    `
})

// 创建函数体

const container = document.querySelector('#app')
const app = createApp()

// 挂在内容
app.mount(App, container)

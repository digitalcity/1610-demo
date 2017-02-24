step

- npm i
- npm run build


# props 实现组件间数据传递

- 只能从父组件传给子组件
- 子组件通过 {this.props.[name]} 获取 props 值
- 子组件设置默认属性 Btn.defaultProps = {}
- 子组件设置属性格式验证 Btn.propTypes = {}

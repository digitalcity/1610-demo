let a = 10;

function aa(x) {
  console.log('aaaa');
  return x*8
}

class Father {
  render(){
    throw new Error('子类必须实现')
  }
  _render(){
    return(`
      <ul>
        ${this.render()}
      </ul>
    `)
  }
}

export {a,aa,Father}; // 命名导出
// export default aa; // 默认导出



export default a;

class App extends Component { // 注意元件開頭第一個字母都要大寫
  constructor(props) {
    super(props);

    // 不使用FAF的話，constructor這邊要bind
    this.myFunction = this.myFunction.bind(this);

    // state放這裡...
    this.state = {}
  }

  // 使用FAF的話就不用bind
  myFunctionFAF = () => {
  }

  // 不使用FAF的話，constructor那邊要bind
  myFunction: function (){

  }
  // componentDidMount 為 component 生命週期中階段 component 已插入節點的階段，通常一些非同步操作都會放置在這個階段。這便是每1秒鐘會去呼叫 myFunctionFAF方法
  componentDidMount() {
    this.interval = setInterval(this.myFunctionFAF, 1000);
  }
  // componentWillUnmount 為 component 生命週期中 component 即將移出插入的節點的階段。這邊移除了 setInterval 效力
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      // 這邊放JSX...
      <FunctionalComponent props={}/> // 或是引入component，且把props傳下去component
    );
  }
}

// ES6 Class Component
class ClassComponent extends Component {
  
  // render 是 Class based 元件唯一必須的method
  render() {
    // 邏輯放這裡...
    return /*這邊放JSX*/
  }
}

// Functional Component
// 單純地 render UI 的 stateless components，沒有內部狀態、沒有實作物件和 ref，沒有生命週期函數。若非需要控制生命週期的話建議多使用 stateless components 獲得比較好的效能
const FunctionalComponent = () => {
  // 邏輯放這裡...
  return /*這邊放JSX*/
};

export default App;

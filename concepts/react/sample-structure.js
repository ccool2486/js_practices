class App extends Component { // 元件開頭第一個字母都要大寫
  constructor(props) { // 記得要放props
    super(props) // 記得要放props，不然會無法存取this.props

    // 不使用FAF的話，constructor這邊要bind
    this.myFunction = this.myFunction.bind(this)
    this.updateStateCount = this.updateStateCount.bind(this)

    // state放這裡...
    this.state = {
      count: 0,
      speed: props.speed // 吃預設值
    }
  }

  // 使用FAF的話就不用bind
  myFunctionFAF = () => {
  }

  // 不使用FAF的話，constructor那邊要bind
  myFunction: function (){

  }

  // 透過setState更新state
  updateStateCount(){
    this.setState((prevState) => { // 原本的state會被傳入，要用到的時候在寫參數名稱就好
      return {count: prevState + 1} // [注意！] 把「要更新的部分」用一個物件return回去
    })
  }

  render() {
    // 邏輯啊變數啊放這邊
    const name = "My name is Howard"


    return (
      // 把JSX return... 
      <FunctionalComponent name={name} myFunction={this.myFunction} /> // 或是引入component，且把props傳下去component，後者把function傳下去，讓component可以執行
      <ClassComponent name={name} myFunction={this.myFunction} /> 
      <p onClick={this.updateStateCount}></p> 
    );
  }
}

// 設定預設值
App.defaultProps = {
  speed: 0 
};

// ES6 Class Component
class ClassComponent extends Component {
  functionInClass(){
    // do something
  }

  // render 是 Class based 元件唯一必須的method
  render() {
    // 邏輯啊變數啊放這邊

    // 把JSX return... 
    return  (
      <p>name: {this.props.name}</p>
      // Class Componet也可以這樣子做bind，就不用在constructor裡面bind
      // 但是這個方法的話，每次render都會跑bind，會有效能考量，放contructor好像比較好
      <p onClick={this.props.myFunction}></p> 
    )
  }
}

// Functional Component
// 單純地 render UI 的 stateless components，沒有內部狀態、沒有實作物件和 ref，沒有生命週期函數。若非需要控制生命週期的話建議多使用 stateless components 獲得比較好的效能
const FunctionalComponent = (props) => {
  // 邏輯啊變數啊放這邊

  // 把JSX return... 
  return <p onClick={props.myFunction}>name: {props.name}</p> 
};

export default App;

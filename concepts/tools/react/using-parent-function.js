// 這是一個輸出名字的APP
// 每一個名字可以點擊刪除「那個」名字
// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707716?start=0

// app
// --List
// ----Name
// ----Name
// ----Name


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Howard", "Angel", "Stephanie", "Edward"]
    };
  }

  // 刪除單一名字的函式
  handleDeleteName = nameToRemove => {
    // 吃”nameToRemove“參數，要從state.name中移除那個名字
    this.setState(prevState => {
      {
        names: prevState.names.filter(
          // 把現有state.name與nameToRemove相同的濾掉
          name => nameToRemove !== name
        );
      }
    });
  };

  render() {
    <List names={this.state.names} handleDeleteName={this.handleDeleteName} />;
  }
}

const List = props => {
  return (
    <ol>
      {props.names.map(name => {
        <Name name={name} handleDeleteName={props.handleDeleteName} />;
      })}
    </ol>
  );
};

// 顯示單一名字的Component
const Name = props => {
  return (
    <div>
      {props.name}

      {/** 如果我們在直接onClick={props.handleDeleteName(props.name)}的話不會work
        ** 因為onclick會直接把event帶進去handleDeleteName裡面
        ** 我們可以緊接著執行一個Arrow Function，讓我們有正確的參數
       **/  
      }
      <button
        onClick={e => {
          props.handleDeleteName(props.name);
        }}
      >
        remove
      </button>
    </div>
  );
};

// ES6 class Component
class App extends Component {
    constructor(props) {
        super(props)
        // states放這裡...    
        this.state = {}
    }
    
    // 使用FAF的函式就不用bind 
    const myFunction = () => {}

    render() {
        // do something...
        return (
            // 回傳一些東西...
            // 用this.states.xxx來存取states
        )
    }
    
    
}

// Functional component, 只用來render東西
const FunctionalComponent = (props) => (
    // 回傳一些東西...
    // 可以用props.xxx來存取props
)


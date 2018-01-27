// 圖解: https://github.com/springload/react-redux-exercise (第一張圖很好理解)
// When do I know I’m ready for Redux? https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f

/**
 * Redux is a tool for managing application state.
 * - Dispatch an action -> triggers our Reducer function -> updates our Store.
 */

/**
 * 用餐廳的運作做想像：
 * - 每個人都是一個React Componet
 * - 每個人都有受過教育訓練。例如接待員知道：「如果這個桌子坐滿了，要跟接待櫃檯說這個桌子不接受更多人了」 (Javascripts logics)
 *   廚師知道「如果某個食材已經沒有了，就要告訴接待員，這道菜不能點了，或是在菜單上劃掉」(Javascripts logics)
 * - 如果不用redux的話，相當於這些溝通都是一對一的 (Callbacks, events)
 * 
 * ---用State/Props的話，相當於大家會自動通知其他人---
 * - 主管說：「現在哪幾桌是還沒有點餐的」 （state）
 * - 服務員說：「好，那我來跟他們點餐」，「現在點完了」（setState）
 * - 因為只有主管自己有state，所以相當於服務員請主管去更新狀態 （setState），更新完狀態後，主管才會叫別人做別的事情 (rerender virtual DOM)
 * 
 * ---用redux的話，相當於有一個老闆接收大家所有的訊息，整理在一個很大的儀表板上面 (store)---
 * - 每個人身上有一個小手機，把每個人需要的的資料從儀表版中拿出一點點出來 （props）
 * - 每個人會盯著手機看，並針對手機上的資料做事情 (props)
 *   例如服務生看到手機「這桌用餐結束了」，他就會自動「去清理桌子」，並且清理完後，用無線電跟領班說「某個桌子已經空出來」 (dispatch actions)
 *   那麼櫃檯看到手機後，就自動會帶位新的客人到這個桌子，而「不用服務生親自去跟櫃台人員說」才會做事 (props)
 * 
 * ---States v.s Redux---
 * - State需要由State的持有者更新狀態 （setState）
 *   有時候這樣會一直用props一直傳下去setState functions，挺麻煩的 （例如：<ChildComponet props={} handelUpdate={this.handleUpdate}/>）
 * - Redux不用一直往下傳functions，大家可以直接跟領班說發生了什麼事情 （dispatching actions to Reducer）
 * - State做法時，有State的Component會越來越多，然後變成跨State的更新變得複雜，因為不同的狀態是活在不同的instance裡面
 *   A底下的A-1, A-2會更新B裡面的States，會讓資料變亂，但有時候邏輯上又的確需要這樣子 （例如Users跟Orders，中間會有要溝通的，拆成兩個State會有這個麻煩）
 * - Redux做法時，只有一個大state，不會有多個State的可能，這讓管理變得簡單 (Store, Reducers, Reducer)
 * - Redux的Class Component會比較少
 * - Redux中的APP全貌比較好理解，因為Store都在同一個地方，也沒有把setState一直傳遞下去
 * - Redux Debbuger很好用
 * - Unit Test會很好寫
 * - Redux中的Component，可以不用依賴props，這樣可以讓通用性變大，Component可以放在更多地方被使用
 
 * 
 * Store: 一個儲存所有資料/狀態的物件
 * 像是「一個餐廳，有一個老闆坐在一個小房間，裡面有一個電視牆跟儀表板去紀錄所有桌子的用餐狀態/服務生的狀態，」
 * -  React components can subscribe to the store and whenever the store is updated
 * 
 * Provider:
 * 
 * Container:
 * 像是「餐廳裡面的大家手機中的APP」 （提供觀察store中的state的機制）
 * 
 * Selectors:
 * 像是「APP裡面的畫面，每個人會看到不同的資料」 （Filter出不同的資料）
 * 
 * Middleware:
 * 
 * React Component:
 * 像是「一個服務生，一個餐桌，一個菜單」
 * - 透過store.getState把資料即時更新在手機上
 * 
 * Actions:
 * 像是「服務生跟領班說『我要去服務第二桌的客人』; 一個餐桌跟領班說『我的桌子現在要多坐了一個客人』; 菜單跟領班說說『客人黃軍皓要點椒麻雞』」
 * type就是上面的「服務」，「增加客人」，「點餐」
 * payload就是上面的「第二桌」，「一個」，「黃軍皓, 椒麻雞」
 * 由領班負責聽大家的action，並且dispatch要做的事情給大主管(Reducers)
 * 
 * Reducers:
 * 像是「餐廳裡面的大主管，他會去『接受』領班所所發出的actions」
 * 大主管會跟小主管們溝通現在的「狀態」，例如哪裡有空位，哪裡客人變少了
 * - Reducer是一個「純」Fucntion，這個Function描述了每一個Action Type要如何更新Store
 * - 使用Reducers後，都會回傳一個新的APP狀態
 * - 使用reducer的角色的原因是，把它獨立出來後，他就不可能去修改action的定義
 * 
 * Reducer:
 * 像是「廚房裡的主廚，前台接待櫃檯，服務生小主管」
 * 這三個小主管會接收大主管的訊息，分別管理自己分工管理的狀態
 * 例如主廚把廚房狀態記錄在store.kitchen中
 * 例如櫃檯接待會把桌子的狀態記在store.tables中
 * 然後就會顯示在老闆的儀表板上面，並且同步資料到大家的手機裡面
 * 
 * 
 */
// 圖解: https://github.com/springload/react-redux-exercise (第一張圖很好理解)

/**
 * 用餐廳的運作做想像：
 * - 每個人身上都有無線電，可以接受整個餐廳的營運狀態
 * - 每個人都是一個React Componet
 * - 每個人都有受過教育訓練。例如接待員知道：「如果這個桌子坐滿了，要跟接待櫃檯說這個桌子不接受更多人了」
 *   廚師知道「如果某個食材已經沒有了，就要告訴接待員，這道菜不能點了，或是在菜單上劃掉」
 * - 如果不用redux的話，相當於這些溝通都是一對一的
 * 
 * - 用redux的話，相當於有一個老闆接收大家所有的訊息，整理在一個很大的儀表板上面 (store)
 * - 每個人身上有一個小手機，把每個人需要的的資料從儀表版中拿出一點點出來 （props）
 * - 每個人會盯著手機看，並針對手機上的資料做事情
 *   例如服務生看到手機「這桌用餐結束了」，他就會自動「去清理桌子」，並且清理完後，用無線電跟大主管說「某個桌子已經空出來」
 *   那麼櫃檯看到手機後，就自動會帶位新的客人到這個桌子，而「不用服務生親自去跟櫃台人員說」才會做事
 * 
 * Store: 一個儲存所有資料/狀態的物件
 * 像是「一個餐廳，有一個老闆坐在一個小房間，裡面有一個電視牆跟儀表板去紀錄所有桌子的用餐狀態/服務生的狀態，」
 * 
 * Provider:
 * 
 * Container:
 * 像是「餐廳裡面的大家使用的無線電」
 * 
 * Middleware:
 * 
 * React Component:
 * 像是「一個服務生，一個餐桌，一個菜單」
 * 
 * Actions:
 * 像是「服務生說『我要去服務第二桌的客人』; 一個餐桌說『我的桌子現在要多坐了一個客人』; 菜單說『客人黃軍皓要點椒麻雞』」
 * type就是上面的「服務」，「增加客人」，「點餐」
 * payload就是上面的「第二桌」，「一個」，「黃軍皓, 椒麻雞」
 * dispatch的就是上面的「要」這個字
 * 
 * Reducers:
 * 像是「餐廳裡面的大主管，他會去『接受』各種component所發出的actions」
 * 大主管會跟小主管們溝通現在的「狀態」，例如哪裡有空位，哪裡客人變少了
 * 
 * Reducer:
 * 像是「廚房裡的主廚，前台接待櫃檯，服務生小主管」
 * 這三個小主管會接收大主管的訊息，分別管理自己分工管理的狀態
 * 例如主廚把廚房狀態記錄在store.kitchen中
 * 例如櫃檯接待會把桌子的狀態記在store.tables中
 * 然後就會顯示在老闆的儀表板上面
 * 
 * 
 */
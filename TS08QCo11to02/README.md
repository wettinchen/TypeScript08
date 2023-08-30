## TypeScript 08
## Chapter 08: Generics
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Starter code and set up
        在 terminal 輸入 tsc -w
        在 google chrome 瀏覽器 Ctrl + shift + i 開啟 Console

###  4. What are Generics?
        TypeScript 確實允許 generics
        因為有時不知道什麼類型會被傳入
        譬如介面、類別或其他
        
###  5. Basic Example and Syntax
        宣告 echo，使用 type 參數或 type 變數，修改類別為 T 或其他字母

###  6. isObject example
        宣告 isObj，確認參數為物件會回傳 true

###  7. isTrue with keyof Assertion
        宣告 isTrue，
        確認參數為有 key 和 value 的物件或有元素的陣列會回傳 true

###  8. Interface with Generic example
        使用 generic 設定介面，名稱為 BoolCheck
        宣告 checkBoolValue，使用 BoolCheck 建構

###  9. Narrowing Generics with Extends
        使用 generic 設定介面，名稱為 HasID
        宣告 processUser，使用 HasID 擴充，如果沒有 id 會顯示錯誤
        

### 10. Multiple Type Variables & Extends with keyof
        宣告 getUsersProperty，使用介面HasID 擴充為 T，使用介面的 key 擴充為 K，設定 users, key 和 getUsersProperty 的類別

### 11. Class with Generics
        (1)設定 class 名稱為 StateObject，用 generic 設定類別；
        宣告 store，在控制台顯示 setter 的結果
        (2)設定參數為 John，類別為 string，
        修改為 Dave，類別為 string，未顯示錯誤，
        修改為 12，類別為 number，會顯示錯誤
        (3)移除預設參數 John，類別會改為 unknown，會顯示錯誤
        (4)宣告 store 和 myState，設定類別
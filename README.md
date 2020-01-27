## redux example
* store: React.js 프로젝트에서 사용하는 모든 동적 데이터를 담아두는 곳
* action: 어떤 변화가 일어나야 할 지 나타내는 객체
* reducer: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체.

### reducer는 순수함수여야 한다.
- redux에선 어플리케이션 state를 직접 변경하는것을 허용하지 않는다. action 객체를 처리하는 함수이다. action은 어떤 변화를 일어나야 할 지 알려주는 객체라면, reducer는 그 정보를 받고 애플리케이션의 상태를 어떻게 바꿀지 정의한다고 볼 수 있다.

순수함수란
* 외부 네트워크 혹은 데이터베이스에 접근하지 않아야 한다.
* return 값은 오직 parameter 값에만 의존되어야 한다.
* 인수는 변경되지 않아야한다.
* 같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야 한다.
* 순수하지 않은 API 호출을 하지 말아야 한다.

- redux 컴포넌트인 `<Provider>` 에 store을 설정해주면 그 하위 컴포넌트들에 따로 parent-child 구조로 전달해주지 않아도 connect될 때 store에 접근 할 수 있게 해준다.

### redux는 velopert 님의 블로그를 보고 공부하였습니다.
[참고자료](https://velopert.com/1226)

### redux-saga는 아래 링크를 참고하였습니다.
[참고자료](https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md)

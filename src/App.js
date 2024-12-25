import logo from './logo.svg';
import './App.css';
// zustand
import { create } from 'zustand'

// 1.创建Store
//
const useStore = create((set)=>{
  return {
    // 状态数据
    count: 0,
    // 修改状态数据的方法
    inc: ()=>{
      set((state)=>({ count: state.count + 1}))
    }
  }
})

// 2. 绑定Store到组件
// useStore => { count, inc }
function App() {
  const { count, inc } = useStore()
  return (
    <>
      <button onClick={inc}>{count}</button>
    </>
  );
}

export default App;

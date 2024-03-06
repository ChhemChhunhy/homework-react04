import Products from "../cards/Product"
import Feedbacks from "../cards/Feedback"
export default function Main() {
 

  return (
    <>
    <h1 className="text-center text-3xl font-bold text-blue-500 mb-5">Products</h1>
    <section className="grid grid-cols-1 gap-y-7 mx-auto max-w-sm sm:grid-cols-2 md:grid-cols-2 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 xl:grid-cols-4 sm:max-w-xl sm:gap-4 xl:mx-auto xl:max-w-screen-2xl xl:px-16  xl:gap-5">
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
    </section> 
    <h1 className="text-center text-3xl  mt-8 font-bold text-blue-500">Feedback From User</h1> 
    <section className="grid grid-cols-1 gap-4 mx-auto max-w-sm sm:grid-cols-2 md:grid-cols-2 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 xl:grid-cols-4 sm:max-w-xl sm:gap-4 xl:mx-auto xl:max-w-screen-2xl xl:px-16  xl:gap-5 mt-9">
      <Feedbacks/>
      <Feedbacks/>
      <Feedbacks/>
      <Feedbacks/>
    </section>
      
    
    </>
  )
}




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

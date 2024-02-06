import './App.css';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)


function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const addABear = useBearStore((state) => state.addABear)
  return <button onClick={addABear}>one up</button>
}



function App() {
  return (
    <div className="App">
      {Controls()}
      {BearCounter()}
    </div>
  );
}

export default App;

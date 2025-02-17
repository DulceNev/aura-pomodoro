import create from 'zustand';

const useTimerStore = create((set) => ({
    // Aquí puedes definir tu estado y funciones
    customTime: 25,
    setCustomTime: (time) => set({ customTime: time }),
}));

export default useTimerStore; 
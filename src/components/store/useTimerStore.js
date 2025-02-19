import { create } from 'zustand';

const useTimerStore = create((set) => ({
    // Aquí puedes definir tu estado y funciones
    customTime: 25,
    isModoFocus: false,
    isDescansoCorto: false,
    isDescansoLargo: false,
    isRunning: false,
    setCustomTime: (time) => set({ customTime: time }),
    modoFocus: (status = true) => set({ customTime: 25, isModoFocus: status, isDescansoCorto: false, isDescansoLargo: false }),
    descansoCorto: (status = true) => set({ customTime: 5, isModoFocus: false, isDescansoCorto: status, isDescansoLargo: false }),
    descansoLargo: (status = true) => set({ customTime: 0, isModoFocus: false, isDescansoCorto: false, isDescansoLargo: status }),
    setIsRunning: (status = true) => set({ isRunning: status }),
}));

export default useTimerStore;

// import  asdasdas from "asdasdas"
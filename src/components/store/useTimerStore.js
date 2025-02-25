import { create } from 'zustand';


const updateDataTheme = (theme) => {
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    body.classList.add('is-changing')
    if (html) {
        html.setAttribute('data-theme', theme)
    }
    setTimeout(() => {
        body.classList.remove('is-changing')
    }, 250)
}

const useTimerStore = create((set) => ({
    // Aquí puedes definir tu estado y funciones
    customTime: 25,
    isModoFocus: false,
    isDescansoCorto: false,
    isDescansoLargo: false,
    isRunning: false,
    setCustomTime: (time) => set({ customTime: time }),
    modoFocus: (status = true) => {

        updateDataTheme('focus')

        return set({ customTime: 25, isModoFocus: status, isDescansoCorto: false, isDescansoLargo: false })
    },
    descansoCorto: (status = true) => {
        updateDataTheme('short-break')
        return set({ customTime: 5, isModoFocus: false, isDescansoCorto: status, isDescansoLargo: false })
    },
    descansoLargo: (status = true) => {
        updateDataTheme('long-break')


        return set({ customTime: 15, isModoFocus: false, isDescansoCorto: false, isDescansoLargo: status })
    },
    setIsRunning: (status = true) => set({ isRunning: status }),
}));

export default useTimerStore;
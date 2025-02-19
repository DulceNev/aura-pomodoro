import useTimerStore from "../store/useTimerStore";

function Header() {
    const { modoFocus, descansoCorto, descansoLargo, isModoFocus, isDescansoCorto, isDescansoLargo } = useTimerStore();
    return (
        <header className="h-30 bg-transparent flex justify-between items-center px-15  text-xl">
            <box-icon name='cog'
                size='md'
                className="rounded-full fill-[var(--color-primary)] hover:bg-[var(--color-primary)] p-1 transition-colors duration-300 ease-in-out active:scale-95 hover:fill-white ">
            </box-icon>

            <nav className="flex justify-center items-center gap-4">
                <button
                    onClick={() => modoFocus(!isModoFocus)}
                    className={`${isModoFocus
                        ? 'bg-[#ffa0c6]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        : 'bg-[#FFD9E9]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        } px-14 py-2 rounded-[20px] border-solid border-1 shadow-[0_6px_4px_rgba(140,39,81,0.3)]`}
                >
                    Enfoque
                </button>

                <button
                    onClick={() => descansoCorto(!isDescansoCorto)}
                    className={`${isDescansoCorto
                        ? 'bg-[#ffa0c6]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        : 'bg-[#FFD9E9]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        } px-10 py-2 rounded-[20px] border-solid border-1 shadow-[0_6px_4px_rgba(140,39,81,0.3)]`}
                >
                    Descanso corto
                </button>

                <button
                    onClick={() => descansoLargo(!isDescansoLargo)}
                    className={`${isDescansoLargo
                        ? 'bg-[#ffa0c6]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        : 'bg-[#FFD9E9]/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
                        } px-10 py-2 rounded-[20px] border-solid border-1 shadow-[0_6px_4px_rgba(140,39,81,0.3)]`}
                >
                    Descanso largo
                </button>



            </nav>


            <box-icon name='code' size='md' className="p-1 fill-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:fill-white transition-colors duration-300 ease-in-out active:scale-95 rounded-full"></box-icon>


        </header>
    );
}

export default Header;

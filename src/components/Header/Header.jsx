import useTimerStore from "../store/useTimerStore";
import 'boxicons'
import Button from "../common/Button";
import IconButton from "../common/IconButton";
function Header() {
    const { modoFocus, descansoCorto, descansoLargo, isModoFocus, isDescansoCorto, isDescansoLargo } = useTimerStore();
    return (
        <header className="h-30 bg-transparent flex justify-between items-center px-15  text-xl">
            <label htmlFor="my-drawer">
                <IconButton
                    icon='cog'
                    size='md'
                    type='outline'
                    className="rounded-full fill-[var(--color-primary)] hover:bg-[var(--color-primary)] p-1 transition-colors duration-300 ease-in-out active:scale-95 hover:fill-white "
                />
            </label>

            <nav className="flex justify-center items-center gap-4">
                <Button
                    onClick={() => modoFocus(!isModoFocus)}
                    isActive={isModoFocus}
                >
                    Enfoque
                </Button>

                <Button
                    onClick={() => descansoCorto(!isDescansoCorto)}
                    isActive={isDescansoCorto}

                >
                    Descanso corto
                </Button>

                <Button
                    onClick={() => descansoLargo(!isDescansoLargo)}
                    isActive={isDescansoLargo}

                >
                    Descanso largo
                </Button>



            </nav>

            <IconButton
                icon='code'
                size='md'
                type='outline'

            />




        </header>
    );
}

export default Header;

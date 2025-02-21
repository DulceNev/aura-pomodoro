import useTimerStore from "../store/useTimerStore";

function Drawer() {
    const { customTime, setCustomTime } = useTimerStore();

    function handleInputChange(event) {
        const value = event.target.value;
        setCustomTime(value);

    }
    return (
        <div className="drawer " >
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                <ul className="menu bg-base-200 text-primary rounded-xl text-base-content min-h-full w-80 py-10 flex flex-col items-center gap-4">
                    {/* Sidebar content here */}
                    <h2 className="text-2xl font-bold mb-4">⊹ ˚ ₊  Ajustes  ₊ ˚ ⊹</h2>

                    <div className="flex gap-2 text-lg w-full justify-center">
                        <label htmlFor="workTime">Tiempo de trabajo:</label>
                        <input className="" type="number" value={customTime} onChange={handleInputChange} min={1} max={5000} />
                    </div>

                    <div className="flex gap-2 text-lg w-full justify-center">
                        <label htmlFor="workTime">Tiempo de descanso corto:</label>
                        <input className="" type="number" />
                    </div>

                    <div className="flex gap-2 text-lg w-full justify-center">
                        <label htmlFor="workTime">Tiempo de descanso largo:</label>
                        <input className="" type="number" />
                    </div>


                </ul>
            </div>
        </div >
    )
}

export default Drawer;

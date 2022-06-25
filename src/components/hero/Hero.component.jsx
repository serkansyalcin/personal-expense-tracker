import Balance from "../balance/Balance.component"
import Analytics from "../analytics/Analytics.component"
import ToggleButtons from "../toggle-buttons/ToggleButtons.component"
import History from "../history/History.component"

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row mx-16 my-8 gap-x-32">
            <div className="flex flex-col gap-8">
                <Balance />
                <Analytics />
            </div>
            <div className="flex flex-col gap-8">
                <ToggleButtons />
                <History />
            </div>
        </div>
    )
}

export default Hero
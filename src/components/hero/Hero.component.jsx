import Balance from "../balance/Balance.component"
import Analytics from "../analytics/Analytics.component"
import ToggleButtons from "../toggle-buttons/ToggleButtons.component"
import History from "../history/History.component"

const Hero = () => {
    return (
        <div className="flex flex-col xl:flex-row mx-4 md:mx-16 my-4 md:my-8 gap-x-32">
            <div className="flex flex-col gap-8 items-center xl:items-start">
                <Balance />
                <Analytics />
            </div>
            <div className="flex flex-col gap-8 items-center xl:items-start">
                <ToggleButtons />
                <History />
            </div>
        </div>
    )
}

export default Hero
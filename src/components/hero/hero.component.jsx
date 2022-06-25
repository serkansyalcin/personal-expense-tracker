import Balance from "../balance/balance.component"
import Analytics from "../analytics/analytics.component"

const Hero = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 mx-16 my-8 gap-y-0 gap-x-32">
            <Balance />
            <div></div>
            <Analytics />
        </div>
    )
}

export default Hero
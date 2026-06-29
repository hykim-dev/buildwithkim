import AnimatedCounter from "../shared/Counter/AnimatedCounter";
import { counterData } from "@/data/profileData";

const CounterArea = () => {
    return (
        <div className="tp-counter-area tp-counter-spacing">
            <div className="container">
                <div className="row">
                    {counterData.map((counter, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="tp-counter-item text-center mb-30">
                                <h2 className="tp-counter-tittle mb-10">
                                    <AnimatedCounter min={0} max={counter.value} />
                                    {counter.suffix}
                                </h2>
                                <h6 className="tp-counter-subtittle mb-15">{counter.title}</h6>
                                <p className="tp-counter-para">{counter.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterArea;

import { faqData } from '@/data/profileData';

const AboutFaq = () => {
    return (
        <div className="tp-faq-area pt-150 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="tp-faq-wrapper mb-20">
                            <h2 className="tp-section-tittle text-center mb-55">
                                Frequently asked questions
                            </h2>
                            <div className="tp-faq-wrap">
                                <div
                                    className="tp-faq-accordion mb-60"
                                    id="general_faqaccordiontwo"
                                >
                                    {faqData.map((item) => (
                                        <div className="accordion-item mb-15" key={item.id}>
                                            <h2
                                                className="accordion-header p-relative"
                                                id={`order_${item.id}`}
                                            >
                                                <button
                                                    className={`tp-faq-btn ${item.show ? "" : "collapsed"
                                                        }`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#order__collapse_${item.id}`}
                                                    aria-expanded={item.show ? "true" : "false"}
                                                    aria-controls={`order__collapse_${item.id}`}
                                                >
                                                    {item.question}
                                                    <span className="accordion-btn"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={`order__collapse_${item.id}`}
                                                className={`accordion-collapse collapse ${item.show ? "show" : ""
                                                    }`}
                                                aria-labelledby={`order_${item.id}`}
                                                data-bs-parent="#general_faqaccordiontwo"
                                            >
                                                <div className="accordion-body tp-faq-details-para">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFaq;

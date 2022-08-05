import { Appraisal } from "../components/appraisal/appraisal";
import { ContentSlider } from "../components/contentSlider/contentSlider";
import { TestimonialCard } from "../components/testimonials/testimonials";
import { Properties } from "../components/Properties/properties";
import { Search } from "../components/search/search";
import { useState } from "react";
import Modal from "react-modal";




export default function Home() {
  
  const [filterValue, setFilter] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "20vw",
      },
    };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="hero-banner sub">
        <div className="hero-banner__inner">
          <div className="hero-banner__content">
            <Search activePage={"buy"} setFilter={setFilter}></Search>
          </div>
        </div>
      </section>
      <section className="properties properties--buy">
        <h1>Properties for Rent</h1>
        <div className="properties__inner"></div>
      </section>
      <section className="title-content-columns">
        <div className="title-content-columns__inner">
          <h2 className="">
            Relationships, Excellence &amp; Authenticity is at the very core of
            everything we do.
          </h2>
          <div className="title-content-columns__content">
            <p>
              At Anton Zhouk Property Management we pride ourselves on
              developing lasting relationships with our clients, consistently
              delivering results, and being authentic &amp; transparent in
              everything we do. With a team that has over 25+ years’ experience
              in property management, this allows us to provide reputable advice
              to our landlords and tenants, making sure the whole leasing and
              managing process is streamlined and made easy for you. With a
              boutique portfolio, our team is uniquely positioned to offer a
              more premium and personalised property management service.
            </p>
          </div>
          <div className=" title-content-columns__cols">
            <p>1. 25+ Years Experience in Property Management</p>
            <p>
              2. Honest &amp; Reliable in Our Approach
              <button
                type="button"
                class="btn"
                onClick={() => {
                  openModal();
                }}
              >
                Request Rental Appraisal
              </button>
            </p>
            <p>3. Prompt Communication &amp; Available 7 days</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-heading">
          <h4>THE PROOF</h4>
        </div>

        <div className="testimonials">
          <TestimonialCard></TestimonialCard>
        </div>
      </section>

      <section className="title-columns" id="change">
        <div className="title-columns__inner">
          <h2 className="">
            Changing Property Managers has never been easier.
          </h2>
          <p className=" subtitle">
            Making the switch won’t cost you anything and you won’t need to
            contact your previous Property Manager. Get in contact with our team
            today and let us do the rest for you.
          </p>
          <div className=" title-columns__cols">
            <div className="title-columns__col">
              <h4>1. Making the switch.</h4>
              <p>
                Once an agreement has been signed for Anton Zhouk to manage your
                investment property, we will get in touch with your previous
                agent and organise to collect the keys and any necessary
                paperwork to take over the management with no hassle.{" "}
              </p>
            </div>
            <div className="title-columns__col">
              <h4>2. No disruptions to your tenant.</h4>
              <p>
                Once all of this has been done, we will get in touch with your
                tenant to introduce ourselves, so you can be assured moving your
                property to us will seem effortless and with minimum disruption
                to your tenant.{" "}
              </p>
              <button
                type="button"
                class="btn"
                onClick={() => {
                  openModal();
                }}
              >
                Request Rental Appraisal
              </button>
            </div>
            <div className="title-columns__col">
              <h4>3. We look after you.</h4>
              <p>
                Our Property Management team has 25+ years’ experience in
                looking after client’s investment properties. All of our
                processes are streamlined, and you’re kept up to date every step
                of the way. Making sure we are consistently providing the best
                possible service to our clients and tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="constenSlider">
        <div class="testimonials-heading">
          <h4>Why A—Z?</h4>
        </div>
        <ContentSlider />
      </section>
      <section className="leaseForm">
        {/* <Appraisal /> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="appraisalContainer">
            <div className="appraisalHeader">
              <h2>Appraisal Form</h2>
              <svg
                className="closeBtn"
                onClick={closeModal}
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            </div>
            <div className="content">
              <Appraisal />
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
}
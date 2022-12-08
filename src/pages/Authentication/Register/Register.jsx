import React from "react";
import "../Authentication.css";
import RegisterField from "./RegisterField";
import registerBanner from "../../../assets/513049 PI8X2J 876.png";
const Register = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <button
          type="button"
          class="btn-close close-btn-modal d-none d-lg-block"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content modal-sizing">
            <div class="modal-header  border-0">
              <span
                class="modal-title modal-top-title modal-header"
                id="exampleModalLabel"
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>

              <button
                type="button"
                class="btn-close d-lg-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body ">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold fs-3 mb-3">Create Account</h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <RegisterField></RegisterField>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <p className="text-end mb-3">
                    Already have an account?
                    <button className="singnInBtn">Sign In</button>
                  </p>
                  <div>
                    <img src={registerBanner} alt="" />
                    <p className="privacy-text">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

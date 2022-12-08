import React from "react";
import "../Authentication.css";
import RegisterField from "./RegisterField";
import registerBanner from "../../../assets/513049 PI8X2J 876.png";
import Login from "../Login/Login";
const Register = () => {
  return (
    <div>
      {/* register modal */}
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
            <div class="modal-header d-none d-md-block  border-0">
              <span
                class="modal-title modal-top-title modal-header"
                id="exampleModalLabel"
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>

              <button
                type="button"
                class="btn-close d-md-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body ">
              <div className="row p-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold fs-3 mb-3">Create Account</h1>
                    <button
                      type="button"
                      class="btn-close d-lg-none"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <RegisterField></RegisterField>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <p className="text-end mb-3">
                    Already have an account?
                    <button
                      className="singnInBtn"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Sign In
                    </button>
                  </p>
                  <div>
                    <img src={registerBanner} alt="" className="w-100 mt-4" />
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

      {/* login modal */}

      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
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
              <div className="row p-3">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold fs-3 mb-3">Sign In </h1>
                    <button
                      type="button"
                      class="btn-close d-lg-none"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <Login></Login>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="go-create-account ">
                    <span className="mb-3 text-end">
                      Don’t have an account yet?
                    </span>
                    <span
                      className="singnInBtn"
                      data-bs-target="#exampleModal"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Create new for free!
                    </span>
                  </div>
                  <div className="mt-4">
                    <img src={registerBanner} alt="" className="w-100" />
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

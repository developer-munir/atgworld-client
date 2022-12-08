import React from "react";
import "../Authentication.css";
import { AiOutlineEye } from "react-icons/ai";
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
          class="btn-close close-btn-modal"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content modal-sizing">
            <div class="modal-header border-0">
              <h5
                class="modal-title modal-top-title modal-header"
                id="exampleModalLabel"
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h5>
            </div>
            <div class="modal-body ">
              <div className="row">
                <div className="col-6">
                  <h1 className="fw-bold fs-3 mb-3">Create Account</h1>
                  <div className="main-group">
                    <div class="input-group ">
                      <input
                        type="text"
                        class="form-control name"
                        placeholder="First Name"
                        aria-label="Username"
                        name="first-name"
                      />
                      <input
                        type="text"
                        class="form-control name-2"
                        placeholder="Last Name"
                        aria-label="Server"
                        name="second-name"
                      />
                    </div>
                    <input
                      type="email"
                      class="form-control from-style "
                      placeholder="Email"
                      aria-label="Server"
                      name="email"
                    />
                    <div class="input-group ">
                      <input
                        type="password"
                        class="form-control from-style"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        name="password"
                      />
                      <span
                        class="eye-btn me-2"
                        type="button"
                        id="button-addon2"
                      >
                        <AiOutlineEye></AiOutlineEye>
                      </span>
                    </div>

                    <input
                      type="password"
                      class="form-control from-style last-input"
                      placeholder="Confirm Password"
                      aria-label="Server"
                      name="confirm-password"
                    />
                  </div>
                </div>
                <div className="col-6">Create Account</div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

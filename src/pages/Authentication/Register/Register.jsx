import React from "react";
import "../Authentication.css";

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
            <div class="modal-body ">...</div>
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

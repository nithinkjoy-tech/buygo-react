import { Component } from 'react';
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

class ConfirmBuy extends Component {
    submit = () => {
        confirmAlert({
          title: "Confirm to purchase",
          message: "Are you sure want ot purchase these items.",
          buttons: [
            {
              label: "Yes",
              onClick: () =>
                toast.success("You have successfully placed your order"),
            },
            {
              label: "No",
            },
          ],
        });
      };
}

export default ConfirmBuy;
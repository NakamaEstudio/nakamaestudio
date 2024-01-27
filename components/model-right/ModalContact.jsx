import {dsnCN} from "../../hooks/helper";
import DsnGrid from "../../layout/DsnGrid";
import ContactForm from "../contact/ContactForm";
import InfoBox from "../contact/InfoBox";
import React from "react";

function ModalContact({className = "", ...restProps}) {
    return (
        <div className={dsnCN("section-padding-modal", className)} {...restProps}>
            <DsnGrid col={2} colTablet={1}>
                <ContactForm/>
                <InfoBox className="align-self-center"/>
            </DsnGrid>
        </div>
    );
}

export default ModalContact;
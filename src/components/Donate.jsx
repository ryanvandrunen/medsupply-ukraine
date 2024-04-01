import React from "react";
import CustomGForm from "@customgform-lib/react-customgform";

const FORMID = "cluhdj42c0018wnc86obdmol9";

export default function Donate() {
  return (
    <div>
      <p>Donate page</p>
      <CustomGForm formId={FORMID}></CustomGForm>
    </div>
  );
}

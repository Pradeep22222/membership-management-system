import React from "react";
import { MemberDetailsTable } from "./MemberDetailsTable";

export const MembersDetailsSection = ({ members }) => {
  return (
    <div className="MembersDetailsSection">
      <MemberDetailsTable members={members}></MemberDetailsTable>
    </div>
  );
};

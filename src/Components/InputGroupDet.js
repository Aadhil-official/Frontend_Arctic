import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClipboard, faMoneyBills ,faUserGroup  } from "@fortawesome/free-solid-svg-icons";
import { error, success } from '../util/Toastify';
import { z } from 'zod';

export default function InputGroupDet() {
  const [userGroupID, setUserGroupID] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [relevantPrivileges, setRelevantPrivileges] = useState("");

  const validateForm = z.object({
    userGroupID: z.string().min(1, "Enter user group ID").regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Cannot enter special characters",
    }),
    groupName: z.string().min(1, "Enter group name"),
    groupDescription: z.string().min(1, "Enter group description"),
    relevantPrivileges: z.string().min(1, "Enter relevant privileges"),
  });

  const hanldeSave = () => {
    const data = { userGroupID, groupName, groupDescription, relevantPrivileges };
    const result = validateForm.safeParse(data);
    if (result.success) {
      success("Form validation success");
      // Perform save action here
    } else if (result.error) {
      const formattedError = result.error.format();
      if (formattedError.userGroupID?._errors) {
        error(String(formattedError.userGroupID?._errors));
      } else if (formattedError.groupName?._errors) {
        error(String(formattedError.groupName?._errors));
      } else if (formattedError.groupDescription?._errors) {
        error(String(formattedError.groupDescription?._errors));
      } else if (formattedError.relevantPrivileges?._errors) {
        error(String(formattedError.relevantPrivileges?._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };

  return (
    <div>
      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="User Group ID" value={userGroupID} onChange={(e) => setUserGroupID(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faUserGroup} className="icon" />
        <input type="text" placeholder="Group Name" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faClipboard} className="icon" />
        <input type="text" placeholder="Group Description" value={groupDescription} onChange={(e) => setGroupDescription(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faMoneyBills} className="icon"/>
        <input type="text" placeholder="Relevant Privileges" value={relevantPrivileges} onChange={(e) => setRelevantPrivileges(e.target.value)} />
      </div>

      <button style={{
            width: '25%',
            height: '30px',
            alignItems:'center',
            backgroundColor:'#667EEA',
            border:'0',
            color:'white',
            cursor: 'pointer',
            position:'relative',
            left:"500px"
            
      }} onClick={hanldeSave}
      >Edit Details</button>    </div>
  );
}

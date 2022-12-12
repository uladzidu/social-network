import React, { ChangeEvent, useEffect, useState } from "react";

export type ProfileStatusWithHooksPropsType = {
  status: string | any;
  updateStatus: any;
};

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  const deactivateEditMode = () => {
    setEdit(false);
    props.updateStatus(status);
  };
  const activateEditMode = () => {
    setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <div>
          <input
            autoFocus
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            type={status}
            value={props.status}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
        </div>
      )}
    </div>
  );
};

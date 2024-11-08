import React, { useEffect, useState } from "react";
import FormGroup from "./FormGroup/FormGroup";
import SelectInput from "./SelectInput/SelectInput";

function FilterHeader({
  setMember_id,
  setNameCardPhone,
  setExpiredate,
  setBlood_group,
  setGender,
  expiredate,
  blood_group,
  gender,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-3 mt-3 ">
      <FormGroup
        colSpan={2}
        placeholder={"ENTER MEMBER ID"}
        maxLength={50}
        type={"text"}
        inputClassName={"filterItem"}
        setState={setMember_id}
      />
      <FormGroup
        colSpan={2}
        placeholder={"ENTER NAME,EMAIL,PHONE"}
        maxLength={50}
        type={"text"}
        inputClassName={"filterItem"}
        setState={setNameCardPhone}
      />
      <SelectInput
        value={expiredate}
        inputClassName={"filterItem"}
        onChange={(e) => {
          setExpiredate(e.target.value);
        }}
      >
        <option value="0" selected>
          ALL ACTIVE/EXPIRED
        </option>
        <option value="1">ACTIVE</option>
        <option value="2">EXPIRED</option>
        <option value="3">EXPIRE TODAY</option>
        <option value="4">EXPIRE IN 3 DAYS</option>
        <option value="5">EXPIRE IN 7 DAYS</option>
        <option value="6">EXPIRE IN 15 DAYS</option>
        <option value="7">EXPIRE THIS MONTH</option>
      </SelectInput>
      <SelectInput
        value={blood_group}
        inputClassName={"filterItem"}
        onChange={(e) => {
          setBlood_group(e.target.value);
        }}
      >
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="NOT TESTED">NOT TESTED</option>
        <option value="">Select Blood group</option>
      </SelectInput>
      <SelectInput
        inputClassName={"filterItem"}
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
        <option value="">Select Gender</option>
      </SelectInput>
    </div>
  );
}

export default FilterHeader;

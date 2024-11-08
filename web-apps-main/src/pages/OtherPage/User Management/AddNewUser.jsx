import React, { useCallback, useEffect, useMemo, useState } from "react";

import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

import * as z from "zod";
import moment from "moment/moment";
import UseAxiosSecure from "../../../Hook/UseAxioSecure";
import MemberRegisterInput from "../../../components/partial/MemberRegistration/MemberRegisterInput/MemberRegisterInput";
import MemberRegisterSelect from "../../../components/partial/MemberRegistration/MemberRegisterSelect/MemberRegisterSelect";
import ImageUpload from "../../../config/Upload/ImageUploadcpanel";
import Modal from "../../../components/partial/Modal/Modal";
import AddPackageForm from "./AddPackage/AddPackageForm/AddPackageForm";
import PrintModal from "../../../components/partial/Modal/PrintModal/PrintModal";
import A4PrintTemplate from "../../../config/PrintTemplate/A4PrintTemplate/A4PrintTemplate";
import PrintTemplate from "../../../config/PrintTemplate/PrintTemplate";
import { useReactToPrint } from "react-to-print";

const schema = z.object({
  full_name: z.string().nonempty({ message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  contact_no: z
    .string()
    .regex(/^\d{11}$/, { message: "Please enter a valid phone number" }),
  
  date_of_birth: z.string().optional(),
  nid_number: z.string().nonempty({ message: "Please enter your NID number" }),
  address: z.string().optional(),
  gender: z.string().nonempty({ message: "Please select your gender" }),

  blood_group: z.string().optional(),
  // role: z.string().nonempty({ message: "Please enter your role" }),
  nickname: z.string().optional(),
  status: z.string().optional(),
  religion: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  profession: z.string().optional(),
  // expiredate: z.string().nonempty({ message: "Please enter your expiredate" }),
  photourl: z.string().optional(),
  member_id: z.string().nonempty({ message: "Please enter your member id" }),
  emergency_contact_name: z.string().optional(),
  emergency_contact_number: z.string().optional(),
  fb_id: z.string().optional(),
  member_type: z.string().optional(),
  admission_date: z
    .string()
    .nonempty({ message: "Please enter your admission date" }),
  card_no: z
    .string()
    .nonempty({ message: "Please enter your emergency contact number" }),
});

function AddNewUser() {
  const bloodGroups = useMemo(() => ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], []);
  const memberTypes = useMemo(() => ["Monthly", "Weekly", "Daily", "Package"], []);
  const [age, setAge] = useState(null);
  const [userId, setUserId] = useState("");
  const [memberId, setMemberId] = useState("");  
  const [isShowPrint, setIsShowPrint] = useState(false);
  const [printData, setPrintData] = useState(null);
  const [printType, setPrintType] = useState("");

  const [isShowAddPackage, setIsShowAddPackage] = useState(false);

  const axiosSecure = UseAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(errors, "error");

  const resetPrintData = () => {
    setIsShowPrint(false);
    setPrintData(null);
    setPrintType("");
  };

  const handleA4Print = useReactToPrint({
    content: () => document.getElementById("A4-print-template"),
  });
  const handleThermalPrint = useReactToPrint({
    content: () => document.getElementById("print-template"),
  });

  const handlePrint = useCallback(() => {
    if (printType === "thermal" && printData) {
      handleThermalPrint();
      console.log("handleThermalPrint");
    } else if (printType === "A4Print" && printData) {
      handleA4Print();
      console.log("handleA4Print");
    }
  }, [printType, printData, handleThermalPrint, handleA4Print]);

  const onSubmit = async (data) => {
    data.role = "member";
    data.branch = "shia";


  if (!data.photourl || data.photourl.trim() === "") {
    data.photourl = "https://multigympremium.com/uploads/nophoto.png";
  }
  
    try {
      const response = await axiosSecure.post(`/users/post`, data);
      if (response?.status === 200 || response?.status === 201) {
        toast.success("Registration successful!");
        setIsShowAddPackage(true);
        setUserId(response?.data?._id);
        reset();
        return response?.status;
      }
    } catch (error) {
      console.log(error);
      

      if (error?.response?.status === 400) {

        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
        });
      }
    }
  };

  const calculateAge = (dob) => {
    const birthDate = moment(dob);
    const currentDate = moment();
    const calculatedAge = currentDate.diff(birthDate, 'years');
    return calculatedAge;
  };

  // Handle date of birth change to calculate age
  const handleDateOfBirthChange = (e) => {
    const dob = e.target.value;
    if (!moment(dob).isValid()) {
      setError("date_of_birth", { message: "Please select a valid date" });
      return;
    }
    const age = calculateAge(dob);
    setAge(age);
  };
  const memberIdValue = watch("member_id");
  useEffect(() => {
    setValue("member_id", memberId); 
  }, [memberId, setValue]);

  const handleAddmitionDate = (e) => {
    const date = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    console.log("date", date);

    setValue("admission_date", date);
    setValue("expiredate", date);
  };

  useEffect(() => {
    const date = moment(new Date()).format("YYYY-MM-DD");

    console.log("date", date);

    setValue("admission_date", date);
    setValue("expiredate", date);
  }, [setValue]);

  return (
    <article
      className={`w-full  rounded-xl bg-white py-6 transition-all duration-500 `}
    >
      <form className="px-5 py-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3 ">
          <p className="text-xl col-span-2 bg-yellow-500 text-white px-4  py-2 rounded-xl font-medium ">
            Subscription Form
          </p>
          <MemberRegisterInput
            type={"text"}
            register={register}
            error={errors}
            name={"full_name"}
            isRequired={true}
            label={"Full Name *"}
          />
          <MemberRegisterSelect
            type={"text"}
            label={"Member Type*"}
            register={register}
            error={errors}
            name={"member_type"}
            isRequired={true}
          >
            <option value={""}>Select Member Type</option>
            {memberTypes.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </MemberRegisterSelect>
          <MemberRegisterInput
            type={"text"}
            label={"Contact Number*"}
            register={register}
            error={errors}
            name={"contact_no"}
            isRequired={true}
          />
          <MemberRegisterInput
            type={"text"}
            label={"Member Id"}   // First member ID field
            register={register}
            error={errors}
            name={"member_id"}
            isRequired={true}
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}  // Update memberId state on change
          />



          <p className="text-xl bg-gray-600 text-white px-4 py-2 rounded-xl font-medium my-6 col-span-2">
            Personal Information
          </p>
          <MemberRegisterInput
            type={"text"}
            register={register}
            error={errors}
            name={"nickname"}
            isRequired={false}
            label={"Nickname"}
          />

                  <MemberRegisterInput
            type={"date"}
            label={"Date Of Birth"}
            register={register}
            error={errors}
            name={"date_of_birth"}
            onChange={handleDateOfBirthChange} // Add onChange to calculate age
            isRequired={false}
          />

          <MemberRegisterInput
            type={"text"}
            label={"National ID*"}
            register={register}
            error={errors}
            name={"nid_number"}
            isRequired={true}
          />
                    <MemberRegisterInput
            type={"text"}
            label={"Address"}
            register={register}
            error={errors}
            name={"address"}
            isRequired={false}
          />


          <MemberRegisterSelect
  type={"text"}
  label={"Marital Status"}
  register={register}
  error={errors}
  name={"status"}
  isRequired={false}
>
  <option value={""}>Select Marital Status</option>
  <option value={"Married"}>Married</option>
  <option value={"Unmarried"}>Unmarried</option>
  <option value={"Divorced"}>Divorced</option>
  <option value={"Don't say"}>Don't Say</option>
</MemberRegisterSelect>
<MemberRegisterSelect
  type={"text"}
  label={"Gender *"}
  register={register}
  error={errors}
  name={"gender"}
  isRequired={true}
>
  <option value={""}>Select Gender</option>
  <option value={"Male"}>Male</option>
  <option value={"Female"}>Female</option>
</MemberRegisterSelect>
          <MemberRegisterSelect
  type={"text"}
  label={"Religion"}
  register={register}
  error={errors}
  name={"religion"}
  isRequired={false}
>
  <option value={""}>Select Religion</option>
  <option value={"Islam"}>Islam</option>
  <option value={"Hindu"}>Hindu</option>
  <option value={"Christian"}>Christian</option>
  <option value={"Buddhism"}>Buddhism</option>
  <option value={"Other"}>Other</option>
</MemberRegisterSelect>

<MemberRegisterInput
            type={"email"}
            label={"Email*"}
            register={register}
            error={errors}
            name={"email"}
            isRequired={true}
          />
          <MemberRegisterInput
            type={"text"}
            label={"Emergency Contact Name"}
            minLength={0}
            register={register}
            error={errors}
            name={"emergency_contact_name"}
            isRequired={false}
          />
          <MemberRegisterInput
            type={"text"}
            label={"emergency Contact Number"}
            minLength={0}
            register={register}
            error={errors}
            name={"emergency_contact_number"}
            isRequired={false}
          /> 
                    <MemberRegisterInput
            type={"text"}
            label={"FB ID"}
            register={register}
            error={errors}
            name={"fb_id"}
          />
                    <MemberRegisterSelect
            type={"text"}
            label={"Blood Group *"}
            register={register}
            error={errors}
            name={"blood_group"}
            isRequired={false}
          >
            <option value={""} selected>
              Chose..
            </option>
            {bloodGroups.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </MemberRegisterSelect>
          <MemberRegisterInput
            type={"text"}
            label={"AGE"} // Age is only displayed, not sent
            value={age || ""} // Show calculated age
            isRequired={false}
            readOnly={true} // Make it read-only
          />


<MemberRegisterSelect
  type={"text"}
  label={"Height"}
  register={register}
  error={errors}
  name={"height"}
  isRequired={false}
>
  <option value={""}>Select Height</option>
  {Array.from({ length: 5 }, (_, feetIndex) => {
    const feet = feetIndex + 3; 
    return Array.from({ length: 12 }, (_, inchIndex) => {
      const inch = inchIndex;
      return (
        <option value={`${feet} feet ${inch}`} key={`${feet}-${inch}`}>
          {`${feet} feet ${inch}`}
        </option>
      );
    });
  })}
</MemberRegisterSelect>

          <MemberRegisterInput
            type={"text"}
            label={"Weight (Kg)"}
            minLength={0}
            register={register}
            error={errors}
            name={"weight"}
            isRequired={false}
          />
          <MemberRegisterInput
            type={"text"}
            label={"Profession"}
            minLength={0}
            register={register}
            error={errors}
            name={"profession"}
            isRequired={false}
          />




  
        <p className="text-xl bg-gray-600 text-white px-4 py-2 rounded-xl font-medium my-6 col-span-2">
            Office Information
          </p>
          <MemberRegisterInput
            type={"text"}
            label={"Member Id"}  // Second member ID field
            register={register}
            error={errors}
            name={"member_id"}
            isRequired={true}
            onChange={(e) => setMemberId(e.target.value)}  // Sync with the same memberId value
          />

          <MemberRegisterInput
            type={"text"}
            label={"Card Number"}
            register={register}
            error={errors}
            name={"card_no"}
            isRequired={true}
          />

          <MemberRegisterInput
            type={"date"}
            label={"Admission Date"}
            minLength={0}
            register={register}
            error={errors}
            name={"admission_date"}
            onChange={{ onChange: handleAddmitionDate }}
            isRequired={false}
          />
          <MemberRegisterInput
            type={"date"}
            label={"Expiry Date"}
            register={register}
            error={errors}
            name={"expiredate"}
            readOnly={true}
            isRequired={false}
            disabled={true}
          />      

          <MemberRegisterInput
            type={"text"}
            label={"Photo Url"}
            minLength={0}
            register={register}
            error={errors}
            name={"photourl"}
            isRequired={true}
          />
          <ImageUpload setValue={setValue} />
        </div>
        <div>
          <div className="flex justify-end py-3 mt-2 w-full">
            <div className="flex justify-end items-center gap-3 mt-9">
              <div className="flex justify-end">
                <div className="flex gap-2 cursor-pointer items-center bg-yellow-500 text-white py-2 px-8 rounded-xl shadow hover:bg-yellow-700 transition duration-300 text-xl">
                  <button type="submit" className="font-semibold">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Modal
        isShowModal={isShowAddPackage}
        setIsShowModal={setIsShowAddPackage}
      >
        <AddPackageForm
          setIsShow={setIsShowAddPackage}
          isShow={isShowAddPackage}
          userId={userId}
          setIsShowPrint={setIsShowPrint}
          setPrintData={setPrintData}
          setPrintType={setPrintType}
          printData={printData}
        />
      </Modal>
      <PrintModal
        isShowModal={printType === "thermal" && printData}
        setIsShowModal={setPrintType}
        resetPrintData={resetPrintData}
        handlePrint={handlePrint}
      >
        <PrintTemplate data={printData} handlePrint={handleThermalPrint} />
      </PrintModal>
      <PrintModal
        isShowModal={printType === "A4Print" && printData}
        setIsShowModal={setPrintType}
        resetPrintData={resetPrintData}
        handlePrint={handlePrint}
      >
        <A4PrintTemplate data={printData} handlePrint={handleA4Print} />
      </PrintModal>
    </article>
  );
}

export default AddNewUser;

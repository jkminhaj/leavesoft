import React from "react";
import MemberRegisterSelect from "../MemberRegistration/MemberRegisterSelect/MemberRegisterSelect";
import SMSBox from "./SMSBox/SMSBox";

<select class="form-control" id="smsTemplateId" name="smsTemplateId">
  <option value=""></option>
  <option value="59"></option>
  <option value="66"> </option>
  <option value="67">Invite</option>
  <option value="68"></option>
  <option value="69"></option>
  <option value="74"></option>
  <option value="78"> </option>
  <option value="87"></option>
  <option value="89"></option>
  <option value="101"></option>
  <option value="102">Eid Mubarak.</option>
  <option value="104"> </option>
  <option value="113"></option>
  <option value="115">Eid al-Adha</option>
  <option value="119">ঈদ-উল-আযহা</option>
  <option value="123"></option>
</select>;

function SendSMS({ setIsShow, isShow, smsArray }) {
  const options = [
    {
      label: "Eid Mubarak",
      value: "Eid Mubarak",
    },
    {
      label: "Invite",
      value: "Invite",
    },
    {
      label: "Admission",
      value: "Admission",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "Diet Chart",
      value: "Diet Chart",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
    {
      label: "Notice",
      value: "Notice",
    },
    {
      label: "Reminder",
      value: "Reminder",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
    {
      label: "3 Months package",
      value: "3 Months package",
    },
    {
      label: "পবিত্র ঈদুল আযহার",
      value: "পবিত্র ঈদুল আযহার",
    },
    {
      label: "Multi Gym Premium celebrating  1-Year Anniversary!",
      value: "Multi Gym Premium celebrating  1-Year Anniversary!",
    },
  ];
  return (
    <article
      className={`w-full md:w-[65%] lg:w-[70%] max-h-[90vh] bg-white my-7 overflow-hidden transition-all duration-500 relative ${
        isShow ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <h2 className="px-5 py-1 bg-slate-100 border-b border-gray-300 font-bold">
        Send sms
      </h2>

      <div className="grid gap-2 grid-cols-12">
        <form
          className={`px-5 py-3 ${
            smsArray?.length > 0 ? "col-span-5" : "col-span-12"
          } `}
        >
          <p>
            Please enter sms text below. You can also select sms text from
            template you created earliar.
          </p>
          <MemberRegisterSelect
            type={"text"}
            label={"Select from SMS Template"}
          >
            <option value={""} selected>
              Select...
            </option>
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </MemberRegisterSelect>

          <textarea
            id="advance"
            className="w-full min-h-[250px] my-4 border border-gray-300 focus:border-black p-2"
            placeholder="Message..."
          />

          <div className="flex justify-end items-center gap-3 mt-3">
            {!smsArray?.length > 0 && (
              <button
                type="button"
                className="py-1 px-3 border border-gray-500 hover:bg-gray-300 rounded-full"
                onClick={() => setIsShow(false)}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="py-1 px-3 bg-green-600 hover:bg-green-800 rounded-full text-white"
            >
              Save
            </button>
          </div>
        </form>
        {smsArray?.length > 0 && (
          <div className=" px-5 py-3 col-span-7">
            <div className="max-h-[73vh] overflow-auto space-y-2">
              {smsArray?.length > 0 &&
                smsArray.map((item, index) => (
                  <SMSBox key={index} item={item} />
                ))}
            </div>

            {smsArray?.length > 0 && (
              <button
                type="button"
                className="py-1 px-3 border border-gray-500 hover:bg-gray-300 rounded-full absolute bottom-2 right-2"
                onClick={() => setIsShow(false)}
              >
                Cancel
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default SendSMS;

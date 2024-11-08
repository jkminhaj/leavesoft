import {
  RiFileHistoryLine,
  RiUserForbidLine,
  RiUserLine,
  RiUserShared2Line,
} from "react-icons/ri";
import { BsDoorOpen, BsDoorOpenFill } from "react-icons/bs";
import {
  MdDashboard,
  MdPeopleAlt,
  MdPersonAddAlt1,
  MdPerson,
  MdGroups,
  MdLockOpen,
  MdPayment,
  MdAttachMoney,
  MdReceiptLong,
  MdFitnessCenter,
  MdLibraryBooks,
  MdOutlineFeedback,
  MdTrackChanges,
  MdFindReplace,
  MdSettings,
  MdReport,
  MdEventAvailable,
  MdEventNote,
  MdOutlineFastfood,
  MdCalendarToday,
  MdLogout,
  MdVpnKey,
  MdOutlineAnalytics,
  MdChangeCircle,
  MdSms,
  MdOutlineTextsms,
  MdOutlineGroupAdd,
  MdMessage,
  MdOutlineCampaign,
  MdOutlineHistoryEdu,
  MdOutlineUpdate,
  MdOutlineCompassCalibration,
  MdSchedule,
  MdList,
  MdPersonPin,
  MdPersonAdd,
  MdBarChart,
  MdOutlineLibraryBooks,
  MdDateRange,
  MdOutlineDoorBack,
  MdChatBubble,
  MdHistory,
  MdOutlineMessage,
} from "react-icons/md";
import { IoAnalyticsOutline, IoFastFoodOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { FaClockRotateLeft } from "react-icons/fa6";
import {
  TbLibrary,
  TbLibraryPlus,
  TbMessage2Cog,
  TbMessageDots,
  TbMessageMinus,
  TbMessagePause,
  TbReportAnalytics,
  TbSettingsDollar,
  TbTemplate,
  TbUserPlus,
  TbUsers,
  TbUsersGroup,
  TbUserShare,
  TbUsersPlus,
} from "react-icons/tb";
import { TbLockCog } from "react-icons/tb";
import { TbLockPlus } from "react-icons/tb";
import { TbLockDollar } from "react-icons/tb";
import { LiaUsersCogSolid } from "react-icons/lia";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMapPinDollar } from "react-icons/tb";
import { LiaUserClockSolid } from "react-icons/lia";
import { LiaSearchDollarSolid } from "react-icons/lia";
import {
  PiBuildingOffice,
  PiClockCounterClockwise,
  PiUserList,
  PiUsersFour,
  PiUsersThree,
} from "react-icons/pi";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import {
  HiOutlineMap,
  HiOutlineUser,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { BiGroup } from "react-icons/bi";
import { GoGear, GoTerminal } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendar4Event } from "react-icons/bs";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import UseAxiosSecure from "../../Hook/UseAxioSecure";
import { useEffect, useMemo, useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";

const MenuItems = (userRole) => {
  const [permissionData, setPermissionData] = useState([]);
  const [groupNames, setGroupNames] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const axiosSecure = UseAxiosSecure();

  const isAllowedRoute = (pathName) => {
    const isAllowed =
      permissionData &&
      permissionData.length > 0 &&
      permissionData.find((item) => item.path === pathName)?.isAllowed;

    if (userRole === "admin") {
      return true;
    }

    return isAllowed || false;
  };

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await axiosSecure.get(`/permissions/${userRole}`);
        const permissionRoutesArray = response?.data?.routesData.map(
          (item) => item.path
        );

        localStorage.setItem(
          "permissionRoutes",
          JSON.stringify(permissionRoutesArray)
        );

        setPermissionData(response?.data?.routesData);
        setGroupNames(response?.data?.groupNames?.allowedGroups);
        console.log("response", response, response?.data?.groupNames);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };
    fetchPermissions();
  }, [userRole, axiosSecure]);

  const allMenuItems = [
    // Admin dashboard
    {
      title: "Dashboard",
      icon: <LuLayoutDashboard className="text-lg" />,
      list: [
        {
          title: "Overview",
          path: "overview",
          isAllowed: isAllowedRoute("overview"),
          icon: <LuLayoutDashboard className="text-lg" />,
        },
        {
          title: "Visitor",
          path: "visitor",
          isAllowed: isAllowedRoute("visitor"),
          icon: <PiUsersFour className="text-lg" />,
        },
      ],
    },
    {
      title: "Dashboard User",
      icon: <LuLayoutDashboard className="text-lg" />,
      list: [
        {
          title: "Workout Routine",
          path: "workout-routine",
          isAllowed: isAllowedRoute("workout-routine"),
          icon: <MdOutlineUpdate className="text-lg" />,
        },
        {
          title: "Diet Plan",
          path: "diet-plan",
          isAllowed: isAllowedRoute("diet-plan"),
          icon: <HiOutlineMap className="text-lg" />,
        },
        {
          title: "Schedule Classes",
          path: "shedule_classes",
          isAllowed: isAllowedRoute("shedule_classes"),
          icon: <BsCalendar4Event className="text-lg" />,
        },
        {
          title: "User Profile",
          path: "user_profile",
          isAllowed: isAllowedRoute("user_profile"),
          icon: <AiOutlineProfile className="text-lg" />,
        },
        {
          title: "Change Password",
          path: "change_password",
          isAllowed: isAllowedRoute("change_password"),
          icon: <RiShieldKeyholeLine className="text-lg" />,
        },
      ],
    },
    {
      title: "User Management",
      icon: <TbUsers className="text-lg" />,
      list: [
        {
          title: "Add New User",
          path: "add-new-user",
          isAllowed: isAllowedRoute("add-new-user"),
          icon: <TbUserPlus className="text-lg" />,
        },
        {
          title: "Members",
          path: "members",
          isAllowed: isAllowedRoute("members"),
          icon: <TbUsersGroup className="text-lg" />,
        },
        {
          title: "Gym Staff",
          path: "gym-staff",
          isAllowed: isAllowedRoute("gym-staff"),
          icon: <BiGroup className="text-lg" />,
        },
        {
          title: "User Migration",
          path: "user-migration",
          isAllowed: isAllowedRoute("user-migration"),
          icon: <LiaUsersCogSolid className="text-lg" />,
        },
        {
          title: "Un Activeuser",
          path: "unactiveuser",
          isAllowed: isAllowedRoute("unactiveuser"),
          icon: <FaUserAltSlash className="text-lg" />,
        },
      ],
    },
    {
      title: "Locker Management",
      icon: <MdLockOpen className="text-lg" />,
      list: [
        {
          title: "Assign Lockers",
          path: "assign-lockers",
          isAllowed: isAllowedRoute("assign-lockers"),
          icon: <TbLockPlus className="text-lg" />,
        },
        {
          title: "Manage Lockers",
          path: "manage-lockers",
          isAllowed: isAllowedRoute("manage-lockers"),
          icon: <TbLockCog className="text-lg" />,
        },
        {
          title: "Locker Payments",
          path: "locker-payments",
          isAllowed: isAllowedRoute("locker-payments"),
          icon: <TbLockDollar className="text-lg" />,
        },
      ],
    },
    {
      title: "Financial Management",
      icon: <MdAttachMoney className="text-lg" />,
      list: [
        {
          title: "Invoices and Billing",
          path: "invoices-billing",
          isAllowed: isAllowedRoute("invoices-billing"),
          icon: <LiaFileInvoiceDollarSolid className="text-lg" />,
        },

        {
          title: "Reports",
          path: "reports",
          isAllowed: isAllowedRoute("reports"),
          icon: <TbReportAnalytics className="text-lg" />,
        },
        {
          title: "Expense Tracking",
          path: "expense-tracking",
          isAllowed: isAllowedRoute("expense-tracking"),
          icon: <TbMapPinDollar className="text-lg" />,
        },
        {
          title: "Tax Management",
          path: "tax-management",
          isAllowed: isAllowedRoute("tax-management"),
          icon: <TbSettingsDollar className="text-lg" />,
        },
        {
          title: "Add Payment Method",
          path: "payment-method",
          isAllowed: isAllowedRoute("payment-method"),
          icon: <MdAttachMoney className="text-lg" />,
        },
        {
          title: "Create Transaction Type",
          path: "create-transaction-type",
          isAllowed: isAllowedRoute("create-transaction-type"),
          icon: <MdAttachMoney className="text-lg" />,
        },
      ],
    },
    {
      title: "Member Follow-Up",
      icon: <RiUserShared2Line className="text-lg" />,
      list: [
        {
          title: "Automated Reminders",
          path: "automated-reminders",
          isAllowed: isAllowedRoute("automated-reminders"),
          icon: <PiClockCounterClockwise className="text-lg" />,
        },
        {
          title: "Feedback Surveys",
          path: "feedback-surveys",
          isAllowed: isAllowedRoute("feedback-surveys"),
          icon: <VscFeedback className="text-lg" />,
        },
        {
          title: "Follow-Up Scheduling",
          path: "follow-up-scheduling",
          isAllowed: isAllowedRoute("follow-up-scheduling"),
          icon: <LiaUserClockSolid className="text-lg" />,
        },
        {
          title: "Due Finder",
          path: "due-finder",
          isAllowed: isAllowedRoute("due-finder"),
          icon: <LiaSearchDollarSolid className="text-lg" />,
        },
      ],
    },
    {
      title: "Workout Routines",
      icon: <MdFitnessCenter className="text-lg" />,
      list: [
        {
          title: "Routine Library",
          path: "routine-library",
          isAllowed: isAllowedRoute("routine-library"),
          icon: <TbLibrary className="text-lg" />,
        },
        {
          title: "Create Routine",
          path: "create-routine",
          isAllowed: isAllowedRoute("create-routine"),
          icon: <TbLibraryPlus className="text-lg" />,
        },
        {
          title: "Assign Routine",
          path: "assign-routine",
          isAllowed: isAllowedRoute("assign-routine"),
          icon: <TbUserShare className="text-lg" />,
        },
        {
          title: "Track Progress",
          path: "track-progress",
          isAllowed: isAllowedRoute("track-progress"),
          icon: <MdTrackChanges className="text-lg" />,
        },
        {
          title: "Add workout",
          path: "addworkout",
          isAllowed: isAllowedRoute("addworkout"),
          icon: <IoIosAdd className="text-lg" />,
        },
      ],
    },
    {
      title: "Diet Plans",
      icon: <IoFastFoodOutline className="text-lg" />,
      list: [
        {
          title: "Diet Library",
          path: "diet-library",
          isAllowed: isAllowedRoute("diet-library"),
          icon: <MdOutlineLibraryBooks className="text-lg" />,
        },
        {
          title: "Request Diet Plan",
          path: "request-diet-plan",
          isAllowed: isAllowedRoute("request-diet-plan"),
          icon: <HiOutlineUserPlus className="text-lg" />,
        },
        {
          title: "Add Request Diet Plan",
          path: "add-request-diet-plan",
          isAllowed: isAllowedRoute("add-request-diet-plan"),
          icon: <HiOutlineUserPlus className="text-lg" />,
        },
        {
          title: "Assign Diet Plan",
          path: "assign-diet-plan",
          isAllowed: isAllowedRoute("assign-diet-plan"),
          icon: <TbUserShare className="text-lg" />,
        },
        {
          title: "Track Progress",
          path: "track-diet-progress",
          isAllowed: isAllowedRoute("track-diet-progress"),
          icon: <MdBarChart className="text-lg" />,
        },
      ],
    },
    {
      title: "Class Management",
      icon: <MdEventNote className="text-lg" />,
      list: [
        {
          title: "Schedule Classes",
          path: "schedule-classes",
          isAllowed: isAllowedRoute("schedule-classes"),
          icon: <MdSchedule className="text-lg" />,
        },
        {
          title: "Manage Classes",
          path: "manage-classes",
          isAllowed: isAllowedRoute("manage-classes"),
          icon: <MdList className="text-lg" />,
        },
        {
          title: "Class Attendance",
          path: "class-attendance",
          isAllowed: isAllowedRoute("class-attendance"),
          icon: <MdPersonPin className="text-lg" />,
        },
      ],
    },
    {
      title: "Reports and Analytics",
      icon: <MdOutlineAnalytics className="text-lg" />,
      list: [
        {
          title: "Custom Reports",
          path: "custom-reports",
          isAllowed: isAllowedRoute("custom-reports"),
          icon: <MdBarChart className="text-lg" />,
        },
        {
          title: "Member Insights",
          path: "member-insights",
          isAllowed: isAllowedRoute("member-insights"),
          icon: <IoAnalyticsOutline className="text-lg" />,
        },
        {
          title: "Financial Reports",
          path: "financial-reports",
          isAllowed: isAllowedRoute("financial-reports"),
          icon: <MdAttachMoney className="text-lg" />,
        },
      ],
    },
    {
      title: "Door Access Report",
      icon: <MdOutlineDoorBack className="text-lg" />,
      list: [
        {
          title: "History",
          path: "doorhistory",
          isAllowed: isAllowedRoute("doorhistory"),
          icon: <MdHistory className="text-lg" />,
        },
        {
          title: "Daily Report",
          path: "dailydoor",
          isAllowed: isAllowedRoute("dailydoor"),
          icon: <TbReportAnalytics className="text-lg" />,
        },
        {
          title: "Monthly Report",
          path: "monthlydoor",
          isAllowed: isAllowedRoute("monthlydoor"),
          icon: <TbReportAnalytics className="text-lg" />,
        },
        {
          title: "Staff Report",
          path: "doorreport",
          isAllowed: isAllowedRoute("doorreport"),
          icon: <GrDocumentUser className="text-lg" />,
        },
      ],
    },
    {
      title: "SMS Management",
      icon: <TbMessage2Cog className="text-lg" />,
      list: [
        {
          title: "Campaign",
          path: "smscampaign",
          isAllowed: isAllowedRoute("smscampaign"),
          icon: <MdOutlineCampaign className="text-lg" />,
        },
        {
          title: "Logs",
          path: "smslogs",
          isAllowed: isAllowedRoute("smslogs"),
          icon: <GoTerminal className="text-lg" />,
        },
        {
          title: "Send Single SMS",
          path: "sendsinglesms",
          isAllowed: isAllowedRoute("sendsinglesms"),
          icon: <TbMessageDots className="text-lg" />,
        },
        {
          title: "Send Group SMS",
          path: "sendgroupsms",
          isAllowed: isAllowedRoute("sendgroupsms"),
          icon: <MdOutlineGroupAdd className="text-lg" />,
        },
        {
          title: "Templates",
          path: "smstemplates",
          isAllowed: isAllowedRoute("smstemplates"),
          icon: <TbTemplate className="text-lg" />,
        },
        {
          title: "Groups",
          path: "smsgroup",
          isAllowed: isAllowedRoute("smsgroup"),
          icon: <MdOutlineMessage className="text-lg" />,
        },
        {
          title: "SMS SENDER ID",
          path: "senderid",
          isAllowed: isAllowedRoute("senderid"),
          icon: <TbMessageMinus className="text-lg" />,
        },
      ],
    },
    {
      title: "Setup",
      icon: <GoGear className="text-lg" />,
      list: [
        {
          title: "Member Package",
          path: "member-package",
          isAllowed: isAllowedRoute("member-package"),
          icon: <PiUserList className="text-lg" />,
        },
        {
          title: "Staff Role",
          path: "staff-role",
          isAllowed: isAllowedRoute("staff-role"),
          icon: <LiaUsersCogSolid className="text-lg" />,
        },
        {
          title: "Change Password",
          path: "change-password",
          isAllowed: isAllowedRoute("change-password"),
          icon: <RiShieldKeyholeLine className="text-lg" />,
        },
        {
          title: "Company Profile",
          path: "companyprofile",
          isAllowed: isAllowedRoute("companyprofile"),
          icon: <PiBuildingOffice className="text-lg" />,
        },
        {
          title: "User Profile",
          path: "userprofile",
          isAllowed: isAllowedRoute("userprofile"),
          icon: <RiUserLine className="text-lg" />,
        },
        {
          title: "User permission",
          path: "userpermission",
          isAllowed: isAllowedRoute("userpermission"),
          icon: <RiUserForbidLine className="text-lg" />,
        },
      ],
    },
  ];

  // useEffect(() => {
  // }, [groupNames, allMenuItems]);
  const filterMenuData =
    groupNames &&
    groupNames.length > 0 &&
    allMenuItems.filter((item) => groupNames.includes(item.title));

  const filterMenuData2 =
    groupNames &&
    groupNames.length > 0 &&
    filterMenuData.map((item) => {
      const filteredItem = item.list.filter((item2) => {
        return item2.isAllowed === true;
      });
      return {
        title: item.title,
        icon: item.icon,
        list: filteredItem,
      };
    });

  // setFilteredMenuItems(filterMenuData2);

  if (userRole === "admin") {
    return allMenuItems;
  } else {
    console.log("filterMenuData2", filterMenuData2);
    // return filterMenuData2 && filterMenuData2;
    if (filterMenuData2?.length > 0) {
      return filterMenuData2;
    } else {
      return [];
    }
  }
};

export default MenuItems;

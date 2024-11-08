import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/blog/blog-single-image1.jpg";
import Two from "@/public/images/blog/blog-single-sm1.jpg";
import Three from "@/public/images/blog/blog-single-sm2.jpg";
import Four from "@/public/images/blog/comment-image1.png";
import Five from "@/public/images/blog/comment-image2.png";
import Six from "@/public/images/blog/post-sm1.png";
import Seven from "@/public/images/blog/post-sm2.png";
import Eight from "@/public/images/blog/post-sm3.png";

const BlogDetails = () => {
  return (
    <section className="blog-single-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="blog__item blog-single__left-item shadow-none">
              <div className="image">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="blog__content p-0">
                <ul className="pb-3 pt-30 bor-bottom d-flex gap-4 flex-wrap align-items-center">
                  <li>
                    <svg
                      className="me-1"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5441 5.19275C13.5441 7.69093 11.4995 9.7355 9.0013 9.7355C6.50317 9.7355 4.45859 7.69093 4.45859 5.19275C4.45859 2.69457 6.50313 0.65 9.0013 0.65C11.4995 0.65 13.5441 2.69458 13.5441 5.19275Z"
                        stroke="#3C72FC"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M17.2631 14.6707C17.1039 14.9459 16.9228 15.2074 16.7156 15.4768L16.7155 15.4767L16.7076 15.4874C16.419 15.879 16.0832 16.2375 15.7281 16.5925C15.4313 16.8893 15.0919 17.1862 14.7554 17.4386C13.0781 18.6912 11.0608 19.35 8.97684 19.35C6.89705 19.35 4.88376 18.6939 3.20845 17.4462C2.84457 17.1506 2.51237 16.8794 2.22556 16.5925L2.21859 16.5856L2.21141 16.5788C1.85532 16.2437 1.54107 15.8878 1.24614 15.4875L1.24616 15.4875L1.24283 15.483C1.06061 15.2401 0.8719 14.9757 0.717887 14.7171C0.834879 14.456 0.983241 14.1848 1.1439 13.9527L1.14402 13.9528L1.15153 13.9415C2.06854 12.5557 3.53574 11.6389 5.16512 11.4149L5.18469 11.4122L5.20407 11.4083C5.22956 11.4032 5.29364 11.4118 5.34417 11.4497L5.34416 11.4497L5.34817 11.4527C6.4152 12.2402 7.68499 12.6454 8.99949 12.6454C10.314 12.6454 11.5838 12.2402 12.6508 11.4527L12.6508 11.4527L12.6548 11.4497C12.6702 11.4381 12.739 11.4081 12.8479 11.4168C14.4675 11.6437 15.9108 12.5569 16.8511 13.947L16.8511 13.947L16.8551 13.9527C17.0152 14.1841 17.1543 14.4232 17.2631 14.6707Z"
                        stroke="#3C72FC"
                        strokeWidth="1.3"
                      />
                    </svg>
                    <Link href="blog-single">
                      <span className="primary-hover transition">By Admin</span>
                    </Link>
                  </li>
                  <li>
                    <svg
                      className="me-1"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66406 4.79166C6.3224 4.79166 6.03906 4.50833 6.03906 4.16666V1.66666C6.03906 1.325 6.3224 1.04166 6.66406 1.04166C7.00573 1.04166 7.28906 1.325 7.28906 1.66666V4.16666C7.28906 4.50833 7.00573 4.79166 6.66406 4.79166ZM13.3307 4.79166C12.9891 4.79166 12.7057 4.50833 12.7057 4.16666V1.66666C12.7057 1.325 12.9891 1.04166 13.3307 1.04166C13.6724 1.04166 13.9557 1.325 13.9557 1.66666V4.16666C13.9557 4.50833 13.6724 4.79166 13.3307 4.79166ZM7.08073 12.0833C6.9724 12.0833 6.86406 12.0583 6.76406 12.0167C6.65573 11.975 6.5724 11.9167 6.48906 11.8417C6.33906 11.6833 6.2474 11.475 6.2474 11.25C6.2474 11.1417 6.2724 11.0333 6.31406 10.9333C6.35573 10.8333 6.41406 10.7417 6.48906 10.6583C6.5724 10.5833 6.65573 10.525 6.76406 10.4833C7.06406 10.3583 7.43906 10.425 7.6724 10.6583C7.8224 10.8167 7.91406 11.0333 7.91406 11.25C7.91406 11.3 7.90573 11.3583 7.8974 11.4167C7.88906 11.4667 7.8724 11.5167 7.8474 11.5667C7.83073 11.6167 7.80573 11.6667 7.7724 11.7167C7.7474 11.7583 7.70573 11.8 7.6724 11.8417C7.51406 11.9917 7.2974 12.0833 7.08073 12.0833ZM9.9974 12.0833C9.88906 12.0833 9.78073 12.0583 9.68073 12.0167C9.5724 11.975 9.48906 11.9167 9.40573 11.8417C9.25573 11.6833 9.16406 11.475 9.16406 11.25C9.16406 11.1417 9.18906 11.0333 9.23073 10.9333C9.2724 10.8333 9.33073 10.7417 9.40573 10.6583C9.48906 10.5833 9.5724 10.525 9.68073 10.4833C9.98073 10.35 10.3557 10.425 10.5891 10.6583C10.7391 10.8167 10.8307 11.0333 10.8307 11.25C10.8307 11.3 10.8224 11.3583 10.8141 11.4167C10.8057 11.4667 10.7891 11.5167 10.7641 11.5667C10.7474 11.6167 10.7224 11.6667 10.6891 11.7167C10.6641 11.7583 10.6224 11.8 10.5891 11.8417C10.4307 11.9917 10.2141 12.0833 9.9974 12.0833ZM12.9141 12.0833C12.8057 12.0833 12.6974 12.0583 12.5974 12.0167C12.4891 11.975 12.4057 11.9167 12.3224 11.8417L12.2224 11.7167C12.1908 11.6702 12.1656 11.6198 12.1474 11.5667C12.1233 11.5194 12.1065 11.4689 12.0974 11.4167C12.0891 11.3583 12.0807 11.3 12.0807 11.25C12.0807 11.0333 12.1724 10.8167 12.3224 10.6583C12.4057 10.5833 12.4891 10.525 12.5974 10.4833C12.9057 10.35 13.2724 10.425 13.5057 10.6583C13.6557 10.8167 13.7474 11.0333 13.7474 11.25C13.7474 11.3 13.7391 11.3583 13.7307 11.4167C13.7224 11.4667 13.7057 11.5167 13.6807 11.5667C13.6641 11.6167 13.6391 11.6667 13.6057 11.7167C13.5807 11.7583 13.5391 11.8 13.5057 11.8417C13.3474 11.9917 13.1307 12.0833 12.9141 12.0833ZM7.08073 15C6.9724 15 6.86406 14.975 6.76406 14.9333C6.66406 14.8917 6.5724 14.8333 6.48906 14.7583C6.33906 14.6 6.2474 14.3833 6.2474 14.1667C6.2474 14.0583 6.2724 13.95 6.31406 13.85C6.35573 13.7417 6.41406 13.65 6.48906 13.575C6.7974 13.2667 7.36406 13.2667 7.6724 13.575C7.8224 13.7333 7.91406 13.95 7.91406 14.1667C7.91406 14.3833 7.8224 14.6 7.6724 14.7583C7.51406 14.9083 7.2974 15 7.08073 15ZM9.9974 15C9.78073 15 9.56406 14.9083 9.40573 14.7583C9.25573 14.6 9.16406 14.3833 9.16406 14.1667C9.16406 14.0583 9.18906 13.95 9.23073 13.85C9.2724 13.7417 9.33073 13.65 9.40573 13.575C9.71406 13.2667 10.2807 13.2667 10.5891 13.575C10.6641 13.65 10.7224 13.7417 10.7641 13.85C10.8057 13.95 10.8307 14.0583 10.8307 14.1667C10.8307 14.3833 10.7391 14.6 10.5891 14.7583C10.4307 14.9083 10.2141 15 9.9974 15ZM12.9141 15C12.6974 15 12.4807 14.9083 12.3224 14.7583C12.2453 14.6801 12.1856 14.5863 12.1474 14.4833C12.1057 14.3833 12.0807 14.275 12.0807 14.1667C12.0807 14.0583 12.1057 13.95 12.1474 13.85C12.1891 13.7417 12.2474 13.65 12.3224 13.575C12.5141 13.3833 12.8057 13.2917 13.0724 13.35C13.1307 13.3583 13.1807 13.375 13.2307 13.4C13.2807 13.4167 13.3307 13.4417 13.3807 13.475C13.4224 13.5 13.4641 13.5417 13.5057 13.575C13.6557 13.7333 13.7474 13.95 13.7474 14.1667C13.7474 14.3833 13.6557 14.6 13.5057 14.7583C13.3474 14.9083 13.1307 15 12.9141 15ZM17.0807 8.2H2.91406C2.5724 8.2 2.28906 7.91666 2.28906 7.575C2.28906 7.23333 2.5724 6.95 2.91406 6.95H17.0807C17.4224 6.95 17.7057 7.23333 17.7057 7.575C17.7057 7.91666 17.4224 8.2 17.0807 8.2Z"
                        fill="#3C72FC"
                      />
                      <path
                        d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1667V7.08333C1.875 4.04166 3.625 2.29166 6.66667 2.29166H13.3333C16.375 2.29166 18.125 4.04166 18.125 7.08333V14.1667C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54166C4.28333 3.54166 3.125 4.7 3.125 7.08333V14.1667C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1667V7.08333C16.875 4.7 15.7167 3.54166 13.3333 3.54166H6.66667Z"
                        fill="#3C72FC"
                      />
                    </svg>
                    <span>22, Nov 2023</span>
                  </li>
                  <li>
                    <svg
                      className="me-1"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1079_2223)">
                        <path
                          d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
                          fill="#3C72FC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1079_2223">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Link href="blog-single">
                      <span className="primary-hover transition">
                        Technology
                      </span>
                    </Link>
                  </li>
                </ul>
                <h3 className="blog-single__title mt-20">
                  Tackling the Changes of Retail Industry
                </h3>
                <p className="mb-20 mt-20">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                  dolor in reprehenderit.
                </p>
                <p className="mb-20">
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                  eleifend porta arcu In hac habitasse the is platea augue
                  thelorem turpoi dictumst. In lacus libero faucibus at
                  malesuada sagittis placerat eros sed istincidunt augue ac ante
                  rutrum sed the is sodales augue consequat.
                </p>
                <p className="mb-20">
                  Nulla facilisi. Vestibulum tristique sem in eros eleifend
                  imperdiet. Donec quis convallis neque. In id lacus pulvinar
                  lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
                  tempus nibh mattis in. Sed a massa eget lacus consequat
                  auctor.
                </p>
                <div className="row">
                  <div className="col-6">
                    <div className="image">
                      <Image src={Two} alt="Image" priority />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="image">
                      <Image src={Three} alt="Image" priority />
                    </div>
                  </div>
                </div>
                <p className="mt-20">
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                  eleifend porta arcu In hac habitasse the is platea augue
                  thelorem turpoi dictumst. In lacus libero faucibus at
                  malesuada sagittis placerat eros sed istincidunt augue ac ante
                  rutrum sed the is sodales augue consequat.
                </p>
                <div className="hilight-text mt-40 mb-30 sub-bg">
                  <p>
                    Pellentesque sollicitudin congue dolor non aliquam. Morbi
                    volutpat, nisi vel ultricies urnacondimentum, sapien neque
                    lobortis tortor, quis efficitur mi ipsum eu metus. Praesent
                    eleifend orci sit amet est vehicula.
                  </p>
                  <svg
                    width="36"
                    height="26"
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15.3698H7.71428L2.57139 25.5546H10.2857L15.4286 15.3698V0.0924683H0V15.3698Z"
                      fill="#3C72FC"
                    />
                    <path
                      d="M20.5703 0.0924683V15.3698H28.2846L23.1417 25.5546H30.856L35.9989 15.3698V0.0924683H20.5703Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                  dolor in reprehenderit.
                </p>
                <div className="tags-share mt-40">
                  <div className="tags">
                    <strong>Tags:</strong>
                    <Link href="/">business</Link>
                    <Link href="/">marketing</Link>
                    <Link href="/">services</Link>
                  </div>
                  <div className="share">
                    <strong>Share:</strong>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link className="active" href="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-single__review mt-60">
              <h3>02 Reviews, for Tiles</h3>
              <div className="blog-single__comment d-flex gap-4 mt-60 pb-60 bor-bottom">
                <div className="image">
                  <Image src={Four} alt="Image" priority />
                </div>
                <div className="content">
                  <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="con">
                      <h5>
                        <Link href="/" className="primary-hover">
                          Ralph Edwards
                        </Link>
                      </h5>
                      <span>March 20, 2023 at 2:37 pm</span>
                    </div>
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="mt-30 mb-4">
                    Neque porro est qui dolorem ipsum quia quaed inventor
                    veritatis et quasi architecto var sed efficitur turpis gilla
                    sed sit amet finibus eros. Lorem Ipsum is simply dummy
                  </p>
                  <Link href="/" className="sub-bg primary-color reply">
                    Reply
                  </Link>
                </div>
              </div>
              <div className="blog-single__comment d-flex gap-4 mt-60 pb-60 bor-bottom">
                <div className="image">
                  <Image src={Five} alt="Image" priority />
                </div>
                <div className="content">
                  <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="con">
                      <h5>
                        <Link href="/" className="primary-hover">
                          Albert Flores
                        </Link>
                      </h5>
                      <span>March 20, 2023 at 2:37 pm</span>
                    </div>
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="mt-30 mb-4">
                    Neque porro est qui dolorem ipsum quia quaed inventor
                    veritatis et quasi architecto var sed efficitur turpis gilla
                    sed sit amet finibus eros. Lorem Ipsum is simply dummy
                  </p>
                  <Link href="/" className="sub-bg primary-color reply">
                    Reply
                  </Link>
                </div>
              </div>
              <div className="contact__form mt-60">
                <h3 className="fw-700 mb-40">Leave a Comment</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="name">Your Name*</label>
                      <input
                        id="name"
                        className="bg-transparent bor"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="email">Your Email*</label>
                      <input
                        className="bg-transparent bor"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="text-area">
                    <label htmlFor="massage">Write Message*</label>
                    <textarea
                      className="bg-transparent bor"
                      id="massage"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div className="btn-two">
                    <span className="btn-circle"></span>
                    <Link href="/" className="btn-one">
                      Post Comment{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="blog-single__right-item">
              <div className="item sub-bg mb-30">
                <h5 className="title">Search</h5>
                <div className="serach-bar">
                  <input type="text" placeholder="Search here" />
                  <button>
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div className="item sub-bg mb-30">
                <h5 className="title">Category</h5>
                <ul className="category">
                  <li>
                    <Link href="/">Database Security</Link> <span>(02)</span>
                  </li>
                  <li>
                    <Link href="/">IT Consultancy</Link> <span>(05)</span>
                  </li>
                  <li>
                    <Link href="/">App Development</Link> <span>(07)</span>
                  </li>
                  <li>
                    <Link href="/">UI/UX Design</Link> <span>(18)</span>
                  </li>
                  <li>
                    <Link href="/">App Development</Link> <span>(08)</span>
                  </li>
                </ul>
              </div>
              <div className="item sub-bg mb-30">
                <h5 className="title">Resent Post</h5>
                <ul className="single-post">
                  <li>
                    <Image src={Six} alt="Image" priority />
                    <div className="con">
                      <span>
                        <svg
                          className="me-1"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66797 4.79166C6.3263 4.79166 6.04297 4.50832 6.04297 4.16666V1.66666C6.04297 1.32499 6.3263 1.04166 6.66797 1.04166C7.00964 1.04166 7.29297 1.32499 7.29297 1.66666V4.16666C7.29297 4.50832 7.00964 4.79166 6.66797 4.79166ZM13.3346 4.79166C12.993 4.79166 12.7096 4.50832 12.7096 4.16666V1.66666C12.7096 1.32499 12.993 1.04166 13.3346 1.04166C13.6763 1.04166 13.9596 1.32499 13.9596 1.66666V4.16666C13.9596 4.50832 13.6763 4.79166 13.3346 4.79166ZM7.08464 12.0833C6.9763 12.0833 6.86797 12.0583 6.76797 12.0167C6.65964 11.975 6.5763 11.9167 6.49297 11.8417C6.34297 11.6833 6.2513 11.475 6.2513 11.25C6.2513 11.1417 6.2763 11.0333 6.31797 10.9333C6.35964 10.8333 6.41797 10.7417 6.49297 10.6583C6.5763 10.5833 6.65964 10.525 6.76797 10.4833C7.06797 10.3583 7.44297 10.425 7.6763 10.6583C7.8263 10.8167 7.91797 11.0333 7.91797 11.25C7.91797 11.3 7.90964 11.3583 7.9013 11.4167C7.89297 11.4667 7.8763 11.5167 7.8513 11.5667C7.83464 11.6167 7.80964 11.6667 7.7763 11.7167C7.7513 11.7583 7.70964 11.8 7.6763 11.8417C7.51797 11.9917 7.3013 12.0833 7.08464 12.0833ZM10.0013 12.0833C9.89297 12.0833 9.78464 12.0583 9.68464 12.0167C9.5763 11.975 9.49297 11.9167 9.40964 11.8417C9.25964 11.6833 9.16797 11.475 9.16797 11.25C9.16797 11.1417 9.19297 11.0333 9.23464 10.9333C9.2763 10.8333 9.33464 10.7417 9.40964 10.6583C9.49297 10.5833 9.5763 10.525 9.68464 10.4833C9.98464 10.35 10.3596 10.425 10.593 10.6583C10.743 10.8167 10.8346 11.0333 10.8346 11.25C10.8346 11.3 10.8263 11.3583 10.818 11.4167C10.8096 11.4667 10.793 11.5167 10.768 11.5667C10.7513 11.6167 10.7263 11.6667 10.693 11.7167C10.668 11.7583 10.6263 11.8 10.593 11.8417C10.4346 11.9917 10.218 12.0833 10.0013 12.0833ZM12.918 12.0833C12.8096 12.0833 12.7013 12.0583 12.6013 12.0167C12.493 11.975 12.4096 11.9167 12.3263 11.8417L12.2263 11.7167C12.1947 11.6702 12.1695 11.6198 12.1513 11.5667C12.1272 11.5194 12.1104 11.4689 12.1013 11.4167C12.093 11.3583 12.0846 11.3 12.0846 11.25C12.0846 11.0333 12.1763 10.8167 12.3263 10.6583C12.4096 10.5833 12.493 10.525 12.6013 10.4833C12.9096 10.35 13.2763 10.425 13.5096 10.6583C13.6596 10.8167 13.7513 11.0333 13.7513 11.25C13.7513 11.3 13.743 11.3583 13.7346 11.4167C13.7263 11.4667 13.7096 11.5167 13.6846 11.5667C13.668 11.6167 13.643 11.6667 13.6096 11.7167C13.5846 11.7583 13.543 11.8 13.5096 11.8417C13.3513 11.9917 13.1346 12.0833 12.918 12.0833ZM7.08464 15C6.9763 15 6.86797 14.975 6.76797 14.9333C6.66797 14.8917 6.5763 14.8333 6.49297 14.7583C6.34297 14.6 6.2513 14.3833 6.2513 14.1667C6.2513 14.0583 6.2763 13.95 6.31797 13.85C6.35964 13.7417 6.41797 13.65 6.49297 13.575C6.8013 13.2667 7.36797 13.2667 7.6763 13.575C7.8263 13.7333 7.91797 13.95 7.91797 14.1667C7.91797 14.3833 7.8263 14.6 7.6763 14.7583C7.51797 14.9083 7.3013 15 7.08464 15ZM10.0013 15C9.78464 15 9.56797 14.9083 9.40964 14.7583C9.25964 14.6 9.16797 14.3833 9.16797 14.1667C9.16797 14.0583 9.19297 13.95 9.23464 13.85C9.2763 13.7417 9.33464 13.65 9.40964 13.575C9.71797 13.2667 10.2846 13.2667 10.593 13.575C10.668 13.65 10.7263 13.7417 10.768 13.85C10.8096 13.95 10.8346 14.0583 10.8346 14.1667C10.8346 14.3833 10.743 14.6 10.593 14.7583C10.4346 14.9083 10.218 15 10.0013 15ZM12.918 15C12.7013 15 12.4846 14.9083 12.3263 14.7583C12.2492 14.6801 12.1895 14.5863 12.1513 14.4833C12.1096 14.3833 12.0846 14.275 12.0846 14.1667C12.0846 14.0583 12.1096 13.95 12.1513 13.85C12.193 13.7417 12.2513 13.65 12.3263 13.575C12.518 13.3833 12.8096 13.2917 13.0763 13.35C13.1346 13.3583 13.1846 13.375 13.2346 13.4C13.2846 13.4167 13.3346 13.4417 13.3846 13.475C13.4263 13.5 13.468 13.5417 13.5096 13.575C13.6596 13.7333 13.7513 13.95 13.7513 14.1667C13.7513 14.3833 13.6596 14.6 13.5096 14.7583C13.3513 14.9083 13.1346 15 12.918 15ZM17.0846 8.19999H2.91797C2.5763 8.19999 2.29297 7.91666 2.29297 7.57499C2.29297 7.23332 2.5763 6.94999 2.91797 6.94999H17.0846C17.4263 6.94999 17.7096 7.23332 17.7096 7.57499C17.7096 7.91666 17.4263 8.19999 17.0846 8.19999Z"
                            fill="#3C72FC"
                          />
                          <path
                            d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1667V7.08332C1.875 4.04166 3.625 2.29166 6.66667 2.29166H13.3333C16.375 2.29166 18.125 4.04166 18.125 7.08332V14.1667C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54166C4.28333 3.54166 3.125 4.69999 3.125 7.08332V14.1667C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1667V7.08332C16.875 4.69999 15.7167 3.54166 13.3333 3.54166H6.66667Z"
                            fill="#3C72FC"
                          />
                        </svg>
                        20 Nov, 2023
                      </span>
                      <h5 className="mt-2">
                        <Link href="blog-single" className="primary-hover">
                          Keep Your Business Safe & Endure High Availability
                        </Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <Image src={Seven} alt="Image" priority />
                    <div className="con">
                      <span>
                        <svg
                          className="me-1"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66797 4.79166C6.3263 4.79166 6.04297 4.50832 6.04297 4.16666V1.66666C6.04297 1.32499 6.3263 1.04166 6.66797 1.04166C7.00964 1.04166 7.29297 1.32499 7.29297 1.66666V4.16666C7.29297 4.50832 7.00964 4.79166 6.66797 4.79166ZM13.3346 4.79166C12.993 4.79166 12.7096 4.50832 12.7096 4.16666V1.66666C12.7096 1.32499 12.993 1.04166 13.3346 1.04166C13.6763 1.04166 13.9596 1.32499 13.9596 1.66666V4.16666C13.9596 4.50832 13.6763 4.79166 13.3346 4.79166ZM7.08464 12.0833C6.9763 12.0833 6.86797 12.0583 6.76797 12.0167C6.65964 11.975 6.5763 11.9167 6.49297 11.8417C6.34297 11.6833 6.2513 11.475 6.2513 11.25C6.2513 11.1417 6.2763 11.0333 6.31797 10.9333C6.35964 10.8333 6.41797 10.7417 6.49297 10.6583C6.5763 10.5833 6.65964 10.525 6.76797 10.4833C7.06797 10.3583 7.44297 10.425 7.6763 10.6583C7.8263 10.8167 7.91797 11.0333 7.91797 11.25C7.91797 11.3 7.90964 11.3583 7.9013 11.4167C7.89297 11.4667 7.8763 11.5167 7.8513 11.5667C7.83464 11.6167 7.80964 11.6667 7.7763 11.7167C7.7513 11.7583 7.70964 11.8 7.6763 11.8417C7.51797 11.9917 7.3013 12.0833 7.08464 12.0833ZM10.0013 12.0833C9.89297 12.0833 9.78464 12.0583 9.68464 12.0167C9.5763 11.975 9.49297 11.9167 9.40964 11.8417C9.25964 11.6833 9.16797 11.475 9.16797 11.25C9.16797 11.1417 9.19297 11.0333 9.23464 10.9333C9.2763 10.8333 9.33464 10.7417 9.40964 10.6583C9.49297 10.5833 9.5763 10.525 9.68464 10.4833C9.98464 10.35 10.3596 10.425 10.593 10.6583C10.743 10.8167 10.8346 11.0333 10.8346 11.25C10.8346 11.3 10.8263 11.3583 10.818 11.4167C10.8096 11.4667 10.793 11.5167 10.768 11.5667C10.7513 11.6167 10.7263 11.6667 10.693 11.7167C10.668 11.7583 10.6263 11.8 10.593 11.8417C10.4346 11.9917 10.218 12.0833 10.0013 12.0833ZM12.918 12.0833C12.8096 12.0833 12.7013 12.0583 12.6013 12.0167C12.493 11.975 12.4096 11.9167 12.3263 11.8417L12.2263 11.7167C12.1947 11.6702 12.1695 11.6198 12.1513 11.5667C12.1272 11.5194 12.1104 11.4689 12.1013 11.4167C12.093 11.3583 12.0846 11.3 12.0846 11.25C12.0846 11.0333 12.1763 10.8167 12.3263 10.6583C12.4096 10.5833 12.493 10.525 12.6013 10.4833C12.9096 10.35 13.2763 10.425 13.5096 10.6583C13.6596 10.8167 13.7513 11.0333 13.7513 11.25C13.7513 11.3 13.743 11.3583 13.7346 11.4167C13.7263 11.4667 13.7096 11.5167 13.6846 11.5667C13.668 11.6167 13.643 11.6667 13.6096 11.7167C13.5846 11.7583 13.543 11.8 13.5096 11.8417C13.3513 11.9917 13.1346 12.0833 12.918 12.0833ZM7.08464 15C6.9763 15 6.86797 14.975 6.76797 14.9333C6.66797 14.8917 6.5763 14.8333 6.49297 14.7583C6.34297 14.6 6.2513 14.3833 6.2513 14.1667C6.2513 14.0583 6.2763 13.95 6.31797 13.85C6.35964 13.7417 6.41797 13.65 6.49297 13.575C6.8013 13.2667 7.36797 13.2667 7.6763 13.575C7.8263 13.7333 7.91797 13.95 7.91797 14.1667C7.91797 14.3833 7.8263 14.6 7.6763 14.7583C7.51797 14.9083 7.3013 15 7.08464 15ZM10.0013 15C9.78464 15 9.56797 14.9083 9.40964 14.7583C9.25964 14.6 9.16797 14.3833 9.16797 14.1667C9.16797 14.0583 9.19297 13.95 9.23464 13.85C9.2763 13.7417 9.33464 13.65 9.40964 13.575C9.71797 13.2667 10.2846 13.2667 10.593 13.575C10.668 13.65 10.7263 13.7417 10.768 13.85C10.8096 13.95 10.8346 14.0583 10.8346 14.1667C10.8346 14.3833 10.743 14.6 10.593 14.7583C10.4346 14.9083 10.218 15 10.0013 15ZM12.918 15C12.7013 15 12.4846 14.9083 12.3263 14.7583C12.2492 14.6801 12.1895 14.5863 12.1513 14.4833C12.1096 14.3833 12.0846 14.275 12.0846 14.1667C12.0846 14.0583 12.1096 13.95 12.1513 13.85C12.193 13.7417 12.2513 13.65 12.3263 13.575C12.518 13.3833 12.8096 13.2917 13.0763 13.35C13.1346 13.3583 13.1846 13.375 13.2346 13.4C13.2846 13.4167 13.3346 13.4417 13.3846 13.475C13.4263 13.5 13.468 13.5417 13.5096 13.575C13.6596 13.7333 13.7513 13.95 13.7513 14.1667C13.7513 14.3833 13.6596 14.6 13.5096 14.7583C13.3513 14.9083 13.1346 15 12.918 15ZM17.0846 8.19999H2.91797C2.5763 8.19999 2.29297 7.91666 2.29297 7.57499C2.29297 7.23332 2.5763 6.94999 2.91797 6.94999H17.0846C17.4263 6.94999 17.7096 7.23332 17.7096 7.57499C17.7096 7.91666 17.4263 8.19999 17.0846 8.19999Z"
                            fill="#3C72FC"
                          />
                          <path
                            d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1667V7.08332C1.875 4.04166 3.625 2.29166 6.66667 2.29166H13.3333C16.375 2.29166 18.125 4.04166 18.125 7.08332V14.1667C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54166C4.28333 3.54166 3.125 4.69999 3.125 7.08332V14.1667C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1667V7.08332C16.875 4.69999 15.7167 3.54166 13.3333 3.54166H6.66667Z"
                            fill="#3C72FC"
                          />
                        </svg>
                        22 Nov, 2023
                      </span>
                      <h5 className="mt-2">
                        <Link href="blog-single" className="primary-hover">
                          Tacking the Changes of <br />
                          Retail Industry
                        </Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <Image src={Eight} alt="Image" priority />
                    <div className="con">
                      <span>
                        <svg
                          className="me-1"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66797 4.79166C6.3263 4.79166 6.04297 4.50832 6.04297 4.16666V1.66666C6.04297 1.32499 6.3263 1.04166 6.66797 1.04166C7.00964 1.04166 7.29297 1.32499 7.29297 1.66666V4.16666C7.29297 4.50832 7.00964 4.79166 6.66797 4.79166ZM13.3346 4.79166C12.993 4.79166 12.7096 4.50832 12.7096 4.16666V1.66666C12.7096 1.32499 12.993 1.04166 13.3346 1.04166C13.6763 1.04166 13.9596 1.32499 13.9596 1.66666V4.16666C13.9596 4.50832 13.6763 4.79166 13.3346 4.79166ZM7.08464 12.0833C6.9763 12.0833 6.86797 12.0583 6.76797 12.0167C6.65964 11.975 6.5763 11.9167 6.49297 11.8417C6.34297 11.6833 6.2513 11.475 6.2513 11.25C6.2513 11.1417 6.2763 11.0333 6.31797 10.9333C6.35964 10.8333 6.41797 10.7417 6.49297 10.6583C6.5763 10.5833 6.65964 10.525 6.76797 10.4833C7.06797 10.3583 7.44297 10.425 7.6763 10.6583C7.8263 10.8167 7.91797 11.0333 7.91797 11.25C7.91797 11.3 7.90964 11.3583 7.9013 11.4167C7.89297 11.4667 7.8763 11.5167 7.8513 11.5667C7.83464 11.6167 7.80964 11.6667 7.7763 11.7167C7.7513 11.7583 7.70964 11.8 7.6763 11.8417C7.51797 11.9917 7.3013 12.0833 7.08464 12.0833ZM10.0013 12.0833C9.89297 12.0833 9.78464 12.0583 9.68464 12.0167C9.5763 11.975 9.49297 11.9167 9.40964 11.8417C9.25964 11.6833 9.16797 11.475 9.16797 11.25C9.16797 11.1417 9.19297 11.0333 9.23464 10.9333C9.2763 10.8333 9.33464 10.7417 9.40964 10.6583C9.49297 10.5833 9.5763 10.525 9.68464 10.4833C9.98464 10.35 10.3596 10.425 10.593 10.6583C10.743 10.8167 10.8346 11.0333 10.8346 11.25C10.8346 11.3 10.8263 11.3583 10.818 11.4167C10.8096 11.4667 10.793 11.5167 10.768 11.5667C10.7513 11.6167 10.7263 11.6667 10.693 11.7167C10.668 11.7583 10.6263 11.8 10.593 11.8417C10.4346 11.9917 10.218 12.0833 10.0013 12.0833ZM12.918 12.0833C12.8096 12.0833 12.7013 12.0583 12.6013 12.0167C12.493 11.975 12.4096 11.9167 12.3263 11.8417L12.2263 11.7167C12.1947 11.6702 12.1695 11.6198 12.1513 11.5667C12.1272 11.5194 12.1104 11.4689 12.1013 11.4167C12.093 11.3583 12.0846 11.3 12.0846 11.25C12.0846 11.0333 12.1763 10.8167 12.3263 10.6583C12.4096 10.5833 12.493 10.525 12.6013 10.4833C12.9096 10.35 13.2763 10.425 13.5096 10.6583C13.6596 10.8167 13.7513 11.0333 13.7513 11.25C13.7513 11.3 13.743 11.3583 13.7346 11.4167C13.7263 11.4667 13.7096 11.5167 13.6846 11.5667C13.668 11.6167 13.643 11.6667 13.6096 11.7167C13.5846 11.7583 13.543 11.8 13.5096 11.8417C13.3513 11.9917 13.1346 12.0833 12.918 12.0833ZM7.08464 15C6.9763 15 6.86797 14.975 6.76797 14.9333C6.66797 14.8917 6.5763 14.8333 6.49297 14.7583C6.34297 14.6 6.2513 14.3833 6.2513 14.1667C6.2513 14.0583 6.2763 13.95 6.31797 13.85C6.35964 13.7417 6.41797 13.65 6.49297 13.575C6.8013 13.2667 7.36797 13.2667 7.6763 13.575C7.8263 13.7333 7.91797 13.95 7.91797 14.1667C7.91797 14.3833 7.8263 14.6 7.6763 14.7583C7.51797 14.9083 7.3013 15 7.08464 15ZM10.0013 15C9.78464 15 9.56797 14.9083 9.40964 14.7583C9.25964 14.6 9.16797 14.3833 9.16797 14.1667C9.16797 14.0583 9.19297 13.95 9.23464 13.85C9.2763 13.7417 9.33464 13.65 9.40964 13.575C9.71797 13.2667 10.2846 13.2667 10.593 13.575C10.668 13.65 10.7263 13.7417 10.768 13.85C10.8096 13.95 10.8346 14.0583 10.8346 14.1667C10.8346 14.3833 10.743 14.6 10.593 14.7583C10.4346 14.9083 10.218 15 10.0013 15ZM12.918 15C12.7013 15 12.4846 14.9083 12.3263 14.7583C12.2492 14.6801 12.1895 14.5863 12.1513 14.4833C12.1096 14.3833 12.0846 14.275 12.0846 14.1667C12.0846 14.0583 12.1096 13.95 12.1513 13.85C12.193 13.7417 12.2513 13.65 12.3263 13.575C12.518 13.3833 12.8096 13.2917 13.0763 13.35C13.1346 13.3583 13.1846 13.375 13.2346 13.4C13.2846 13.4167 13.3346 13.4417 13.3846 13.475C13.4263 13.5 13.468 13.5417 13.5096 13.575C13.6596 13.7333 13.7513 13.95 13.7513 14.1667C13.7513 14.3833 13.6596 14.6 13.5096 14.7583C13.3513 14.9083 13.1346 15 12.918 15ZM17.0846 8.19999H2.91797C2.5763 8.19999 2.29297 7.91666 2.29297 7.57499C2.29297 7.23332 2.5763 6.94999 2.91797 6.94999H17.0846C17.4263 6.94999 17.7096 7.23332 17.7096 7.57499C17.7096 7.91666 17.4263 8.19999 17.0846 8.19999Z"
                            fill="#3C72FC"
                          />
                          <path
                            d="M13.3333 18.9583H6.66667C3.625 18.9583 1.875 17.2083 1.875 14.1667V7.08332C1.875 4.04166 3.625 2.29166 6.66667 2.29166H13.3333C16.375 2.29166 18.125 4.04166 18.125 7.08332V14.1667C18.125 17.2083 16.375 18.9583 13.3333 18.9583ZM6.66667 3.54166C4.28333 3.54166 3.125 4.69999 3.125 7.08332V14.1667C3.125 16.55 4.28333 17.7083 6.66667 17.7083H13.3333C15.7167 17.7083 16.875 16.55 16.875 14.1667V7.08332C16.875 4.69999 15.7167 3.54166 13.3333 3.54166H6.66667Z"
                            fill="#3C72FC"
                          />
                        </svg>
                        25 Nov, 2023
                      </span>
                      <h5 className="mt-2">
                        <Link href="blog-single" className="primary-hover">
                          What&apos;s the Holding Back the It Solution
                        </Link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="item sub-bg">
                <h5 className="title">Tags</h5>
                <div className="tags">
                  <Link href="/">business</Link>
                  <Link href="/">marketing</Link>
                  <Link href="/">solution</Link>
                  <Link href="/">SMM</Link>
                  <Link href="/">startup</Link>
                  <Link href="/">strategy</Link>
                  <Link href="/">SEO</Link>
                  <Link href="/">services</Link>
                  <Link href="/">top</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
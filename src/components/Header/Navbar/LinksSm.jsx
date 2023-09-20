function LinksSm({ toggle }) {
  return (
    <div
      className={
        toggle
          ? "container mx-auto absolute left-[0] top-[5.75rem] z-10 md:hidden w-full px-4 rounded-xl  bg-white "
          : "hidden"
      }
    >
      <ul className="text-third">
        <li className="text-secondary py-2 ">
          <a>Home</a>
        </li>
        <li className="py-2 ">
          <a>About</a>
        </li>
        <li className="py-2">
          <a>Services</a>
        </li>
        <li className="py-2 ">
          <a>Reviews</a>
        </li>
        <li className="py-2 ">
          <a>Support</a>
        </li>
      </ul>
      <div className="flex flex-col my-4  gap-4 justify-center items-center">
        <p className="border border-gray-200 w-full text-center rounded-md p-3 shadow-inner font-medium">
          <a>Sign In</a>
        </p>
        <button className="bg-primary w-full text-white h-[3.4375rem] px-[1.875rem] rounded-md ">
          Free Trial
        </button>
      </div>
    </div>
  );
}

export default LinksSm;

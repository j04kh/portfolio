const ArrowDown = () => {
  return (
    <div className="w-full h-6 absolute bottom-5 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default ArrowDown;

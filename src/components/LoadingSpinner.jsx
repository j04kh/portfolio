const LoadingSpinner = () => {
  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-center">
      <svg
        className="animate-spin -ml-1 mr-3 mb-1 h-8 w-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <h1 className="text-white text-sm">Loading...</h1>
    </div>
  );
};

export default LoadingSpinner;
const LoadingSpinner = () => {
    return (
        <span role="status" className="p-2">
            <span className="sr-only">Loading...</span>
            <div
                className=" w-5 h-5 border-2 border-light border-t-transparent rounded-full animate-spin"
                aria-label="Loading"
            />
        </span>
    );
};

export default LoadingSpinner;

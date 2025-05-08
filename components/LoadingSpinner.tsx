const LoadingSpinner = () => {
    return (
        <span role="status">
            <span className="sr-only">Loading...</span>
            <span
                className="p-2 inline-block animate-spin text-light"
                aria-hidden="true"
            >
                ⟳
            </span>
        </span>
    );
};

export default LoadingSpinner;

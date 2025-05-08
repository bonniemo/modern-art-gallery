const borderColors: Record<string, string> = {
    light: "border-light",
    accent: "border-accent",
    dark: "border-dark",
};

const LoadingSpinner = ({ color }: { color: string }) => {
    const borderColor = borderColors[color] || "border-light";

    return (
        <span role="status" className="px-2">
            <span className="sr-only">Loading...</span>
            <div
                className={`w-5 h-5 border-2 ${borderColor} border-t-transparent rounded-full animate-spin`}
                aria-label="Loading"
            />
        </span>
    );
};

export default LoadingSpinner;

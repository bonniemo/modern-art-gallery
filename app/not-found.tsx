import Image from "next/image";
import Link from "next/link";
import brokenHeart from "../public/not-found/marek-studzinski-sL4I_UYrtGo-unsplash.jpg";

const notFound = () => {
    return (
        <section className="bg-[#040404] h-screen overflow-hidden grid grid-cols-6 grid-rows-6 content-center">
            <div className="min-w-[220px] h-screen md:col-start-2 md:col-end-7 md:row-start-2 md:row-end-6">
                <Image
                    src={brokenHeart}
                    alt="artwork, black background broken heart sculpture"
                    width={800}
                    height={600}
                    className="md:w-[25rem] max-h-[24rem] h-auto self-center"
                    priority
                />
            </div>
            <div className="md:col-start-3 lg:col-start-2 md:col-end-7 lg:col-end-6 md:row-start-3 md:row-end-7 h-full justify-self-center">
                <div className=" bg-[#040404]/70 px-4 py-2 md:px-6 md:py-4 bg-opacity-30 rounded-lg h-min w-max ">
                    <h1 className=" text-gray-200 drop-shadow-2xl text-header-s leading-s md:text-header-m md:leading-m lg:text-header-l lg:text-leading-l uppercase">
                        404 | Not Found
                    </h1>
                    <p className="md:text-p-s md:leading-body-s text-p-s leading-body-s text-gray-200 mt-4">
                        Please adjust the adress and try again
                    </p>
                </div>
                <button className="text-p-s leading-body-s text-gray-200 rounded-lg px-4 py-2 mt-6 bg-[#040404]/70 font-big-shoulders shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:font-bold">
                    <Link href="/">Go back to Home</Link>
                </button>
            </div>
        </section>
    );
};

export default notFound;

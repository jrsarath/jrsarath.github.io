'use client';
import { NextPage} from "next";

const Home: NextPage = () => {
    return (
        <div className="w-full h-full flex cursor-crosshair justify-center items-center align-center bg-[#f9f9f9] dark:bg-[#212121] select-none">
            <div className="relative flex justify-center items-center content-center">
                <h1
                    className="
                        absolute z-[3] text-[#212121] dark:text-[#ffffff] leading-[5rem]
                        lg:text-[5rem] lg:mt-[-70px]
                        md:text-[4rem] md:mt-[-45px]
                        sm:text-[3rem] sm:mt-[-30px]
                        xs:text-[2.5rem] xs:mt-[-25px]
                        text-[2rem] mt-[-20px]
                    "
                >
                    Sarath Singh
                </h1>
                <h1
                    className="
                        font-kumarOne opacity-[0.1] leading-[15rem] z-[2]
                        lg:text-[15rem] md:text-[10rem] sm:text-[6rem] xs:text-[5rem] text-[4rem]
                    "
                >
                    DELTA
                </h1>
            </div>
        </div>
    );
}
export default Home;

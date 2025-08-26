'use client';
import { NextPage} from "next";

const Home: NextPage = () => {
    return (
        <div className="w-full h-full flex cursor-crosshair justify-center items-center align-center bg-[#f9f9f9] dark:bg-[#212121] select-none bg-[url('/images/kolkata.svg')] bg-no-repeat bg-bottom bg-size-[100%]">
            <div className="relative flex justify-center items-center content-center">
                <div className="flex flex-col justify-center items-center absolute z-[3] md:gap-2">
                    <h1
                        className="
                         text-[#212121] dark:text-[#ffffff]
                        lg:text-[5rem] lg:leading-[5rem] lg:mt-[-70px]
                        md:text-[4rem] md:leading-[4rem] md:mt-[-45px]
                        sm:text-[3rem] sm:leading-[3rem] sm:mt-[-30px]
                        xs:text-[2.5rem] xs:leading-[2.5rem] xs:mt-[-25px]
                        text-[2rem] leading-[2rem] mt-[-20px]
                    "
                    >
                        Sarath Singh
                    </h1>
                    <div className="flex flex-row gap-2 md:gap-4 text-sm md:text-xl">
                        <div>Engineer</div>
                        <div className="text-2xl md:text-4xl mt-[-6px] md:mt-[-8px]">&bull;</div>
                        <div>Rider</div>
                        <div className="text-2xl md:text-4xl mt-[-6px] md:mt-[-8px]">&bull;</div>
                        <div>Cinematographer</div>
                    </div>
                </div>
                <h1
                    className="
                        font-kumarOne opacity-[0.1] leading-[15rem] z-[2]
                        lg:text-[15rem] md:text-[10rem] sm:text-[8rem] text-[6rem]
                    "
                >
                    DELTA
                </h1>
            </div>
        </div>
    );
}
export default Home;

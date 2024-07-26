import { NextPage } from "next";
import Image from 'next/image'

const Aura: NextPage = () => {
    return (
        <div className="w-full h-full flex cursor-crosshair justify-center items-center align-center bg-[#f9f9f9] dark:bg-[#212121] select-none">
            <div className="relative flex flex-col justify-center items-center content-center">
                <Image
                    width={0}
                    height={0}
                    layout="responsive"
                    src="images/aura.svg"
                    alt="Aura"
                    className="w-full max-w-[400px] dark:invert"
                />
                <h1 className="mt-4 text-black font-light text-[2rem] dark:text-white">Check back later</h1>
            </div>
        </div>
    )
}
export default Aura;

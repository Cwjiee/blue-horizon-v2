import Padi from "../../public/padi.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <>
        <div className="h-[20vh]">
            <div className="bg-slate-500 flex flex-row justify-between">
                <Image src={Padi} alt="padi-logo" />
                <div className="w-[80%]">
                  <span className="text-slate-900">This is the footer. Don&#39;t complain</span>
                </div>
            </div>
        </div>
    </>
  )
}

import Padi from "../../public/padi.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <>
        <div className="h-[20vh]">
            <div className="bg-slate-500">
                <Image src={Padi} alt="padi-logo" />
            </div>
        </div>
    </>
  )
}

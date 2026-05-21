import Image from "next/image";


export default function TopBar() {
  return (
    <div className="bg-blue-400 text-white gap-0 text-sm px-4 py-2 flex justify-between items-center">
      <p>🚚 Trusted Shipping</p>

      <div className="hidden md:flex gap-4">
        <p>Easy RETURNS</p>
        <p>Secure Shopping</p>
      </div>












    </div>

  );
}
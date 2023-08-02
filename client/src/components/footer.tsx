import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <Image src="/icon/logo.svg" alt="Logo" width={80} height={30} />
      </div>
    </footer>
  );
}

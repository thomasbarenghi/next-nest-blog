import SecurityHOC from "@/services/securityHoc";
import Querier from "@/services/querier";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecurityHOC>
        <Querier>{children}</Querier>
      </SecurityHOC>
    </>
  );
}

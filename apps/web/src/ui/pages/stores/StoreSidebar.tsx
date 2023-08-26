import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BarChart2, ShoppingBag, Users, Icon as IconType } from "react-feather";
import { useStoreById } from "~/graphql/stores/useStoreById";

interface SidebarLinkProps {
  Icon: IconType;
  label: string;
  href: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ Icon, label, href }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <p className="">{label}</p>
    </Link>
  );
};

export const StoreSidebar: React.FC = ({}) => {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading } = useStoreById({
    variables: { id: id as string },
  });

  const store = data?.store;

  console.log({ id, data });

  if (loading) return <div>loading...</div>;

  if (!store) return <div>404 could not find store</div>;

  const baseUrl = `/stores/${store.id}`;

  return (
    <aside className="w-48 flex-shrink-0 bg-gray-200 p-3">
      <h3 className="mb-3 font-semibold">{store.name}</h3>
      <div className="space-y-2">
        <SidebarLink Icon={ShoppingBag} label="Products" href={`${baseUrl}/`} />
        <SidebarLink Icon={Users} label="Member" href={`${baseUrl}/members`} />
        <SidebarLink Icon={BarChart2} label="Sales" href={`${baseUrl}/sales`} />
      </div>
    </aside>
  );
};

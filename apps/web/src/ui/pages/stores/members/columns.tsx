import { type ColumnDef } from "@tanstack/react-table";
import { type StoreMember } from "./MembersTable";
import { cn } from "~/utils";
import { StoreMemberRole } from "~/generated/graphql/graphql";
import Image from "next/image";

export const columns: ColumnDef<StoreMember>[] = [
  {
    accessorKey: "profileImage",
    header: () => null,
    cell: ({ row }) => {
      const member = row.original;

      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
          <Image
            width={24}
            height={24}
            alt="Profile image"
            className="flex-shrink-0"
            src={member.user.profileImage}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="">Email</div>,
    cell: ({ row }) => {
      const member = row.original;

      return <div className="font-medium">{member.user.account.email}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const member = row.original;
      const role = member.role;

      const formattedRole: Record<typeof role, string> = {
        [StoreMemberRole.Owner]: "Owner",
        [StoreMemberRole.Admin]: "Admin",
      };

      return (
        <div className={cn(role === StoreMemberRole.Owner && "font-medium")}>
          {formattedRole[role]}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Joined at",
    cell: ({ row }) => {
      const member = row.original;
      console.log(member);

      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(new Date(member.createdAt));

      return <div className="font-medium">{formatted}</div>;
    },
  },
];

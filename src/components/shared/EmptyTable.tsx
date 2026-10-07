import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { SearchX } from "lucide-react";

const EmptyTable = ({ colSpan, title }: { colSpan: number; title: string }) => {
  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={colSpan}>
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
          <span className="rounded-full bg-muted p-3">
            <SearchX className="size-5 text-muted-foreground" />
          </span>
          <p className="font-medium">No {title} found</p>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;

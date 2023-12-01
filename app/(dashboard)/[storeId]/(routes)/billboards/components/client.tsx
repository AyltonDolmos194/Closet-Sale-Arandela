"use client"
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns} from "./columns";
import { DataTable } from "@/components/ui/data-table";
interface BillboardsClientProps{
    data: BillboardColumn[]
}

export const BillboardsClient: React.FC<BillboardsClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboard for your store"
                />
            </div>
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new `)} >
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button >
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data}/>
        </>
    );
}
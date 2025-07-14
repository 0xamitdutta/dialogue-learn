'use client'
import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";


const SearchFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('topic') || '');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
                router.push(newUrl, { scroll: false });
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["topic"],
                });
                router.push(newUrl, {scroll: false});
            }
        }, 500)
    }, [searchQuery, router, searchParams]);

    return (
        <div className="px-2 py-1.5 border border-black rounded-lg shadow-md flex items-center gap-2">
            <Image src="/icons/search.svg" alt="search" height={15} width={15} />
            <input
                placeholder="Search companion..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default SearchFilter

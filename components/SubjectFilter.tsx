'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [subject, setSubject] = useState(searchParams.get('subject') || '');

    useEffect(() => {
        // let newUrl = '';
        if(subject === "all") {
            const newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
            router.push(newUrl, {scroll: false});
        } else {
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
            router.push(newUrl, {scroll: false});
        }
    }, [subject, router, searchParams]);

    return (
        <Select onValueChange={(value) => setSubject(value)} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map(subject => (
                        <SelectItem className="capitalize" key={subject} value={subject}>{subject}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}
export default SubjectFilter

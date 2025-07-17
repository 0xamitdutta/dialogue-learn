import {
    Table,
    TableBody, TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import Image from "next/image";
import { getSubjectColor } from "@/lib/utils";

interface CompanionsListProps {
    title: string;
    companions: Companion[];
}

const CompanionsList = ({ title, companions }: CompanionsListProps) => {
    return (
        <article className="companion-list">
            <h2 className="font-bold text-2xl">Recent Sessions</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Lessons</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions.map(({ id, subject, name, topic, duration }) => (
                        <TableRow key={id}>
                            <TableCell className="w-2/3 max-sm:w-1/2">
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="size-[72px] flex justify-center items-center max-md:hidden rounded-lg" style={{ backgroundColor: getSubjectColor(subject) }}>
                                            <Image src={`/icons/${subject}.svg`} alt={subject} height={35} width={35}></Image>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-xl font-bold">{name}</p>
                                        <p className="text-lg">{topic}</p>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge inline-block max-md:hidden">
                                    {subject}
                                </div>
                                <div className="size-[72px] flex justify-center items-center md:hidden rounded-lg" style={{ backgroundColor: getSubjectColor(subject) }}>
                                    <Image src={`/icons/${subject}.svg`} alt={subject} height={35} width={35}></Image>
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex justify-end items-center gap-2">
                                    <p className="text-xl">{duration} {' '}</p>
                                    <span className="max-md:hidden">mins</span>
                                    <Image src="/icons/clock.svg" alt="minutes" height={15} width={15} className="md:hidden"></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    )
}

export default CompanionsList
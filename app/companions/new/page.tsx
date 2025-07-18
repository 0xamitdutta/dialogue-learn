import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId)
        redirect("/sign-in");

    return (
      <main className="flex justify-center items-center min-lg:w-1/3 min-md:w-2/3">
        <article className="w-full flex flex-col gap-4">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      </main>
    )
}

export default NewCompanion
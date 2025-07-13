'use server';
import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase.from('companions').insert({...formData, author: author }).select();
    if (error || !data)
        throw new Error(error ? error.message : 'Failed to create companion');
    return data[0];
}
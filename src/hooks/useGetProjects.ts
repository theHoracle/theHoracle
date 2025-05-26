import { payload } from "@/payload";
import { useQuery } from "@tanstack/react-query";

const getProjects = async ({category}: {category: string}) => {
    const projects = await payload.find({
        collection: "projects",
        where: {
            category: {
                equals: category,
            },
        },
    })
    return projects
}

export const useGetProjects = ({category}: {category: string}) => {
    return useQuery({
        queryKey: ["projects", category],
        queryFn: () => getProjects({category}),
    })
}
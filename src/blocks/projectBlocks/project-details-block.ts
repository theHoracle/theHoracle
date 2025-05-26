import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const ProjectDetailsBlock: Block = {
    slug: "ProjectDetailsBlock",
    labels: {
        singular: "Project Details",
        plural: "Project Details",
    },
    fields: [
        {
            type: "richText",
            name: "projectDetails",
            label: "Project Details",
            editor: lexicalEditor(),
            admin: {
                description: "Add the details of the project",
            },
        }
    ]
}
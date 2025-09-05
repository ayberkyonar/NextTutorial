import "server-only"

export const serverSideFunction = () => {
    console.log(
        `use multiple libraties`,
            "lodash",
            "date-fns",
            "axios",
    )
    return "This is a server-side utility function";
}
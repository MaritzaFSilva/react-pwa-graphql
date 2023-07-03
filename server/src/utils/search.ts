export const filterByName = <T extends { name: string }>(
    items: T[],
    search: string
) => {
    if (!search) return items;

    const regexPattern = new RegExp(search.replace(/ /g, ".*"), "i");

    return items.filter(({ name }) => regexPattern.test(name));
};

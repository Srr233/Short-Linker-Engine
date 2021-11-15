import Links from '../general date/mongoose_scheme';

const getLink = async (path: string) => {
    const link = await Links.findOne({ short: path });
    if (link) return link.original;
    return false;
}
export { getLink }
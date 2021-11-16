import { Links, UserLink} from '../general date/mongoose_scheme';
import { Link_interface } from '../interfaces/Link_interface';

const getLink = async (path: string) => {
    const link = await Links.findOne({ short: path });
    if (link) return link.original;
    return false;
}

const update_statistic = async (path: string) => {
    const user = await UserLink.findOne({ short: path });
    if (user) {
        user.links.forEach((link: Link_interface) => {
            if (link.short === path) link.statistic.clicks += 1;
        });
        await user.save();
        return true;
    }
    return false;
}
export { getLink, update_statistic }
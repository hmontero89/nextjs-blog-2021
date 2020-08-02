// import { format } from 'date-fns'

export default function Date({ dateString }) {
    // const formattedDate = new Date(dateString);
    // const formattedDate = format(new Date(dateString), 'LLLL d, yyyy');

    return (<time dateTime={dateString}>{dateString}</time>);
}

// format(new Date(dateString), 'LLLL d, yyyy')
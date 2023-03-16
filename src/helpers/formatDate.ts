import moment from "moment";

export function formatDate(date: string): string {
    let format = "MMMM D, YYYY";
    return moment(date).format(format).toString();
}
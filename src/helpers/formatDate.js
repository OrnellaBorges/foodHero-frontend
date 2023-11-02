export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    const formattedDate = date.toLocaleString("fr-FR", options);
    return formattedDate;
};

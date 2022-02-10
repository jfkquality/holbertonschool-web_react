export function getFullYear() {
    const d = new Date();
    return d.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}

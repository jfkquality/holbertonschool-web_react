import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
    it('returns correct year', () => {
        expect(getFullYear()).toEqual((new Date).getFullYear());
    });

    it('returns false message', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });

    it('returns true message', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });

    it('returns latest notification', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});

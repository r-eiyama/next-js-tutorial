import { parseISO, format } from 'date-fns'
import React from "react";

/**
 * 時間をフォーマットして返すメソッド.
 *
 * @param dateString
 * @constructor
 */
export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
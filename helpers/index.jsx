export const menuChange = (position, rol) => {
    const runtime = {
        0: {
            current: rol.timeframes.daily.current,
            previous: rol.timeframes.daily.previous,
            text: 'Last Day'
        },
        1: {
            current: rol.timeframes.weekly.current,
            previous: rol.timeframes.weekly.previous,
            text: 'Last Weekly'
        },
        2: {
            current: rol.timeframes.monthly.current,
            previous: rol.timeframes.monthly.previous,
            text: 'Last Monthly'
        },
    }
    return runtime[position]
}
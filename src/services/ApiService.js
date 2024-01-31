const apiUrl = 'https://dashboard.elering.ee/api';

export const getPriceData = async () => {

    const from = "2020-05-28T20:59:59.999Z";
    const until = "2020-05-30T20:59:59.999Z";

    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    const twoDaysLater = new Date(currentDate);
    twoDaysLater.setDate(currentDate.getDate() + 2);

    const data = new URLSearchParams({
        start: currentDate.toISOString(),
        end: twoDaysLater.toISOString(),
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`);

    return await response.json();
}

export const getPriceCurrent = async () => {

    const response = await fetch(`${apiUrl}/nps/price/EE/current`);
    return await response.json();
}
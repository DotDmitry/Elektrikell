const apiUrl = 'https://dashboard.elering.ee/api';

export const getPriceData = async (from,until) => {

    const data = new URLSearchParams({
        start: from,
        end: until,
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`);

    return await response.json();
}

export const getPriceCurrent = async () => {

    const response = await fetch(`${apiUrl}/nps/price/EE/current`);
    return await response.json();
}
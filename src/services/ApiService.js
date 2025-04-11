//const apiUrl = 'https://dashboard.elering.ee/api';

const apiUrl = 'https://lively-bird-ec92.dvirus13.workers.dev/api';

export const getPriceData = async (from, until) => {
    // URLSearchParams automatically handles encoding the parameter values
    const data = new URLSearchParams({
        start: from,
        end: until,
    });

    // No need for encodeURIComponent here
    const response = await fetch(`${apiUrl}/nps/price?${data}`);
    return await response.json();
}

export const getPriceCurrent = async () => {
    // No need for encodeURIComponent here
    const response = await fetch(`${apiUrl}/nps/price/EE/current`);
    return await response.json();
}

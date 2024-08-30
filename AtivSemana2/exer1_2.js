function getDayName(dayIndex) {
    const days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return days[dayIndex];
}
function getMonthName(monthIndex) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return months[monthIndex];
}

function formatDate(date) {
    const dayName = getDayName(date.getDay());
    const day = date.getDate();
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();

    return `${dayName}, ${day} de ${monthName} de ${year}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

console.log(formattedDate);

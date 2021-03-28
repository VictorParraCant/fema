
export function translate(category) {
    const text = {
        'salary-income': 'Sueldo',
        'meal-expense': 'Comida',
        'transport-expense': 'Transporte',
        'rent-expense': 'Alquiler',
        'house-expense': 'Gasto del hogar',
        'water-expense': 'Factura del agua',
        'light-expenses': 'Factura de la luz',
        'phone-expense': 'Telefono e Internet',
        'education-expense': 'Cursos y Formación',
        'health-insurance-expense': 'Seguro de Salud',
        'incidental-expenses': 'Gasto inesperado',
        'leisure-expense': 'Ocio',
        'gift-expenses': 'Capricho',
        'unknown': 'Desconocido'
    }
    return text[category];
}
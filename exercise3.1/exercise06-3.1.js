function determineScholarship(average, income, residents){
    const perCapita = income / residents;
    if (average >= 8 && perCapita <= 1320){
        return "Full Scholarship";
    } else if (average >= 7 && perCapita <= 1980){
        return "Partial Scholarship";
    } else {
        return "No Scholarship";
    }
}
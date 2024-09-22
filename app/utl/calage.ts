function calculateAge(birthdayString: string): number {
  // Parse the birthday string into a Date object
  const birthday = new Date(birthdayString);

  const targetDate = new Date("2025-01-31");

  // Calculate the difference in years
  let age = targetDate.getFullYear() - birthday.getFullYear();

  // Adjust the age based on whether the birthday has occurred yet in the target year
  const monthDifference = targetDate.getMonth() - birthday.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && targetDate.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
}

export { calculateAge };

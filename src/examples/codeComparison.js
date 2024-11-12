
// AFTER: Optimized Code
function processUserDataOptimized(users) {
  const currentYear = new Date().getFullYear();
  
  // Single iteration using reduce
  const { processedUsers, summary } = users.reduce((acc, user) => {
    // Early return if user doesn't meet criteria
    if (!user.isActive || user.subscriptionType !== 'premium') {
      return acc;
    }
    const age = currentYear - new Date(user.birthDate).getFullYear();
    if (age < 18) return acc;

    // Process valid user
    const processedUser = {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      age,
      subscriptionType: user.subscriptionType
    };
    // Build summary using array join instead of string concatenation
    acc.processedUsers.push(processedUser);
    acc.summaryParts.push(`${processedUser.fullName} (${age})`);

    return acc;
  }, { 
    processedUsers: [], 
    summaryParts: [] 
  });
  // Sort only the filtered results
  processedUsers.sort((a, b) => a.age - b.age);

  return {
    users: processedUsers,
    summary: summary.summaryParts.join(', '),
    count: processedUsers.length
  };
}




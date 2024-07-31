export default {
  coachesList(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coachesList;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};

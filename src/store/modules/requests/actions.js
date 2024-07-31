export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: payload.userId,
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};

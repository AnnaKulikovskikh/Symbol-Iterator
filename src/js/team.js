export default class Team {
  static iteration(team) {
    const entries = Object.entries(team);
    let index = -1;
    team[Symbol.iterator] = function () {
      return {
        next() {
          index += 1;
          return {
            value: entries[index],
            done: index >= entries.length,
          };
        },
      };
    };
  }
}

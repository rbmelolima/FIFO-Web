interface queueData {
  localization: number,
  service: number,
  user: number
}

export class QueueWebStorage {
  clean () {
    localStorage.removeItem('queue');
  }

  get (): queueData | null {
    const queue = localStorage.getItem('queue');

    if (queue !== null) {
      return JSON.parse(queue);
    }

    return null;
  }

  set (queue: queueData) {
    this.clean();
    const parsed = JSON.stringify(queue);
    localStorage.setItem('queu', parsed);
  }
}

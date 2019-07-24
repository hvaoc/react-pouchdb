import processQueue from './utils/processQueue';
import createStore from './createStore';

const store = createStore();

export default function changes(options, handleChange) {
  const [eventEmitter, cleanup] = store([this, options], () => {
    const eventEmitter = this.changes(options);
    return [
      eventEmitter,
      eventEmitter => {
        eventEmitter.cancel();
      }
    ];
  });
  const handleChangeQueued = processQueue(handleChange);
  eventEmitter.on('change', handleChangeQueued);
  return function cancel() {
    eventEmitter.removeListener('change', handleChangeQueued);
    cleanup();
  };
}

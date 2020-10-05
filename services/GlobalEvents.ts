/* eslint-disable class-methods-use-this,consistent-return */

type HandlerType<TData> = (data: TData) => void;

/**
 * Use GlobalEvents to share non-persistent information between components. something like publish an alert or open a sidebar
 * It is implemented with Observer pattern.
 */
class GlobalEventsClass {
  eventMap: Map<string, HandlerType<any>[]>;

  constructor() {
    this.eventMap = new Map();
  }

  public addEventListener<TData>(eventName: string, handler: HandlerType<TData>): void {
    const eventList: HandlerType<TData>[] = this.eventMap.get(eventName) || [];
    eventList.push(handler);
    this.eventMap.set(eventName, eventList);
  }

  public removeEventListener<TData>(eventName: string, handler: (data: TData) => void): void {
    const eventList: HandlerType<TData>[] = this.eventMap.get(eventName) || [];
    const ix = eventList.indexOf(handler);
    if (ix === -1) {
      return console.error('Handler not exists for eventName', {
        eventName,
      });
    }

    eventList.splice(ix, 1);
    console.info('remained: ', this.eventMap.get(eventName));
  }

  public dispatchEvent<TData>(eventName: string, data: TData): void {
    const eventList: HandlerType<TData>[] = this.eventMap.get(eventName) || [];
    eventList.forEach((handler) => handler(data));
  }
}

const GlobalEvents = new GlobalEventsClass();
export default GlobalEvents;
